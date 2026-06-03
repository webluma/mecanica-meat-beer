export type MenuCategory = "entrada" | "hamburguer" | "brasa";

export type MenuItem = {
  name: string;
  category: MenuCategory;
  description: string;
  image: string;
  imagePosition: string;
  alt: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Provolera",
    category: "entrada",
    description: "Queijo provolone grelhado com geleia de pimenta.",
    image: "/images/menu/provolera-real.png",
    imagePosition: "50% 50%",
    alt: "Provolera da BRASSA BREWING",
  },
  {
    name: "Linguicinha",
    category: "entrada",
    description: "Linguicinha de pernil suíno recheada com provolone e tomate seco.",
    image: "/images/menu/linguica-real.png",
    imagePosition: "50% 50%",
    alt: "Linguicinha na brasa",
  },
  {
    name: "Vegetariano",
    category: "hamburguer",
    description: "Alface, rúcula, tomate, molho à escolha e queijo à escolha.",
    image: "/images/menu/vegetariano-real.png",
    imagePosition: "50% 50%",
    alt: "Hambúrguer vegetariano da BRASSA BREWING",
  },
  {
    name: "S.U.Í.N.O",
    category: "hamburguer",
    description: "Pão, carne suína, chutney de abacaxi e queijo provolone.",
    image: "/images/menu/suino-real.png",
    imagePosition: "50% 50%",
    alt: "Hambúrguer suíno da BRASSA BREWING",
  },
  {
    name: "Bovino",
    category: "hamburguer",
    description: "Alface, tomate, maionese de alho e queijo prato.",
    image: "/images/menu/bovino-real.png",
    imagePosition: "50% 50%",
    alt: "Hambúrguer bovino da BRASSA BREWING",
  },
  {
    name: "Cordeiro",
    category: "hamburguer",
    description: "Rúcula, maionese de hortelã e queijo colonial.",
    image: "/images/menu/cordeiro-real.png",
    imagePosition: "50% 50%",
    alt: "Hambúrguer de cordeiro da BRASSA BREWING",
  },

];
