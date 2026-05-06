export type Beer = {
  name: string;
  brewery: string;
  style: string;
  ibu: string;
  abv: string;
  prices: Record<"265 ml" | "485 ml" | "Litro", string>;
};

// Dados extraídos da imagem enviada. Preços podem mudar e devem ser validados pelo cliente.
export const beers: Beer[] = [
  { name: "Sour Frutas Vermelhas", brewery: "Xamã", style: "Sour", ibu: "5", abv: "5,2%", prices: { "265 ml": "R$ 16", "485 ml": "R$ 24", Litro: "R$ 42" } },
  { name: "Alemanha", brewery: "Way Beer", style: "Hefeweizen", ibu: "9", abv: "4,3%", prices: { "265 ml": "R$ 12", "485 ml": "R$ 18", Litro: "R$ 32" } },
  { name: "Viaggio", brewery: "Friamno", style: "Blond Ale", ibu: "16", abv: "6,3%", prices: { "265 ml": "R$ 12", "485 ml": "R$ 18", Litro: "R$ 32" } },
  { name: "Aces High", brewery: "Bodebrown", style: "", ibu: "17", abv: "4,7%", prices: { "265 ml": "R$ 13", "485 ml": "R$ 20", Litro: "R$ 35" } },
  { name: "Pilsen", brewery: "Swamp", style: "Pilsen", ibu: "18", abv: "4,8%", prices: { "265 ml": "R$ 8", "485 ml": "R$ 12", Litro: "R$ 20" } },
  { name: "Avelã Porter", brewery: "Way Beer", style: "Porter", ibu: "20", abv: "5,7%", prices: { "265 ml": "R$ 13", "485 ml": "R$ 20", Litro: "R$ 35" } },
  { name: "Vienna Lager", brewery: "Pata Negra", style: "Vienna Lager", ibu: "21", abv: "5,2%", prices: { "265 ml": "R$ 11", "485 ml": "R$ 17", Litro: "R$ 30" } },
  { name: "Delicinha do Verão", brewery: "Evil Hops", style: "", ibu: "37", abv: "4,9%", prices: { "265 ml": "R$ 13", "485 ml": "R$ 20", Litro: "R$ 35" } },
  { name: "Foreplay", brewery: "Swamp", style: "APA", ibu: "44", abv: "5,1%", prices: { "265 ml": "R$ 13", "485 ml": "R$ 20", Litro: "R$ 35" } },
  { name: "Caju Atômico", brewery: "Xamã", style: "", ibu: "45", abv: "5,2%", prices: { "265 ml": "R$ 12", "485 ml": "R$ 18", Litro: "R$ 32" } },
  { name: "Mosaic IPA", brewery: "Van Dutch", style: "IPA", ibu: "60", abv: "6,4%", prices: { "265 ml": "R$ 13", "485 ml": "R$ 20", Litro: "R$ 35" } },
  { name: "Máxima Double IPA", brewery: "Van Dutch", style: "Double IPA", ibu: "92", abv: "8,4%", prices: { "265 ml": "R$ 16", "485 ml": "R$ 24", Litro: "R$ 42" } },
];
