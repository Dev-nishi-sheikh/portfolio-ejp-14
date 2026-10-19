import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const experienceHistory = [
  {
    role: "Self-Taught Frontend Developer",
    org: "Personal & Practice Projects",
    period: "2024 — Present",
    location: "Rangpur, Bangladesh",
    type: "Self-driven",
    icon: FaLaptopCode,
    points: [
      "Designed and built several responsive web apps — a conference landing page, a workout tracking app and this portfolio.",
      "Used React, React Router, Tailwind CSS and JavaScript (ES6+) with a component-driven architecture.",
      "Managed the codebase with Git & GitHub and deployed on Vercel and GitHub Pages.",
    ],
  },
  {
    role: "Web Development Trainee (MERN)",
    org: "Complete Web Development Bootcamp",
    period: "2024",
    location: "Online",
    type: "Training",
    icon: FaGraduationCap,
    points: [
      "Completed hands-on training in HTML, CSS, JavaScript (ES6+), React, Tailwind CSS, Node.js, Express and MongoDB.",
      "Built 10+ mini applications while following real-world development workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineBriefcase className="text-teal-600 text-sm" />
          <span>Experience</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          As a student developer, my experience comes from self-driven practice
          projects and structured training &mdash; not formal job roles yet.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-3xl mx-auto space-y-6">
        {experienceHistory.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.role}
              className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-teal-200 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-teal-600 to-emerald-600"></div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 text-xl">
                    <Icon />
                  </span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {item.role}
                    </h4>
                    <p className="text-sm font-semibold text-teal-600 mt-0.5">
                      {item.org}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="inline-block bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                  {item.type}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 leading-relaxed sm:ml-14">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
