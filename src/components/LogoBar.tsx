const logos = [
  { name: "OpenAI", src: "https://ext.same-assets.com/4258207962/1683423291.svg" },
  { name: "Figma", src: "https://ext.same-assets.com/4258207962/1758362944.svg" },
  { name: "Ramp", src: "https://ext.same-assets.com/4258207962/1296977116.svg" },
  { name: "Cursor", src: "https://ext.same-assets.com/4258207962/3496141724.svg" },
  { name: "Vercel", src: "https://ext.same-assets.com/4258207962/1452293524.svg" },
  { name: "NVIDIA", src: "https://ext.same-assets.com/4258207962/1328028796.svg" },
  { name: "Volvo", src: "https://ext.same-assets.com/4258207962/3472353554.svg" },
  { name: "Discord", src: "https://ext.same-assets.com/4258207962/1053150165.svg" },
  { name: "Lovable", src: "https://ext.same-assets.com/4258207962/2870909417.svg" },
  { name: "1Password", src: "https://ext.same-assets.com/4258207962/3630726222.svg" },
  { name: "Affirm", src: "https://ext.same-assets.com/4258207962/3452453669.svg" },
  { name: "Riot Games", src: "https://ext.same-assets.com/4258207962/1004220363.svg" },
  { name: "Clay", src: "https://ext.same-assets.com/4258207962/1311050418.svg" },
];

export function LogoBar() {
  return (
    <section className="hero-gradient py-8 overflow-hidden">
      {/* Logo Marquee */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale brightness-200"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <p className="text-center text-white/50 text-sm mt-8">
        Trusted by 98% of the Forbes Cloud 100
      </p>
    </section>
  );
}