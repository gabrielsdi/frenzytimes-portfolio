export interface Game {
  id: string;
  title: string;
  description: string;
  genre: string;
  platform: string;
  price: string | null;
  itchUrl: string;
  coverImage: string;
  tags: string[];
}

export const games: Game[] = [
  {
    id: "broken-leash",
    title: "Broken Leash",
    description:
      "Explore with caution, trust your instincts, and remember: not everything you hear is from your imagination.",
    genre: "Survival Horror",
    platform: "Windows",
    price: "Free",
    itchUrl: "https://frenzytimes.itch.io/broken-leash",
    coverImage: "https://img.itch.zone/aW1nLzIzNzg5MjU1LnBuZw==/315x250%23c/lqA3Bg.png",
    tags: ["Horror", "Survival", "PSX"],
  },
  {
    id: "crimson-faith",
    title: "Crimson Faith",
    description:
      "Test your faith by exploring this abandoned farm. A haunting Survival-Horror-Adventure that will shake you to your core.",
    genre: "Survival Horror",
    platform: "Windows",
    price: "$2.99",
    itchUrl: "https://frenzytimes.itch.io/crimson-faith",
    coverImage: "https://img.itch.zone/aW1nLzIzNzkzMzcxLnBuZw==/315x250%23c/k3wQco.png",
    tags: ["Horror", "Adventure", "PSX"],
  },
  {
    id: "prayers-from-the-abyss",
    title: "Prayers from the Abyss (DEMO)",
    description:
      "Enter this mysterious town and look for a way to survive. A Survival-Horror-Adventure demo that will leave you wanting more.",
    genre: "Survival Horror",
    platform: "Windows",
    price: "DEMO",
    itchUrl: "https://frenzytimes.itch.io/prayers-from-the-abyss",
    coverImage: "https://img.itch.zone/aW1nLzIxMjQwNjI0LnBuZw==/315x250%23c/tYoOxT.png",
    tags: ["Horror", "DEMO", "PSX"],
  },
];

