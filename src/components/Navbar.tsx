import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

export function Header() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner */}
      {bannerVisible && (
        <div className="bg-white border-b border-gray-100 px-4 py-2.5 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-center">
            <p className="text-sm text-gray-700">
              Developers: Get a first look at our new Developer Platform on May 13.{" "}
              <Link to="#" className="text-[#0a85d1] hover:underline font-medium">
                Register today →
              </Link>
            </p>
            <button
              onClick={() => setBannerVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close banner"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <header className="hero-gradient sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.5 3.75C4.5 2.92157 5.17157 2.25 6 2.25H14.25L19.5 7.5V20.25C19.5 21.0784 18.8284 21.75 18 21.75H6C5.17157 21.75 4.5 21.0784 4.5 20.25V3.75Z"
                    fill="#000"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14.25 2.25V7.5H19.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                Enterprise
              </Link>
              <Link to="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                Pricing
              </Link>
              <Link to="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
                Request a demo
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to="#"
                className="hidden sm:inline-flex px-4 py-2 bg-[#0a85d1] text-white text-sm font-medium rounded-lg hover:bg-[#0973b8] transition-colors"
              >
                Get Notion free
              </Link>
              <Link
                to="#"
                className="text-white/90 hover:text-white text-sm font-medium transition-colors hidden sm:block"
              >
                Log in
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#131b41] border-t border-white/10 px-4 py-4">
            <div className="flex flex-col gap-4">
              <Link to="#" className="text-white/90 hover:text-white text-sm font-medium">
                Enterprise
              </Link>
              <Link to="#" className="text-white/90 hover:text-white text-sm font-medium">
                Pricing
              </Link>
              <Link to="#" className="text-white/90 hover:text-white text-sm font-medium">
                Request a demo
              </Link>
              <Link to="#" className="text-white/90 hover:text-white text-sm font-medium sm:hidden">
                Log in
              </Link>
              <Link
                to="#"
                className="sm:hidden px-4 py-2 bg-[#0a85d1] text-white text-sm font-medium rounded-lg text-center"
              >
                Get Notion free
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
