import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Beer } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900 shadow-lg py-2' : 'bg-stone-900/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-brand-500 hover:text-brand-400 transition-colors">
          <Beer className="h-8 w-8" />
          <span className="font-serif text-2xl font-bold tracking-wider">LO STALLO</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors uppercase ${
                location.pathname === link.path
                  ? 'text-brand-500 border-b-2 border-brand-500'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/prenotazioni" 
            className="bg-brand-600 text-stone-900 px-5 py-2 rounded-md font-bold text-sm hover:bg-brand-500 transition-all shadow-md hover:shadow-brand-500/20"
          >
            Prenota
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-100 hover:text-brand-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-stone-900 border-t border-stone-800 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium py-2 border-b border-stone-800 ${
                location.pathname === link.path ? 'text-brand-500' : 'text-stone-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/prenotazioni" 
            className="bg-brand-600 text-stone-900 px-5 py-3 rounded-md font-bold text-center mt-2"
          >
            Prenota un Tavolo
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;