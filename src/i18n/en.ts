export const en = {
    nav: { home: "Home", blog: "Blog", cheatsheet: "Der Die Das Cheat Sheet", download: "Download" },
    hero: {
        tagline: "German Vocabulary App",
        title: "Learn German Words\nThat Actually Stick",
        subtitle: "12,000+ German words with color-coded articles, smart SRS, exam prep lists, and zero ads — built by a learner, for learners.",
        appStore: "App Store",
        googlePlay: "Google Play",
    },
    screenshots: {
        tagline: "App Preview",
        title: "Everything you need in one place",
        subtitle: "A clean, focused experience designed around one goal: building your German vocabulary for good.",
        alt: [
            "Wortaso home screen — daily goal tracker with German vocabulary levels A1 through C1",
            "Wortaso flashcard — 'die Regierung' with color-coded article and SRS progress bar",
            "Wortaso word lists — Einbürgerungstest and Führerschein exam prep lists",
            "Wortaso custom list — A2 Exam list with color-coded articles and practice button",
            "Wortaso flashcard — 'der Erfolg' with Persian translation and audio button",
            "Wortaso quiz — 'Richtung' flashcard with Der, Die, Das answer buttons",
            "Wortaso dictionary — instant search showing results for 'interv' with color-coded articles",
            "Wortaso bookmarks — saved difficult words list with color-coded articles",
        ],
    },
    featureSections: [
        {
            tagline: "Spaced Repetition",
            title: "Never forget a word again",
            description: "Wortaso's Neuro-Adaptive SRS tracks which words you struggle with and automatically schedules reviews at the perfect moment for long-term retention. Study smarter, not harder.",
            imageAlt: "Wortaso flashcard showing 'die Regierung' with color-coded article and SRS progress",
        },
        {
            tagline: "Exam Preparation",
            title: "Ready-made lists for German exams",
            description: "Curated vocabulary lists for the Einbürgerungstest (citizenship test) and Führerschein (driving license test) — so you study exactly the words that matter most.",
            imageAlt: "Wortaso word lists screen showing Einbürgerungstest and Führerschein exam prep lists",
        },
        {
            tagline: "Built-in Dictionary",
            title: "12,000+ words at your fingertips",
            description: "Instant search across 12,000+ German nouns. Every word shows the correct article color-coded — blue for der, pink for die, yellow for das — so you learn it naturally alongside the noun.",
            imageAlt: "Wortaso dictionary screen showing instant search results with color-coded articles",
        },
        {
            tagline: "Multilingual",
            title: "Learn in your language",
            description: "Switch between English and Persian translations to study in the language you're most comfortable with. More languages are coming soon.",
            imageAlt: "Wortaso flashcard showing 'der Erfolg' with Persian translation موفقیت",
        },
    ],
    features: {
        tagline: "Features",
        title: "Everything you need to build vocabulary",
        subtitle: "No fluff, no distractions — just the features that make learning German words effective and lasting.",
        items: [
            {
                title: "12,000+ German Words",
                description: "Nouns with translations in English and Persian, covering A1 through C1 levels.",
            },
            {
                title: "Color-Coded Articles",
                description: "Der, Die, Das color-coded on every word so you absorb the article naturally.",
            },
            {
                title: "Example Sentences",
                description: "Learn words in context with real example sentences for deeper understanding.",
            },
            {
                title: "Exam Prep Lists",
                description: "Ready-made vocabulary lists for Einbürgerungstest and Führerschein exams.",
            },
            {
                title: "Custom Word Lists",
                description: "Create and organize your own lists to focus on what matters to you.",
            },
            {
                title: "Smart SRS",
                description: "Neuro-Adaptive spaced repetition that adapts to your memory and progress.",
            },
            {
                title: "Bookmarks",
                description: "Save your hardest words to a special list and come back to them anytime.",
            },
            {
                title: "Zero Ads",
                description: "No ads, no subscriptions. Clean, focused learning — download once, learn forever.",
            },
        ],
    },
    socialProof: {
        rating: "5.0",
        platform: "Google Play",
        label: "Rated 5 stars on Google Play",
        reviewCount: "5 reviews",
        ctaText: "Join thousands of learners",
    },
    cta: {
        tagline: "Start Today",
        title: "Download Wortaso — It's Free",
        subtitle: "No ads. No subscriptions. Just progress.",
        appStore: "Get on App Store",
        googlePlay: "Get on Google Play",
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
    cookies: {
        message:
            "We use cookies to analyze website traffic and improve your experience. You can choose to accept or decline analytics cookies.",
        accept: "Accept",
        decline: "Decline",
        learnMore: "Learn More",
    },
};

export type Translations = typeof en;
