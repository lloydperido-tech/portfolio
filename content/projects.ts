export type ProjectSummary = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: ProjectSummary[] = [
  {
    slug: 'zero-based-budgeting',
    title: 'Zero-Based Budgeting and Financial Prediction System',
    category: 'Philippines',
    summary: 'A mobile-first finance system that predicts spending and recommends budgeting actions using ML.',
    problem: 'Users struggled to manage spending consistently and needed personalized financial guidance.',
    approach: 'Built a Flutter mobile app, used SQLite for local storage, and developed a Python backend for NLP transaction parsing and ARIMA forecasting with Pandas and NumPy.',
    impact: 'Delivered predictive budgeting recommendations and real-time financial insights for improved discipline and planning.',
    stack: ['Flutter', 'SQLite', 'Python', 'Pandas', 'NumPy', 'ARIMA'],
    links: [
      { label: 'Details', href: '#' }
    ]
  },
  {
    slug: 'possessed-3d-horror',
    title: 'Possessed: A 3D Horror Survival Puzzle Game',
    category: 'Philippines',
    summary: 'A multiplayer horror survival puzzle experience where players explore a haunted house, solve puzzles, and avoid hostile entities.',
    problem: 'Create an immersive survival experience with cooperative puzzle-solving inside a haunted environment.',
    approach: 'Developed with Roblox Studio using Lua for gameplay systems, puzzle mechanics, and AI behavior focused on exploration and atmosphere.',
    impact: 'Delivered an engaging horror experience with immersive puzzles and tense multiplayer dynamics.',
    stack: ['Roblox Studio', 'Lua', 'Game Design'],
    links: [
      { label: 'Details', href: '#' }
    ]
  },
  {
    slug: 'kabsulit',
    title: 'KabSulit — Campus Peer-to-Peer Marketplace',
    category: 'Philippines',
    summary: 'A university marketplace that enables students to buy, sell, and exchange goods and services within the campus community.',
    problem: 'Students needed a safe and simple platform to trade items and communicate locally on campus.',
    approach: 'Built a marketplace with Supabase Realtime for listings and synchronized chat, enabling seamless student-to-student transactions.',
    impact: 'Improved campus commerce and reduced friction for buying, selling, and exchanging goods among students.',
    stack: ['Supabase', 'React', 'Postgres', 'Realtime'],
    links: [
      { label: 'Details', href: '#' }
    ]
  },
  {
    slug: 'cvsu-drs',
    title: 'CVSU-DRS: AI-Powered Document Request System',
    category: 'Philippines',
    summary: 'A web-based document request system that automates tracking and provides AI-powered assistance for users.',
    problem: 'Institutions struggled with manual document request tracking and slow processing times.',
    approach: 'Created a web app with automated workflow tracking and an AI chatbot to help users with request submission and status updates.',
    impact: 'Streamlined document request processing and reduced administrative overhead through automation and intelligent assistance.',
    stack: ['React', 'Node.js', 'AI Chatbot'],
    links: [
      { label: 'Details', href: '#' }
    ]
  }
];
