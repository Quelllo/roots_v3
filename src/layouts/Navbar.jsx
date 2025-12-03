import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../components/Container';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Index', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-paper border-b-4 border-ink sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-black italic"
            style={{ fontFamily: '\'Berkshire Swash\', \'Fraunces\', Georgia, serif' }}
            onClick={handleLinkClick}
          >
            ROOTS<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2 font-bold uppercase text-xs tracking-widest transition-all duration-200 border-2 border-transparent ${
                  isActive(link.path)
                    ? 'bg-ink text-paper border-ink'
                    : 'text-ink hover:bg-accent hover:text-paper hover:border-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-12 h-12 border-2 border-ink bg-paper hover:bg-accent hover:text-paper transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-ink py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`block px-4 py-3 font-bold uppercase text-sm tracking-widest transition-all duration-200 border-2 ${
                  isActive(link.path)
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper text-ink border-ink hover:bg-accent hover:text-paper'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
