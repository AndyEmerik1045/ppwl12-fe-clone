import { Link } from "react-router-dom";

const floatingIcons = [
  { src: "https://ext.same-assets.com/4258207962/1904911252.png", alt: "Book", className: "left-[5%] top-[20%] w-12 h-12 animate-float", delay: "0s" },
  { src: "https://ext.same-assets.com/4258207962/770535565.png", alt: "Globe", className: "left-[15%] top-[60%] w-10 h-10 animate-float-delayed", delay: "0.5s" },
  { src: "https://ext.same-assets.com/4258207962/900917221.png", alt: "Files", className: "right-[8%] top-[25%] w-11 h-11 animate-float-slow", delay: "1s" },
  { src: "https://ext.same-assets.com/4258207962/3047876135.png", alt: "Mailbox", className: "right-[20%] top-[55%] w-10 h-10 animate-float", delay: "1.5s" },
  { src: "https://ext.same-assets.com/4258207962/667614161.png", alt: "Light bulb", className: "left-[8%] top-[40%] w-9 h-9 animate-float-delayed", delay: "0.3s" },
  { src: "https://ext.same-assets.com/4258207962/752061448.png", alt: "Apple", className: "right-[12%] top-[40%] w-9 h-9 animate-float-slow", delay: "0.8s" },
];

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Floating Icons Layer */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map((icon, index) => (
          <div key={index} className={`absolute ${icon.className}`} style={{ animationDelay: icon.delay }}>
            <img src={icon.src} alt={icon.alt} className="w-full h-full object-contain drop-shadow-lg" />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-16 pb-16 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Meet the night shift.</h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Notion agents keep work moving 24/7. They capture knowledge, answer questions, and push projects forward—all while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link to="#" className="px-6 py-3 bg-[#0a85d1] text-white font-medium rounded-lg hover:bg-[#0973b8] transition-colors w-full sm:w-auto">Get Notion free</Link>
          <Link to="#" className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-colors w-full sm:w-auto">Request a demo</Link>
        </div>

        {/* Product Screenshot Mockup */}
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 text-slate-900">
            {/* Browser-like Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
              </div>
              <div className="ml-4 flex items-center gap-4 text-gray-400 text-xs">
                <span>←</span><span>→</span>
                <div className="px-3 py-1 bg-white rounded-md border border-gray-200 flex items-center gap-2">
                  <span className="text-blue-500">⚡</span> <span className="font-medium text-slate-700">Ramp HQ</span>
                </div>
              </div>
            </div>

            <div className="flex h-[500px]">
              {/* Sidebar */}
              <div className="w-52 bg-[#f7f7f5] border-r border-gray-200 p-3 hidden sm:block text-left">
                <div className="flex items-center gap-2 mb-6 px-2">
                  <div className="w-6 h-6 bg-[#0a85d1] rounded flex items-center justify-center text-white text-[10px] font-bold">R</div>
                  <span className="font-bold text-sm">Ramp</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600 mb-8">
                  {["Search", "Home", "Meetings", "Notion AI", "Inbox"].map((item, i) => (
                    <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer ${item === 'Notion AI' ? 'bg-gray-200 font-medium text-slate-900' : 'hover:bg-gray-200'}`}>
                      <span className="w-4">{i === 0 ? '🔍' : i === 1 ? '🏠' : i === 2 ? '📅' : i === 3 ? '✨' : '📥'}</span>
                      {item}
                    </div>
                  ))}
                </div>
                {/* Agents Section */}
                <p className="text-[10px] font-bold text-gray-400 px-2 mb-2 uppercase tracking-wider">Agents</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-200 rounded cursor-pointer">
                    <span className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center text-white text-[10px]">T</span> Task routing agent
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-200 rounded cursor-pointer">
                    <span className="w-4 h-4 bg-purple-400 rounded-full flex items-center justify-center text-white text-[10px]">S</span> Status update agent
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-gray-200 rounded cursor-pointer">
                    <span className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center text-white text-[10px]">Q</span> Q&A agent
                  </div>
                </div>
              </div>

              {/* Main Kanban Content */}
              <div className="flex-1 p-8 text-left bg-white overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0a85d1] rounded-lg flex items-center justify-center text-white text-xl shadow-inner">⚡</div>
                  <h2 className="text-2xl font-bold">Ramp HQ</h2>
                </div>

                {/* Navigation Tabs */}
                <div className="flex gap-6 border-b border-gray-100 mb-6 text-sm">
                  <span className="pb-3 border-b-2 border-slate-900 font-medium">Company tasks</span>
                  <span className="text-gray-400">My tasks</span>
                  <span className="text-gray-400">Current sprint</span>
                  <span className="text-gray-400">Timeline</span>
                </div>

                {/* Kanban Board */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: "To-do", color: "bg-gray-400", count: "10", tasks: ["Update help center and office documentation", "Review campaign assets"] },
                    { title: "In progress", color: "bg-yellow-400", count: "8", tasks: ["Sales demo sync", "Launch demo video", "Respond to beta test questions"] },
                    { title: "In review", color: "bg-blue-400", count: "3", tasks: ["Weekly sales status report", "Marketing campaign designs"] },
                    { title: "Complete", color: "bg-green-400", count: "24", tasks: ["Project onboarding", "Finalize launch timeline"] }
                  ].map((col, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`w-2 h-2 rounded-full ${col.color}`}></span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase">{col.title}</span>
                        <span className="text-[10px] text-gray-400">{col.count}</span>
                      </div>
                      <div className="space-y-3">
                        {col.tasks.map((task, ti) => (
                          <div key={ti} className="p-3 bg-white border border-gray-100 rounded-lg shadow-sm text-[11px] leading-snug font-medium text-slate-700 hover:border-gray-300 transition-colors">
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}