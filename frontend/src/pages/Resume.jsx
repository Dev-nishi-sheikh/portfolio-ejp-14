import { Link } from "react-router-dom";
import projects from "../data/projects";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
  HiArrowUp,
  HiArrowRight,
  HiCode,
  HiOutlineAcademicCap,
  HiOutlineBadgeCheck,
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */

const contact = {
  email: "nishishekh04@gmail.com",
  phone: "+880 1700-000000",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/Dev-nishi-sheikh",
  linkedin: "https://www.linkedin.com/in/nishi-shekh-683058421",
};

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "React Router",
      "Responsive UI",
    ],
  },
  {
    title: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "CRUD",
    ],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Vite", "npm", "Postman", "VS Code", "Vercel"],
  },
];

const coreSkills = [
  { name: "HTML5 & CSS3", icon: FaHtml5, level: 92, color: "text-orange-400" },
  {
    name: "JavaScript (ES6+)",
    icon: SiJavascript,
    level: 88,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 76,
    color: "text-blue-400",
  },
  { name: "React.js", icon: FaReact, level: 86, color: "text-cyan-400" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: 78,
    color: "text-slate-200",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 90,
    color: "text-teal-400",
  },
  {
    name: "Node.js & MongoDB",
    icon: SiMongodb,
    level: 68,
    color: "text-emerald-400",
  },
];

const education = [
  {
    degree: "Diploma in Computer Science & Technology (CST)",
    institution: "Rangpur Polytechnic Institute",
    period: "2024 – 2028 (Expected)",
    grade: "Ongoing",
    note: "Coursework: Programming in C, OOP (Java), Data Structures & Algorithms, DBMS, Web Design & Development, Computer Networks.",
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Nalonda International School and College",
    period: "2022 – 2024",
    grade: "GPA 5.00 / 5.00 (A+)",
    note: "Passed SSC in 2024 with a perfect GPA 5.00 (A+) in Science — a strong base in mathematics and ICT.",
  },
];

const certifications = [
  {
    title: "Complete Web Development Bootcamp (MERN)",
    issuer: "Online Learning Academy",
    year: "2024",
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    year: "2023",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2024",
  },
];

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

const MainTitle = ({ icon: Icon, children }) => (
  <h2 className="mb-4 flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-[0.16em] text-slate-900">
    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-teal-600 ring-1 ring-teal-100">
      <Icon className="text-base" />
    </span>
    {children}
  </h2>
);

