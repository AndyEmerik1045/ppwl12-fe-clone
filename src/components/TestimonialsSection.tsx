import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const testimonials = [
  {
    logo: "TOYOTA",
    logoColor: "#cf0a2c",
    quote: "Streamlined workflows to reduce timelines by 3x.",
  },
  {
    logo: "ramp",
    logoSvg: "https://ext.same-assets.com/4258207962/1296977116.svg",
    quote: "Agents get created in three minutes between meetings, then hours of manual operational work disappear.",
  },
  {
    logo: "Vercel",
    logoSvg: "https://ext.same-assets.com/4258207962/1452293524.svg",
    quote: "Notion understands that you can solve a lot of problems with one tool.",
  },
  {
    logo: "MatchGroup",
    logoSvg: "https://ext.same-assets.com/4258207962/908170318.svg",
    quote: "Notion has been the most powerful and impactful way to streamline our workflow.",
  },
  {
    logo: "CURSOR",
    logoSvg: "https://ext.same-assets.com/4258207962/3496141724.svg",
    quote: "Using the most AI-native tools like Notion is an important competitive advantage for us.",
  },
  {
    logo: "Figma",
    logoSvg: "https://ext.same-assets.com/4258207962/1758362944.svg",
    quote: "One hub for work and AI keeps everyone informed and work flowing.",
  },
];

const stats = [
  { label: "Over 100M users worldwide", icon: "👥" },
  { label: "#1 knowledge base 3 years running (G2)", icon: "🏆" },
  { label: "#1 AI enterprise search (G2)", icon: "🔍" },
  { label: "#1 rated AI writing (G2)", icon: "⭐" },
  { label: "62% of Fortune 100", icon: "📈" },
  { label: "Over 50% of YC companies", icon: "❤️" },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#f5f3f0] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Trusted by teams that ship.
        </h2>

        {/* Featured Testimonial - OpenAI */}
        <div className="bg-white rounded-2xl p-8 mb-8 card-hover">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/4258207962/1683423291.svg"
                alt="OpenAI"
                className="h-6 mb-6"
              />
              <blockquote className="text-2xl font-lyon text-gray-900 mb-6">
                "There's power in a single platform where you can do all your work. Notion is that single place."
              </blockquote>
              <Link to="#" className="text-[#0a85d1] font-medium hover:underline">
                Read the full story →
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://ext.same-assets.com/4258207962/3528085155.jpeg"
                alt="OpenAI testimonial"
                className="w-full h-64 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-gray-900 ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <Link
              key={index}
              to="#"
              className="bg-white rounded-xl p-6 card-hover block"
            >
              {testimonial.logoSvg ? (
                <img
                  src={testimonial.logoSvg}
                  alt={testimonial.logo}
                  className="h-5 mb-4 grayscale"
                />
              ) : (
                <p
                  className="font-bold text-sm mb-4"
                  style={{ color: testimonial.logoColor }}
                >
                  {testimonial.logo}
                </p>
              )}
              <p className="text-sm text-gray-700 leading-relaxed">
                "{testimonial.quote}" →
              </p>
            </Link>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <span>{stat.icon}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}