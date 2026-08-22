export const SITE = {
  name: 'Darko Stankovski',
  github: 'https://github.com/darko-itpro',
  linkedin: 'https://www.linkedin.com/in/darko-stankovski-86050a2/',
  location: 'France',
};

export const BIO = {
  en: {
    tagline: 'Python · Django · Wagtail CMS · Astro',
    description:
      'Freelance developer specialized in Python and Wagtail. Python & data science trainer.',
  },
  fr: {
    tagline: 'Python · Django · Wagtail CMS · Astro',
    description:
      'Développeur indépendant spécialisé en Python et Wagtail. Formateur technique Python & data science.',
  },
};

export const TRAINING_TOPICS = ['python-fundamentals', 'python-advanced', 'data-science'];

export const TRAINING_TOPIC_LABELS: Record<string, { en: string; fr: string }> = {
  'python-fundamentals': { en: 'Python Fundamentals', fr: 'Python, les bases' },
  'python-advanced': { en: 'Python, advanced', fr: 'Python, avancé'},
  'data-science':        { en: 'Data Science',        fr: 'Data Science' },
};

export const NAV_LINKS = {
  en: [
    { label: './projects', href: 'https://github.com/darko-itpro' },
    { label: './blog',     href: '/blog/' },
    { label: './trainings', href: '/trainings/' },
    { label: './.taverne_invisible (🇫🇷)',  href: 'https://taverneinvisible.net' },
  ],
  fr: [
    { label: './projets', href: 'https://github.com/darko-itpro' },
    { label: './blog',    href: '/fr/blog/' },
    { label: './formations', href: '/fr/trainings/' },
    { label: './.taverne_invisible',  href: 'https://taverneinvisible.net' },
  ],
};
