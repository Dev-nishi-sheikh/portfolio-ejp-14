import devcon from "../assets/projects/Devcon.png";
import fitlog from "../assets/projects/fitlog.png";
import banglaNews from "../assets/projects/bangla-news-24.png";
import portfolio from "../assets/projects/portfolio.svg";

const projects = [
  {
    id: 1,
    title: "Devcon 2026 — Developer Conference",
    image: devcon,
    category: "Event Landing Page",
    technologies: ["HTML5", "CSS3"],
    description:
      "A dark, high-impact landing page for DEVCOM 2026 — a three-day developer conference for 4,000+ engineers, founders and builders. Hand-coded with semantic HTML and modern CSS, it features a bold typographic hero, a sticky navbar with a Register Now call-to-action, and fully responsive speakers, schedule, tracks and venue sections.",
    live: "https://dev-nishi-sheikh.github.io/Assignment-01/",
    github: "https://github.com/Dev-nishi-sheikh/Assignment-01",
    challenges: [
      "Keeping the oversized hero type bold but never overflowing on small screens",
      "Building a sticky navbar that stays readable on top of the dark hero image",
      "Structuring the speakers, schedule and tracks sections with CSS Flexbox/Grid so they stay scannable on mobile",
    ],
    future: [
      "Real ticket registration with payment gateway integration",
      "Speaker detail pages and a personal agenda builder saved to localStorage",
      "Live countdown timer and schedule updates during the event",
    ],
  },
  {
    id: 2,
    title: "Fitlog — Workout Tracking App",
    image: fitlog,
    category: "Fitness & Health Web App",
    technologies: ["React", "Tailwind CSS", "JavaScript (ES6+)", "LocalStorage"],
    description:
      "A clean fitness companion for training with intent. Users browse an exercise library filtered by muscle group and equipment, open illustrated exercise cards, build a personal training plan, and log every set with weight, reps and rest tracking.",
    live: "https://dev-nishi-sheikh.github.io/fitlog/",
    github: "https://github.com/Dev-nishi-sheikh/fitlog",
    challenges: [
      "Designing instant multi-criteria filtering (muscle group + equipment) over the exercise library",
      "Keeping workout logs organised and persistent with browser localStorage",
      "Making the dark interface readable with clear contrast for weight, reps and set data",
    ],
    future: [
      "Progress charts and weekly volume stats per muscle group",
      "Node.js / Express + MongoDB accounts to sync training plans across devices",
      "Rest timer with notifications between sets",
    ],
  },
  {
    id: 3,
    title: "Bangla News 24 — Online News Portal",
    image: banglaNews,
    category: "Full-Stack News Portal",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "daisyUI",
      "MongoDB",
      "better-auth",
    ],
    description:
      "A full-stack Bangla news portal built with Next.js 16 (App Router) and TypeScript. It pulls live headlines from a news API and renders a breaking-news marquee, a lead-story hero, category-wise sections and a 'most read' list. Readers can browse categories and open full article pages, and can sign up / sign in with email and password (better-auth + MongoDB) to personalise their reading experience.",
    live: "",
    github: "https://github.com/Dev-nishi-sheikh/bangla-news-24",
    challenges: [
      "Rendering live third-party news data with Next.js server components and handling loading and empty states",
      "Implementing secure email/password authentication with better-auth, persisted in MongoDB",
      "Designing a Bangla-first news layout (marquee, category rows, article pages) that stays readable on mobile",
      "Wiring up dynamic routes for categories and individual articles",
    ],
    future: [
      "Bookmarks and a personalised reading list for signed-in users",
      "Full-text search across articles and categories",
      "Comments and reactions on articles",
      "An editor CMS dashboard to publish and manage articles",
    ],
  },
  {
    id: 4,
    title: "Personal Portfolio — Nilima.dev",
    image: portfolio,
    category: "Personal Portfolio Website",
    technologies: ["React 19", "Vite", "Tailwind CSS v4", "React Router", "JavaScript (ES6+)"],
    description:
      "A modern, fully responsive personal portfolio that brings my skills, projects, education and resume together in a single-page experience. Built from scratch with React 19, Vite and Tailwind CSS v4, it features reusable components, client-side routing, a filterable skills section, a detailed project case-study page and a print-friendly resume that can be saved as a PDF. Deployed on Vercel with automatic redeploys from GitHub.",
    live: "https://portfolio-ejp-14.vercel.app/",
    github: "https://github.com/Dev-nishi-sheikh/portfolio-ejp-14",
    challenges: [
      "Designing a reusable component architecture and keeping the visual language consistent across every section",
      "Making each section fully responsive, from small phones up to large desktops",
      "Configuring the correct Vite base path so the same build works on both Vercel and GitHub Pages",
      "Building a clean, print-friendly resume page that can be saved as a PDF",
    ],
    future: [
      "Adding a real backend (Node.js + Express + MongoDB) so the contact form sends emails",
      "A blog section to share what I learn while growing into full-stack development",
      "Dark-mode toggle and subtle scroll animations",
      "One-click resume download generated as a PDF",
    ],
  },
];

export default projects;
