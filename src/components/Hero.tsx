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
    <section className="hero-gradient relative overflow-hidden bg-[#0f172a] py-20">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute ${icon.className}`}
            style={{ animationDelay: icon.delay }}
          >
            {/* PERBAIKAN: Pakai img biasa, bukan Image */}
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Meet the night shift.
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Notion agents keep work moving 24/7. They capture knowledge, answer
          questions, and push projects forward—all while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/"
            className="px-6 py-3 bg-[#0a85d1] text-white font-medium rounded-lg hover:bg-[#0973b8] transition-colors w-full sm:w-auto"
          >
            Get Notion free
          </Link>
          <Link
            to="/"
            className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition-colors w-full sm:w-auto"
          >
            Request a demo
          </Link>
        </div>

        {/* Product Screenshot Mini */}
        <div className="relative mx-auto max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
             {/* Isi screenshot Notion kamu di sini tetap sama */}
             <div className="p-4 text-left text-black">
                <p className="font-bold">⚡ Ramp HQ</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-20 bg-gray-100 rounded"></div>
                    <div className="h-20 bg-gray-100 rounded"></div>
                    <div className="h-20 bg-gray-100 rounded"></div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
}