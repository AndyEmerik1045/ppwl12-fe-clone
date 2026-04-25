import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const agentCapabilities = [
  { title: "Triage product feedback", icon: "📊" },
  { title: "Resolve support tickets in Slack", icon: "💬" },
  { title: "Respond to security alerts faster", icon: "🔒" },
  { title: "Automate weekly reporting", icon: "📈" },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#f9f9f8] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Keep work moving 24/7.
        </h2>

        {/* Custom Agents Feature */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Custom Agents Card */}
          <div className="bg-[#fef8e8] rounded-2xl p-6 card-hover cursor-pointer">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-gray-700">Custom Agents</span>
              <span className="text-xs font-medium text-[#cf6a61] bg-[#cf6a61]/10 px-2 py-0.5 rounded-full">New</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Automate repetitive<br />work for your team.
            </h3>
            <Link to="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full text-white hover:bg-gray-800 transition-colors">
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Q&A Demo Card */}
          <div className="bg-[#fef8e8] rounded-2xl p-6 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-[#f5e6c8] to-transparent"></div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-gray-700 mb-2">Q&A agents</p>
              <p className="text-sm text-gray-600 mb-4">
                Answers questions instantly using<br />knowledge you already have.
              </p>
              <div className="flex gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                ))}
              </div>
            </div>

            {/* Chat bubbles */}
            <div className="absolute right-4 top-4 space-y-3 z-10">
              <div className="bg-white rounded-lg shadow-md p-3 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                  <span className="text-xs font-medium">Emily</span>
                </div>
                <p className="text-xs text-gray-600">How do I submit an expense?</p>
                <div className="flex items-center gap-1 mt-2 text-[#0a85d1] text-xs">
                  <span>💬</span>
                  <span>1 reply</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-3 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full"></div>
                  <span className="text-xs font-medium">Catherine</span>
                </div>
                <p className="text-xs text-gray-600">When is open enrollment?</p>
                <div className="flex items-center gap-1 mt-2 text-[#0a85d1] text-xs">
                  <span>💬</span>
                  <span>1 reply</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Capabilities */}
        <p className="text-sm text-gray-500 mb-4">See what Custom Agents can do</p>
        <div className="space-y-3 mb-8">
          {agentCapabilities.map((capability, index) => (
            <Link
              key={index}
              to="#"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                {capability.icon}
              </div>
              <span className="font-medium text-gray-900 flex-1">{capability.title}</span>
              <ArrowRight size={18} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        {/* Create Custom Agent CTA */}
        <Link
          to="#"
          className="block bg-[#131b41] rounded-2xl p-6 text-white hover:bg-[#1a2456] transition-colors"
        >
          <div className="flex gap-2 mb-4">
            <span className="text-2xl">⏰</span>
            <span className="text-2xl">💡</span>
            <span className="text-2xl">📦</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Create your own Custom Agent</span>
            <ArrowRight size={18} />
          </div>
        </Link>
      </div>
    </section>
  );
}