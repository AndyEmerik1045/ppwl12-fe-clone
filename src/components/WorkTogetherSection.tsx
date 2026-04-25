import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function WorkTogetherSection() {
  return (
    <section className="bg-[#f9f9f8] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Bring all your work together.
        </h2>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Docs Card */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Docs</p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Simple and powerful.
                  </h3>
                </div>
                <Link to="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-[#c6a895]/30 to-[#f9f9f8]">
              <div className="absolute inset-4">
                {/* Document mockup */}
                <div className="bg-white rounded-lg shadow-md p-4 w-3/4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">📊</span>
                    <span className="font-medium text-sm">H1 Planning</span>
                  </div>
                  <div className="flex gap-2 mb-3 text-xs">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">Draft</span>
                    <span className="text-gray-400">RTC</span>
                  </div>
                  <p className="text-xs font-semibold mb-2">Overview</p>
                  <p className="text-xs text-gray-500">In H1, the Acquisition & Growth team will focus on...</p>
                </div>
                {/* Calendar overlay */}
                <div className="absolute right-0 top-1/3 bg-white rounded-lg shadow-md p-3 w-40">
                  <p className="text-xs font-semibold mb-2">June 2026</p>
                  <div className="grid grid-cols-7 gap-1 text-xs text-center">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i} className="text-gray-400">{d}</span>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((d) => (
                      <span key={d} className={d === 3 ? "bg-blue-500 text-white rounded" : ""}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Knowledge Base Card */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Knowledge Base</p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    One source of truth<br />for teams and agents.
                  </h3>
                </div>
                <Link to="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-[#c6a895]/30 to-[#f9f9f8]">
              <div className="absolute inset-4">
                {/* Wiki mockup */}
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🚀</span>
                    <span className="font-medium text-sm">Company HQ</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Welcome to the home for company-wide info — strategy and goals, how we work...</p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="font-semibold mb-1">Company</p>
                      <ul className="text-gray-500 space-y-0.5">
                        <li>✓ Meetings</li>
                        <li>✓ Docs</li>
                        <li>✓ Projects</li>
                        <li>✓ Tasks</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">People Resources</p>
                      <ul className="text-gray-500 space-y-0.5">
                        <li>✓ Company Holidays</li>
                        <li>✓ Relocation Guidelines</li>
                        <li>✓ Vendor Review</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Card (Full Width) */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
          <div className="grid lg:grid-cols-2">
            <div className="p-8">
              <p className="text-sm text-gray-600 mb-1">Projects</p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Less tracking.<br />More progress.
              </h3>
              <Link to="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#c6a895]/20 to-[#f9f9f8]">
              <div className="absolute inset-4 flex items-center justify-center">
                {/* Project board mockup */}
                <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">🎯</span>
                    <span className="font-medium text-sm">Final QA</span>
                  </div>
                  <div className="flex gap-2 mb-3 text-xs">
                    <span className="text-gray-400">Project</span>
                    <span className="text-gray-400">Dates</span>
                    <span className="text-gray-400">Tasks</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked readOnly className="w-4 h-4" />
                      <span className="text-xs text-gray-500">Capitalization of feature names</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" readOnly className="w-4 h-4" />
                      <span className="text-xs text-gray-500">Add more width to titles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" readOnly className="w-4 h-4" />
                      <span className="text-xs text-gray-500">Add hanging punctuation to pullquotes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}