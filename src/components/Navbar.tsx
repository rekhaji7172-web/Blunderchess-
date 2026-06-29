import React, { useState, useEffect } from 'react';
import { PawnIcon } from './CustomIcons';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about-me' },
    { label: 'Videos', href: '#videos' },
    { label: 'Channel Stats', href: '#channel-stats' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' }
  ];

  // Track scroll position to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 120; // offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // offset for sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Branding */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-brand-blue/30 to-neon-blue/10 border border-white/10 group-hover:border-neon-blue/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,129,242,0.1)]">
            <PawnIcon size={20} glow className="text-neon-blue group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-xl bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-white text-lg leading-none">BlunderChess</span>
            <span className="font-handwriting text-[#ff3366] text-sm leading-none mt-1 select-none">Subscribe?</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1.5 bg-white/5 px-2.5 py-1.5 rounded-full border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-blue to-neon-blue text-white shadow-[0_0_15px_rgba(0,129,242,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="https://youtube.com/@blundereditz-18"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:shadow-[0_0_20px_rgba(0,129,242,0.2)] transition-all duration-300 group"
          >
            <span className="relative z-10">Subscribe</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-brand-blue/20 to-neon-blue/20 transition-transform duration-500" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center size-10 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <div className={`w-5 h-0.5 bg-current rounded-full my-1 transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[350px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`py-2 text-base font-medium transition-all ${
                  isActive
                    ? 'text-neon-blue pl-2 border-l-2 border-neon-blue'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="https://youtube.com/@blundereditz-18"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-blue to-neon-blue text-white text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(0,129,242,0.2)]"
          >
            Subscribe
          </a>
        </div>
      </div>
    </nav>
  );
};
