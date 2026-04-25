import { Link } from "react-router-dom";
import { Apple } from "lucide-react";

export function TryForFreeSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Try for free.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Get Started Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.5 3.75C4.5 2.92157 5.17157 2.25 6 2.25H14.25L19.5 7.5V20.25C19.5 21.0784 18.8284 21.75 18 21.75H6C5.17157 21.75 4.5 21.0784 4.5 20.25V3.75Z"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Get started on Notion
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Your AI workspace with built-in agents.
            </p>
            <Link
              to="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              <Apple size={18} />
              Download for Mac
            </Link>

            {/* Design System Card */}
            <div className="mt-6 bg-[#f9f9f8] rounded-xl p-4 relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32">
                <img
                  src="https://ext.same-assets.com/4258207962/922890510.png"
                  alt="Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🎨</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Design System</h4>
                <p className="text-xs text-gray-600 max-w-[200px]">
                  This design system provides guidelines, components, and tools to ensure consistency in digital product development.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Notion Mail Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-10 h-10 bg-[#0a85d1] rounded-lg flex items-center justify-center mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M22 2L2 11l9 4 4 9 7-22z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Notion Mail
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    The AI inbox that thinks like you.
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Download
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 w-40 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Kai</span>
                    <span className="text-gray-400">Today</span>
                  </div>
                  <div className="space-y-1.5 text-gray-500">
                    <div className="flex items-center justify-between">
                      <span>Inbox</span>
                      <span className="bg-gray-200 px-1.5 rounded">6</span>
                    </div>
                    <div>Important</div>
                    <div>Orders</div>
                    <div>Recruiting</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notion Calendar Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-gray-900">31</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Notion Calendar
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Time, scheduling, tasks—all together.
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    Download
                  </Link>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 w-48 text-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-purple-100 rounded-full"></div>
                    <div>
                      <p className="font-medium">Meeting with Stephanie Lee</p>
                      <p className="text-gray-400">Organizer</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-gray-500 mt-3">
                    {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                      <span key={i} className="text-[10px]">{d}</span>
                    ))}
                    {Array.from({ length: 30 }, (_, i) => (
                      <span
                        key={i}
                        className={`text-[10px] ${
                          i === 26 ? "bg-orange-500 text-white rounded" :
                          [27, 28, 29].includes(i) ? "bg-orange-100 rounded" : ""
                        }`}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Notion is always at home right{" "}
          <Link to="#" className="underline hover:text-gray-700">
            in your browser
          </Link>
          .
        </p>
      </div>
    </section>
  );
}