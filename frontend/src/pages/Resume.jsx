import { Link } from "react-router-dom";
import { HiArrowLeft, HiPrinter, HiArrowDown } from "react-icons/hi";

const Resume = () => {
  const pdfUrl = `${import.meta.env.BASE_URL}MstMain.pdf`;

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-10 pt-28 sm:px-6 lg:px-8">
      {/* Action bar */}
      <div className="mx-auto mb-8 flex max-w-5xl flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-teal-400 hover:text-teal-700"
        >
          <HiArrowLeft className="text-base" />
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-slate-800 transition"
          >
            <HiPrinter className="text-base" />
            Print
          </button>

          <a
            href={pdfUrl}
            download="MstMain.pdf"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-teal-500 hover:text-teal-600 transition"
          >
            <HiArrowDown className="text-base" />
            Download PDF
          </a>
        </div>
      </div>

      {/* PDF Viewer - shows your MstMain.pdf as-is */}
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
        <embed
          src={pdfUrl}
          type="application/pdf"
          className="w-full"
          height={900}
          title="Resume PDF"
        />
      </div>
    </div>
  );
};

export default Resume;