const SideTitle = ({ children }) => (
  <h2 className="mb-3 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-teal-300">
    <span className="h-px w-4 bg-teal-400/70"></span>
    {children}
  </h2>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Resume = () => {
  const handlePrint = () => window.print();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-teal-50/60 px-4 pb-10 pt-28 sm:px-6 lg:px-8 print:bg-white print:p-0">
      {/* Action bar */}
      <div className="mx-auto mb-6 flex max-w-5xl flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-teal-400 hover:text-teal-700"
        >
          <HiArrowLeft className="text-base" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-medium text-slate-500 sm:block">
            Tip: choose &ldquo;Save as PDF&rdquo; in the print dialog
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-teal-500/25 transition hover:from-teal-700 hover:to-emerald-700 hover:shadow-lg"
          >
            <HiPrinter className="text-base" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Resume sheet */}
      <div className="resume-sheet mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-200 print:rounded-none print:shadow-none print:ring-0">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] print:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] print:items-start">
          {/* ============ Sidebar ============ */}
          <aside className="resume-sidebar space-y-7 bg-slate-900 p-7 text-slate-300 sm:p-8 print:space-y-6">
            {/* Identity */}
            <div className="text-center">
              <img
                src="/nilima.svg"
                alt="Profile photo"
                className="mx-auto h-28 w-28 rounded-2xl object-cover ring-2 ring-teal-400/70 ring-offset-2 ring-offset-slate-900 print:h-24 print:w-24"
              />
              <h1 className="resume-strong mt-4 text-2xl font-extrabold leading-tight tracking-tight text-white">
                Nilima Shekh Nishi
              </h1>
              <p className="resume-accent mt-1 text-sm font-semibold text-teal-300">
                Frontend Developer &middot; MERN Learner
              </p>
              <span className="resume-accent mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[0.7rem] font-semibold text-emerald-300 ring-1 ring-emerald-400/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Open to Junior Roles
              </span>
            </div>

            {/* Contact */}
            <div>
              <SideTitle>Contact</SideTitle>
              <ul className="space-y-2.5 text-[0.78rem]">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 transition hover:text-teal-300"
                  >
                    <HiMail className="resume-accent shrink-0 text-base text-teal-400" />
                    <span className="truncate">{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s|-/g, "")}`}
                    className="flex items-center gap-2.5 transition hover:text-teal-300"
                  >
                    <HiPhone className="resume-accent shrink-0 text-base text-teal-400" />
                    <span>{contact.phone}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <HiLocationMarker className="resume-accent shrink-0 text-base text-teal-400" />
                  <span>{contact.location}</span>
                </li>
                <li>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 transition hover:text-teal-300"
                  >
                    <FaGithub className="resume-accent shrink-0 text-base text-teal-400" />
                    <span>github.com/Dev-nishi-sheikh</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 transition hover:text-teal-300"
                  >
                    <FaLinkedin className="resume-accent shrink-0 text-base text-teal-400" />
                    <span>linkedin.com/in/nishi-shekh-683058421</span>
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2.5 transition hover:text-teal-300"
                  >
                    <HiOutlineGlobeAlt className="resume-accent shrink-0 text-base text-teal-400" />
                    <span>Live Portfolio</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Skill groups */}
            {skillGroups.map((group) => (
              <div key={group.title}>
                <SideTitle>{group.title}</SideTitle>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="resume-chip rounded-md bg-slate-800/80 px-2 py-1 text-[0.7rem] font-medium text-slate-200 ring-1 ring-slate-700/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Core proficiency */}
            <div>
              <SideTitle>Core Proficiency</SideTitle>
              <div className="space-y-3">
                {coreSkills.map(({ name, icon: Icon, level, color }) => (
                  <div key={name}>
                    <div className="mb-1.5 flex items-center justify-between gap-2 text-[0.75rem]">
                      <span className="resume-strong flex items-center gap-1.5 font-semibold text-slate-200">
                        <Icon className={`text-sm ${color}`} />
                        {name}
                      </span>
                      <span className="text-slate-400">{level}%</span>
                    </div>
                    <div className="resume-bar-track h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
                        style={{ width: `${level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <SideTitle>Languages</SideTitle>
              <ul className="space-y-1.5 text-[0.78rem]">
                <li className="flex items-center justify-between gap-2">
                  <span className="resume-strong font-semibold text-slate-200">
                    Bengali
                  </span>
                  <span className="text-slate-400">Native</span>
                </li>
                <li className="flex items-center justify-between gap-2">
                  <span className="resume-strong font-semibold text-slate-200">
                    English
                  </span>
                  <span className="text-slate-400">Professional</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* ============ Main column ============ */}
          <main className="space-y-6 p-7 sm:p-9">
            {/* Summary */}
            <section>
              <MainTitle icon={HiOutlineUser}>Profile</MainTitle>
              <p className="text-[0.845rem] leading-relaxed text-slate-600">
                Diploma student in{" "}
                <strong className="font-semibold text-slate-800">
                  Computer Science &amp; Technology (CST)
                </strong>{" "}
                and frontend developer with a solid foundation in{" "}
                <strong className="font-semibold text-slate-800">HTML5</strong>,{" "}
                <strong className="font-semibold text-slate-800">CSS3</strong>,{" "}
                <strong className="font-semibold text-slate-800">
                  JavaScript (ES6+)
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-800">
                  TypeScript
                </strong>
                ,{" "}
                <strong className="font-semibold text-slate-800">React</strong>{" "}
                and{" "}
                <strong className="font-semibold text-slate-800">Next.js</strong>
                . I enjoy turning designs into clean, accessible and fully
                responsive interfaces with{" "}
                <strong className="font-semibold text-slate-800">
                  Tailwind CSS
                </strong>
                , and I am currently expanding into full-stack development with{" "}
                <strong className="font-semibold text-slate-800">Node.js</strong>,{" "}
                <strong className="font-semibold text-slate-800">Express</strong>,{" "}
                <strong className="font-semibold text-slate-800">MongoDB</strong>{" "}
                and{" "}
                <strong className="font-semibold text-slate-800">
                  authentication
                </strong>
                . Looking for a junior frontend role where I can keep learning
                fast and ship real features.
              </p>
            </section>

            {/* Demo projects (driven by src/data/projects.js) */}
            <section>
              <MainTitle icon={HiCode}>Demo Projects</MainTitle>
              <div className="space-y-4">
                {projects.map((project) => (
                  <article
                    key={project.id}
                    className="rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:border-teal-300 hover:shadow-md"
                  >
                    <div className="flex gap-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="hidden h-20 w-28 shrink-0 rounded-xl object-cover object-top ring-1 ring-slate-200 sm:block print:block"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-bold text-slate-900">
                            {project.title}
                          </h3>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[0.63rem] font-semibold uppercase tracking-wide text-slate-500">
                            {project.category}
                          </span>
                        </div>
                        <p className="mt-1 text-[0.72rem] font-semibold text-teal-700">
                          {project.technologies.join(" · ")}
                        </p>
                        <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-relaxed text-slate-600">
                          {project.description}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.72rem] font-semibold">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-teal-700 transition hover:text-teal-900 hover:underline"
                          >
                            Live Demo <HiExternalLink />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-slate-600 transition hover:text-slate-900 hover:underline"
                          >
                            Source Code <FaGithub />
                          </a>
                          <Link
                            to={`/projects/${project.id}`}
                            className="inline-flex items-center gap-1 text-slate-500 transition hover:text-teal-700 hover:underline print:hidden"
                          >
                            Case Study <HiArrowRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <MainTitle icon={HiOutlineAcademicCap}>Education</MainTitle>
              <div className="space-y-3">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="flex flex-wrap items-start justify-between gap-3 rounded-xl bg-slate-50 px-4 py-2.5 ring-1 ring-slate-100 print:bg-white print:ring-slate-200"
                  >
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.degree}
                      </h3>
                      <p className="text-[0.78rem] font-semibold text-teal-700">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-[0.75rem] leading-relaxed text-slate-500">
                        {item.note}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="block rounded-full bg-slate-200/70 px-2.5 py-0.5 text-[0.7rem] font-semibold text-slate-700">
                        {item.period}
                      </span>
                      <span className="mt-1 block text-[0.72rem] font-bold text-emerald-700">
                        {item.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <MainTitle icon={HiOutlineBadgeCheck}>Certifications</MainTitle>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-xl border border-slate-200 p-3"
                  >
                    <span className="text-[0.66rem] font-bold uppercase tracking-wider text-amber-600">
                      {cert.year}
                    </span>
                    <h3 className="mt-1 text-[0.78rem] font-bold leading-snug text-slate-900">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 text-[0.72rem] font-medium text-slate-500">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Closing note */}
            <section className="flex flex-wrap items-center gap-2 rounded-xl bg-teal-50/70 px-4 py-2.5 ring-1 ring-teal-100">
              <HiOutlineSparkles className="text-base text-teal-600" />
              <p className="text-[0.78rem] font-medium text-teal-900">
                References available on request &middot; Happy to share my
                GitHub repositories and a live coding walkthrough.
              </p>
            </section>
          </main>
        </div>
      </div>

      {/* Small footer */}
      <footer className="mx-auto mt-6 flex max-w-5xl flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-xs text-slate-500 backdrop-blur sm:flex-row print:hidden">
        <p>
          &copy; {new Date().getFullYear()} Nilima Shekh Nishi &middot; Resume
          built with React &amp; Tailwind CSS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="font-medium transition hover:text-teal-600">
            Home
          </Link>
          <a
            href="/#projects"
            className="font-medium transition hover:text-teal-600"
          >
            Projects
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="font-medium transition hover:text-teal-600"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex cursor-pointer items-center gap-1.5 font-medium transition hover:text-teal-600"
          >
            Back to top
            <HiArrowUp />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
