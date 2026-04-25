import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function AssistantsSection() {
  return (
    <section className="bg-[#f9f9f8] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Ask your on-demand assistants.
        </h2>

        {/* Main Agent Card */}
        <div className="bg-[#fef8e8] rounded-2xl overflow-hidden mb-6">
          <div className="grid lg:grid-cols-2">
            <div className="p-8">
              <p className="text-sm text-gray-600 mb-2">Notion Agent</p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                You assign the tasks. Notion<br />Agent does the work.
              </h3>
              <Link to="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#f5e6c8] to-[#fef8e8]">
              {/* Mock UI elements */}
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center">
                      <span className="text-sm">✨</span>
                    </div>
                    <span className="text-sm font-medium">How can I help you today?</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-500">
                    <p>AI · Translate this page</p>
                    <p>AI · Analyze for insights</p>
                    <p>⊕ Create a task tracker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Enterprise Search */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Enterprise Search</p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    One search for everything.
                  </h3>
                </div>
                <Link to="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-[#0a85d1] text-white px-2 py-0.5 rounded">top customer requests this quarter</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">99+ results 📄 💬 ✉️</p>
                <p className="text-xs text-gray-600">Here are the top customer requests this quarter (so far), based on the latest GTM analysis:</p>
                <div className="mt-3">
                  <p className="text-xs font-semibold">Top 10 Feature Requests</p>
                  <p className="text-xs text-gray-500">Host Tools & Listing Management (highest priority area)</p>
                </div>
                <div className="flex gap-2 mt-4">
                  {["🔶", "📊", "📁", "N", "S", "📋", "+"].map((icon, i) => (
                    <div key={i} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-sm">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Meeting Notes */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">AI Meeting Notes</p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Perfect notes, every time.
                  </h3>
                </div>
                <Link to="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm">📋</span>
                  <span className="text-sm font-medium">Joyce & Sam weekly 1:1</span>
                  <span className="text-xs text-gray-400 ml-auto">June 2</span>
                </div>
                <div className="flex gap-2 mb-3 text-xs">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">Summary</span>
                  <span className="text-gray-400">Notes</span>
                  <span className="text-gray-400">Transcript</span>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1">Current progress</p>
                  <p className="text-xs text-gray-600 mb-3">Joyce provided an update on the landing page improvements...</p>
                  <p className="text-xs font-semibold mb-1">Timeline and next steps</p>
                  <ul className="text-xs text-gray-600 list-disc list-inside space-y-0.5">
                    <li>Team review planned for @Tomorrow</li>
                    <li>Testing to begin next week</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}