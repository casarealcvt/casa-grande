import type { CollectionKey } from "astro:content";

export const twitter = "@casa_realmexicanarestaurant";

export const orderUrl =
  "https://www.foodbooking.com/ordering/restaurant/menu/info?company_uid=569b76f7-a0ca-4cd4-9c64-bef849a55ca5&restaurant_uid=976a64b7-2aca-495d-8a15-c55a29818389";

export const defaultMeta = {
  title: "Casa Grande Mexican Restaurant",
  description:
    "Savor the best Mexican food in Williston, Vermont! From flavorful tacos to fresh guacamole, enjoy an unforgettable culinary experience at our renowned restaurant",
  ogImagePath: "og.webp",
};

export const socialLinks = {
  DoorDash: "https://www.doordash.com/store/casa-grande-williston-31013945/",
};

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
];

export const popularDishes = [
  {
    title: "Fajitas",
    href: "/menu#fajitas",
    description:
      "Grilled with bell peppers, onions, and tomatoes. Served with rice, beans, lettuce, sour cream, shredded cheese, pico de gallo, tomato, and three flour or corn tortillas",
    img: {
      src: "/src/assets/popular/fajitas.webp",
      alt: "fajitas on a sizzling plate",
    },
  },
  {
    title: "Desserts",
    href: "/menu#desserts",
    description:
      "A mix of all of our desserts! Can't decide which to order? This ones for you!",
    img: {
      src: "/src/assets/popular/sopapilla.jpeg",
      alt: "sopapilla",
    },
  },
  {
    title: "Enchiladas",
    href: "/menu#enchiladas",
    description:
      "Three chicken enchiladas topped with cheese, your choice of green or red sauce, lettuce, sour cream, tomatoes. Served with a side of Spanish rice",
    img: {
      src: "/src/assets/popular/enchiladas.webp",
      alt: "two enchiladas in a plate",
    },
  },
];

export const categories: {
  title: string;
  slug: CollectionKey;
}[] = [
  {
    title: "Appetizers",
    slug: "appetizers",
  },
  {
    title: "Burritos",
    slug: "burritos",
  },
  {
    title: "Chicken",
    slug: "chicken",
  },
  {
    title: "Desserts",
    slug: "desserts",
  },
  {
    title: "Enchiladas",
    slug: "enchiladas",
  },
  {
    title: "Fajitas",
    slug: "fajitas",
  },
  {
    title: "House Specialties",
    slug: "house-specialties",
  },
  {
    title: "Kids Menu",
    slug: "kids-menu",
  },
  {
    title: "Lunch Specials",
    slug: "lunch-specials",
  },
  {
    title: "Nachos",
    slug: "nachos",
  },
  {
    title: "Quesadillas",
    slug: "quesadillas",
  },
  {
    title: "Salads",
    slug: "salads",
  },
  {
    title: "Seafood",
    slug: "seafood",
  },
  {
    title: "Steak",
    slug: "steaks",
  },
  {
    title: "Tacos",
    slug: "tacos",
  },
];
