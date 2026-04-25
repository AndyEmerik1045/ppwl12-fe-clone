import { Link } from "react-router-dom";

const footerLinks = {
  company: [
    { label: "About us", to: "#" },
    { label: "Careers", to: "#" },
    { label: "Security", to: "#" },
    { label: "Status", to: "#" },
    { label: "Terms & privacy", to: "#" },
    { label: "Your privacy rights", to: "#" },
  ],
  download: [
    { label: "iOS & Android", to: "#" },
    { label: "Mac & Windows", to: "#" },
    { label: "Mail", to: "#" },
    { label: "Calendar", to: "#" },
    { label: "Web Clipper", to: "#" },
  ],
  resources: [
    { label: "Help center", to: "#" },
    { label: "Pricing", to: "#" },
    { label: "Blog", to: "#" },
    { label: "Community", to: "#" },
    { label: "Integrations", to: "#" },
    { label: "Templates", to: "#" },
    { label: "Partner programs", to: "#" },
  ],
  notionFor: [
    { label: "Enterprise", to: "#" },
    { label: "Small business", to: "#" },
    { label: "Personal", to: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: "📷" },
  { name: "Twitter", icon: "𝕏" },
  { name: "LinkedIn", icon: "in" },
  { name: "Facebook", icon: "f" },
  { name: "YouTube", icon: "▶" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.5 3.75C4.5 2.92157 5.17157 2.25 6 2.25H14.25L19.5 7.5V20.25C19.5 21.0784 18.8284 21.75 18 21.75H6C5.17157 21.75 4.5 21.0784 4.5 20.25V3.75Z"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold">Notion</span>
            </Link>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to="#"
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </Link>
              ))}
            </div>

            {/* Language Selector */}
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <span>🌐</span>
              <span>English (US)</span>
              <span>▼</span>
            </button>

            {/* Legal Links */}
            <div className="mt-6 space-y-2 text-sm text-gray-500">
              <Link to="#" className="block hover:text-gray-700">
                Do Not Sell or Share My Info
              </Link>
              <Link to="#" className="block hover:text-gray-700">
                Cookie settings
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-6">
              © 2026 Notion Labs, Inc.
            </p>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Download</h4>
              <ul className="space-y-3">
                {footerLinks.download.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Notion for</h4>
              <ul className="space-y-3">
                {footerLinks.notionFor.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="#"
                className="inline-block mt-4 text-sm font-medium text-gray-900 hover:underline"
              >
                Explore more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}