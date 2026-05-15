import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();

const vulnerableVersions = new Map([
  ["@tanstack/react-router", new Set(["1.169.5", "1.169.8"])],
  ["@tanstack/history", new Set(["1.161.9", "1.161.12"])],
  ["@tanstack/router-core", new Set(["1.169.5", "1.169.8"])],
  ["@tanstack/router-generator", new Set(["1.166.45", "1.166.48"])],
  ["@tanstack/router-cli", new Set(["1.166.46", "1.166.49"])],
  ["@tanstack/router-plugin", new Set(["1.167.38", "1.167.41"])],
  ["@tanstack/router-vite-plugin", new Set(["1.166.53", "1.166.56"])],
  ["@tanstack/vue-router", new Set(["1.169.5", "1.169.8"])],
  ["@tanstack/solid-router", new Set(["1.169.5", "1.169.8"])],
  ["@mistralai/mistralai", new Set(["2.4.6"])],
  ["@opensearch-project/opensearch", new Set(["3.5.3", "3.6.2", "3.7.0", "3.8.0"])],
  ["guardrails-ai", new Set(["0.10.1"])],
]);

const watchScopes = [
  "@tanstack/",
  "@uipath/",
  "@mistralai/",
  "@opensearch-project/",
  "@cap-js/",
];

const iocPatterns = [
  /router_init\.js/i,
  /router_runtime\.js/i,
  /tanstack_runner\.js/i,
  /@tanstack\/setup/i,
  /github:tanstack\/router#79ac49eedf774dd4b0cfa308722bc463cfe5885c/i,
  /filev2\.getsession\.org/i,
  /seed[1-3]\.getsession\.org/i,
  /gh-token-monitor/i,
  /setup bun\.js/i,
  /transformers\.pyz/i,
];

const failures = [];
const warnings = [];

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function checkPackageLock() {
  const lockPath = join(root, "package-lock.json");
  if (!existsSync(lockPath)) return;

  fail("package-lock.json is present. This project is pnpm-managed; use pnpm-lock.yaml only.");
}

function checkLockfileText(path) {
  if (!existsSync(path)) {
    fail(`${relative(root, path)} is missing.`);
    return;
  }

  const text = readFileSync(path, "utf8");
  for (const pattern of iocPatterns) {
    if (pattern.test(text)) {
      fail(`${relative(root, path)} contains Mini Shai-Hulud IoC pattern: ${pattern}`);
    }
  }

  for (const [name, versions] of vulnerableVersions) {
    for (const version of versions) {
      const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const exactPattern = new RegExp(`${escapedName}[@:\\s]+${version.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i");
      if (exactPattern.test(text) || (text.includes(name) && text.includes(`version: ${version}`))) {
        fail(`${relative(root, path)} references compromised package ${name}@${version}.`);
      }
    }
  }
}

function checkManifest() {
  const manifest = readJson(join(root, "package.json"));

  if (!manifest.packageManager?.startsWith("pnpm@")) {
    fail("package.json must declare packageManager as pnpm@...");
  }

  const allDeps = {
    ...manifest.dependencies,
    ...manifest.devDependencies,
    ...manifest.optionalDependencies,
  };

  for (const [name, range] of Object.entries(allDeps)) {
    if (watchScopes.some((scope) => name.startsWith(scope))) {
      warn(`Dependency ${name}@${range} is in a scope affected by recent supply-chain incidents; review before installing.`);
    }

    const compromised = vulnerableVersions.get(name);
    if (compromised?.has(String(range).replace(/^[~^=]/, ""))) {
      fail(`package.json declares compromised package ${name}@${range}.`);
    }
  }
}

function walkForIocs(dir) {
  if (!existsSync(dir)) return;

  for (const entry of readdirSync(dir)) {
    if (entry === ".git" || entry === ".next" || entry === "node_modules") continue;

    const path = join(dir, entry);
    const stats = statSync(path);
    const rel = relative(root, path);

    if (iocPatterns.some((pattern) => pattern.test(entry))) {
      fail(`Suspicious IoC filename found: ${rel}`);
    }

    if (stats.isDirectory()) {
      walkForIocs(path);
    }
  }
}

checkManifest();
checkPackageLock();
checkLockfileText(join(root, "pnpm-lock.yaml"));
walkForIocs(root);

for (const message of warnings) {
  console.warn(`install-safety warning: ${message}`);
}

if (failures.length > 0) {
  console.error("install-safety failed:");
  for (const message of failures) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

console.log("install-safety passed");
