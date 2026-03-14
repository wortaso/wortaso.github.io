export const en = {
  nav: { home: "Home", blog: "Blog" },
  hero: {
    subtitle: "Download our app and get started today!",
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  screenshots: {
    tagline: "App Preview",
    title: "See it in action",
    alt: [
      "Wortaso app screenshot 1",
      "Wortaso app screenshot 2",
      "Wortaso app screenshot 3",
    ],
  },
  features: {
    tagline: "Features",
    title: "What's Included",
    subtitle: "Everything you need to master German vocabulary.",
    items: [
      {
        title: "No Ads",
        description:
          "Clean, distraction-free learning with zero advertisements.",
      },
      {
        title: "Dictionary to Search",
        description:
          "+20,000 most frequent German words at your fingertips.",
      },
      {
        title: "Scientific Method to Learn",
        description:
          "Uses Neuro-Adaptive SRS to keep your memory sharp.",
      },
    ],
  },
  footer: { privacy: "Privacy Policy", copyright: "All rights reserved." },
  blog: {
    tagline: "Blog",
    title: "Our Publications",
    subtitle: "Explore the latest articles for German learners.",
    readingTime: "min read",
    backToBlog: "Back to Blog",
  },
  notFound: {
    description:
      "Sorry, we can't find the page you're looking for. It may have been moved or deleted.",
    backHome: "Back to Home",
  },
};

export type Translations = typeof en;
