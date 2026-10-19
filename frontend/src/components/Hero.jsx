import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles } from "react-icons/hi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const techStack = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-sky-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React.js", icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-emerald-600" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-600" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introduction & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-700 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Open to Junior Frontend Roles</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-slate-600 font-medium text-lg">
              Hi, I am{" "}
              <span className="font-bold text-slate-900">
                Nilima Shekh Nishi
              </span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 tracking-tight leading-tight">
              Frontend Developer{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                &amp; MERN Learner
              </span>
            </h1>
            <p className="text-base sm:text-lg font-semibold text-slate-500">
              React.js &middot; Next.js &middot; TypeScript &middot; Tailwind CSS
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            I turn designs into fast, accessible and fully responsive interfaces
            with <span className="text-slate-900 font-semibold">HTML5</span>,{" "}
            <span className="text-slate-900 font-semibold">CSS3</span>,{" "}
            <span className="text-slate-900 font-semibold">JavaScript</span>,{" "}
            <span className="text-slate-900 font-semibold">React</span> and{" "}
            <span className="text-slate-900 font-semibold">Tailwind CSS</span> —
            and I am now growing into the backend with{" "}
            <span className="text-slate-900 font-semibold">
              Node.js, Express, MongoDB
            </span>{" "}
            and <span className="text-slate-900 font-semibold">authentication</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Resume CTA */}
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <HiDocumentText className="text-xl" />
              <span>View Resume / CV</span>
            </Link>

            {/* Explore Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 hover:border-teal-500 hover:text-teal-600 px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-teal-50/40"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-slate-200/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-teal-600" /> My Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              {techStack.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/90 text-slate-800 font-medium border border-slate-200 hover:border-teal-300 hover:bg-white transition-colors"
                >
                  <Icon className={`text-base ${color}`} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Portrait Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            {/* Ambient glow behind the portrait */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-teal-500/25 via-emerald-400/10 to-transparent blur-2xl pointer-events-none"></div>

            {/* Gradient framed portrait */}
            <div className="relative rounded-[1.9rem] bg-gradient-to-br from-teal-500 via-emerald-500 to-emerald-700 p-[3px] shadow-2xl shadow-teal-900/20">
              <div className="overflow-hidden rounded-[1.75rem] bg-slate-900">
                <img
                  src={`${import.meta.env.BASE_URL}nilima.svg`}
                  alt="Profile photo"
                  className="h-[22rem] w-full object-cover object-top sm:h-[26rem]"
                />
              </div>
            </div>

            {/* Floating code chip */}
            <div className="absolute -top-4 -right-4 rounded-2xl border border-slate-700 bg-slate-900/95 px-4 py-3 font-mono text-[11px] leading-relaxed text-slate-300 shadow-xl backdrop-blur">
              <p>
                <span className="text-slate-500">role:</span>{" "}
                <span className="text-emerald-400">"Frontend Dev"</span>
              </p>
              <p>
                <span className="text-slate-500">stack:</span>{" "}
                <span className="text-teal-300">"React · Next.js"</span>
              </p>
            </div>

            {/* Floating status badge */}
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Available for work
                </p>
                <p className="text-[11px] text-slate-500">
                  Junior Frontend Roles
                </p>
              </div>
            </div>

            {/* Floating projects badge */}
            <div className="absolute -right-4 bottom-16 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-100 text-sm font-bold text-teal-700">
                4
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Demo Projects
                </p>
                <p className="text-[11px] text-slate-500">Live &amp; source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
