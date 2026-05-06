import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "solid" | "outline" | "text";
};

export function Button({
  href,
  children,
  external = false,
  variant = "outline",
}: ButtonProps) {
  const className = `button button-${variant}`;

  if (external) {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        {children} <span aria-hidden="true">→</span>
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}
