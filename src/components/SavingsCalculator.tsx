import { useState } from "react";
import { Link } from "react-router-dom";

const tools = [
  { name: "AI Search", price: 35, checked: false },
  { name: "AI Chatbot", price: 20, checked: true },
  { name: "AI Meeting Notes", price: 18, checked: false },
  { name: "AI Writing Assistant", price: 20, checked: false },
  { name: "AI Email App", price: 30, checked: false },
  { name: "AI Research", price: 40, checked: false },
  { name: "Calendar Scheduling", price: 15, checked: false },
  { name: "Team Wiki", price: 10, checked: true },
  { name: "Project Management Tool", price: 24, checked: true },
  { name: "Basic CRM", price: 20, checked: false },
  { name: "Site Builder", price: 20, checked: false },
  { name: "Forms", price: 15, checked: false },
];

export function SavingsCalculator() {
  const [selectedTools, setSelectedTools] = useState(
    tools.map((t) => t.checked)
  );
  const [teamSize, setTeamSize] = useState(10);

  const monthlySavings = selectedTools.reduce((acc, checked, index) => {
    return acc + (checked ? tools[index].price : 0);
  }, 0) * teamSize;

  const annualSavings = monthlySavings * 12;

  const toggleTool = (index: number) => {
    const newSelected = [...selectedTools];
    newSelected[index] = !newSelected[index];
    setSelectedTools(newSelected);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              More<br />productivity.<br />Fewer tools.
            </h2>
            <p className="text-gray-600 mb-6">
              Bring all your tools and teams under one<br />roof. Calculate savings below.
            </p>
            <Link href="#" className="text-[#0a85d1] font-medium hover:underline">
              See pricing plans →
            </Link>
          </div>

          <div className="relative">
            {/* Diagonal line decoration */}
            <div className="absolute -left-20 top-1/2 w-40 h-px bg-gray-900 -rotate-45 hidden lg:block"></div>

            <div className="flex gap-3 flex-wrap opacity-30 mb-8">
              {["✕", "$", "G", "S", "M", "📁", "💬", "😀"].map((icon, i) => (
                <span key={i} className="text-2xl text-gray-400">{icon}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tools Selection */}
            <div className="grid grid-cols-1 gap-2">
              {tools.map((tool, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedTools[index]}
                    onChange={() => toggleTool(index)}
                    className="w-4 h-4 rounded border-gray-300 text-[#0a85d1] focus:ring-[#0a85d1]"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {tool.name}
                  </span>
                  <span className="text-xs text-gray-400 ml-auto">
                    ${tool.price}/user
                  </span>
                </label>
              ))}
            </div>

            {/* Savings Display */}
            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team size
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-4 py-3 text-2xl font-semibold border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0a85d1] focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      onClick={() => setTeamSize((s) => s + 1)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => setTeamSize((s) => Math.max(1, s - 1))}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Monthly savings</p>
                  <p className="text-4xl font-bold text-gray-900">
                    ${monthlySavings.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Annual savings</p>
                  <p className="text-4xl font-bold text-[#0a85d1]">
                    ${annualSavings.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
