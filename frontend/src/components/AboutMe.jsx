import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket, FaFutbol, FaPalette, FaBook, FaPlane } from "react-icons/fa";

const AboutMe = () => {
  const highlights = [
    {
      title: "Clean & Maintainable Code",
      desc: "Writing component-driven, reusable code adhering to modern best practices.",
    },
    {
      title: "Fast Learner & Adaptable",
      desc: "Quick to pick up new libraries, frameworks, and engineering workflows.",
    },
    {
      title: "Responsive & Pixel-Perfect",
      desc: "Obsessed with creating fluid layouts that work flawlessly on all devices.",
    },
    {
      title: "Problem Solver",
      desc: "Passionate about debugging, analytical thinking, and optimizing UX.",
    },
  ];

  const hobbies = [
    {
      icon: FaFutbol,
      title: "Sports & Badminton",
      desc: "Playing badminton and cricket with friends to stay active and fresh.",
      color: "text-emerald-500",
    },
    {
      icon: FaPalette,
      title: "Sketching & Art",
      desc: "Doodling UI ideas on paper \u2014 where many of my layouts start.",
      color: "text-pink-500",
    },
    {
      icon: FaBook,
      title: "Reading & Learning",
      desc: "Following tech blogs, docs and tutorials to learn something new daily.",
      color: "text-amber-500",
    },
    {
      icon: FaPlane,
      title: "Travelling",
      desc: "Exploring new places, food and cultures whenever I get the chance.",
      color: "text-sky-500",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-teal-600 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          A glimpse into my journey, core values and dedication as a frontend
          developer growing into the MERN stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Card & Quick Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-sm">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-teal-500/10 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <img
                src={`${import.meta.env.BASE_URL}nilima.svg`}
                alt="Nilima Shekh Nishi"
                className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top ring-2 ring-teal-500/30"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Nilima Shekh Nishi
                </h3>
                <p className="text-sm font-medium text-teal-600">
                  Frontend Developer &middot; MERN Learner
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  <span>Rangpur, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineBriefcase className="text-teal-600" /> Availability:
                </span>
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-xs">
                  Immediate Joining
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <FaLaptopCode className="text-teal-600" /> Primary Focus:
                </span>
                <span className="font-semibold text-gray-800">
                  React, Next.js &amp; Tailwind
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                <span className="flex items-center gap-2 text-gray-500">
                  <HiOutlineMail className="text-teal-600" /> Communication:
                </span>
                <span className="font-semibold text-gray-800">English &amp; Bengali</span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100 text-center">
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-teal-600">3</span>
                <span className="text-[11px] text-gray-500 font-medium">Demo Projects</span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-emerald-600">500+</span>
                <span className="text-[11px] text-gray-500 font-medium">Coding Hours</span>
              </div>
              <div className="p-2.5 bg-gray-50 rounded-xl">
                <span className="block text-2xl font-black text-emerald-600">100%</span>
                <span className="text-[11px] text-gray-500 font-medium">Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
              Turning complex design ideas into seamless, interactive web experiences.
            </h3>
            <p>
              I am an aspiring, self-driven <strong>frontend developer</strong>{" "}
              from Rangpur, currently pursuing a{" "}
              <strong>Diploma in Computer Science &amp; Technology (CST)</strong>{" "}
              and focused on modern web technologies. My journey started with
              basic HTML &amp; CSS, then quickly grew into building dynamic,
              full-fledged Single Page Applications with{" "}
              <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
              <strong>TypeScript</strong> and <strong>Tailwind CSS</strong>.
            </p>
            <p>
              Right now I am expanding my skills into the backend with{" "}
              <strong>Node.js</strong>, <strong>Express</strong>,{" "}
              <strong>MongoDB</strong> and <strong>authentication</strong> so I
              can ship complete products end to end. I place high value on
              writing clean, accessible and maintainable code, and I am eager to
              grow inside a collaborative engineering team as a junior frontend
              developer.
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-start gap-3"
              >
                <HiOutlineCheckCircle className="text-xl text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-teal-500/20 transition-all duration-300"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-gray-700 border border-gray-300 hover:border-teal-500 hover:text-teal-600 px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
            >
              <FaRocket className="text-sm" />
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>
      </div>

      {/* Beyond the Code — hobbies & interests outside programming */}
      <div className="mt-16">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Beyond the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              Code
            </span>
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Away from the keyboard I am a curious, hands-on person &mdash; here is
            what keeps me inspired.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hobbies.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md hover:border-teal-200 transition-all duration-300 text-center"
            >
              <span
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl ${color}`}
              >
                <Icon />
              </span>
              <h4 className="text-sm font-bold text-gray-900">{title}</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
