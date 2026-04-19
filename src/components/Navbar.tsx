import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'Page1', path: '/' },
    { name: 'Page2', path: '/page-2' },
    { name: 'Page3', path: '/page-3' },
    { name: 'Page4', path: '/page-4' },
    { name: 'Page5', path: '/page-5' },
    { name: 'Page6', path: '/page-6' },
  ];

  // Fungsi pembantu untuk menutup menu mobile
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              PPWL12-FE-CLONE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Burger Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu} // Menutup menu setelah klik
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;