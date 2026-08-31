export interface GameReview {
  author: string;
  date: string;
  rating: number;
  scoreBadge?: string;
  title?: string;
  bullets?: string[];
  footerNote?: string;
  text?: string;
  paragraphs?: string[];
}

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
  reviews: GameReview[];
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
    reviews: [
      {
        author: "Yonix_Studio",
        date: "Nov 30, 2025",
        rating: 5,
        title: "ONE OF THE MOST DISTURBING GAME I'VE PLAYED !",
        bullets: [
          "I loved the story and the experience was terrifying in the best possible way",
          "For fun, I even dressed up as Chloe and recorded the voice overs myself",
          "That ending was absolutely cinema !",
        ],
        footerNote: "Can't wait to see more games likes this one !",
      },
      {
        author: "Modactor",
        date: "Oct 21, 2025",
        rating: 5,
        text: "Masterpiece.... Really Really good",
      },
      {
        author: "TisticDemon",
        date: "10 months ago",
        scoreBadge: "(+1)",
        rating: 5,
        text: "What a solid game this was indeed! Awesome story, graphics, mechanics, etc. That section where we have to either escape or do the other option was quite heart wrenching indeed. Super scary avoiding the killer. Managed to get all the endings.",
      },
    ],
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
    reviews: [
      {
        author: "badnamesgames",
        date: "Sep 03, 2025",
        rating: 5,
        text: "Spectacular indie horror vibes! Great dev that is responsive to any issues and continues to refine the game to crush bugs. Highly recommended if you love the retro Alone in the Dark or Resident Evil games but don't want another modern reboot of an old story. It's a short game but absolutely worth the time to play through it. Keep an eye on this dev because I feel like they're going places.",
      },
      {
        author: "samthefireball",
        date: "8 months ago",
        rating: 5,
        text: "What a fantastic game! Great little ~2 hour classic survival horror, loved the level design and creepy cult in the back country vibe.",
      },
      {
        author: "alexisrambles",
        date: "a year ago",
        rating: 5,
        text: "I had SO much fun playing this game! It's practically dripping retro fun! I was alternately charmed and pissed at not having enough cigars and having to go back to get the book.... more times than I care to say lol. I'm super excited for the hinted sequel/next game shown at the end as well. Following this dev for sure!",
      },
    ],
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
    reviews: [
      {
        author: "Niven Hedinger",
        date: "3 years ago",
        scoreBadge: "(+1)",
        rating: 5,
        paragraphs: [
          "An absolute masterpiece – the demo stuck with me, wanting even more!",
          "Rarely do I come across the demo, which brilliantly showcased the developer's vision – this had everything I hoped for. Gorgeous looking environment, the mystery, cryptic, ambiguous storyline, the LIGHTHOUSE, fricking LIGHTHOUSE WOW! The sound design, movement, everything was top notch. I can't praise this enough. Definitely worth the play.",
          "Can't wait for more, wish all the best in making this masterpiece. Cheers!",
        ],
      },
      {
        author: "LilBoiBen",
        date: "2 years ago",
        rating: 5,
        text: "This was a VERY well made demo! The sound design, the ambiance, and even the environment was fantastic! This was exactly what I want from a demo, a proper vision of what the developer wants! I'm looking forward to the full release!",
      },
      {
        author: "debiangames",
        date: "2 years ago",
        rating: 5,
        text: 'One of the best "classic survival horror" from itcho. Cant wait to play the full version of this game.',
      },
    ],
  },
];




