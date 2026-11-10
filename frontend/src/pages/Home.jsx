import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { HiDocumentText, HiArrowDown } from 'react-icons/hi';

const ResumeActions = () => {
  const pdfUrl = `${import.meta.env.BASE_URL}MstMain.pdf`;

  return (
    <section
      id="resume"
      className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          View Resume / CV
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
         নিচে রেজামে দেখুন বা ডাউনলোড করুন।
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/resume"
          className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-slate-900/25 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <HiDocumentText className="text-xl" />
          <span>View Resume</span>
        </a>

        <a
          href={pdfUrl}
          download="MstMain.pdf"
          className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-teal-500 px-7 py-3.5 rounded-xl font-bold shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        >
          <HiArrowDown className="text-xl" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <Hero />
      <ResumeActions />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
};

export default Home;
