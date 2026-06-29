import React from 'react';
import { PawnIcon, YoutubeIcon, DiscordIcon } from './CustomIcons';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#020202] border-t border-white/5 py-12 relative overflow-hidden">
      
      {/* Absolute glow background */}
      <div className="absolute bottom-0 right-10 size-64 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* Top: Branding and Cursive Signature */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Branding */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center size-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-blue/30 transition-all duration-300">
              <PawnIcon size={20} glow className="text-neon-blue" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white text-lg leading-none">BlunderChess</span>
              <span className="font-handwriting text-[#ff3366] text-sm leading-none mt-1 select-none">Subscribe?</span>
            </div>
          </a>

          {/* Banner-style cursive signature in footer */}
          <div className="flex items-center gap-3">
            <span className="font-handwriting text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#00e5ff] opacity-80 select-none">
              Don't You Even Subscribe ?
            </span>
          </div>
        </div>

        {/* Center: Footer Navigation and Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
          {/* Menu */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About Me', href: '#about-me' },
              { label: 'Videos', href: '#videos' },
              { label: 'Stats', href: '#channel-stats' },
              { label: 'FAQs', href: '#faqs' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/@blundereditz-18"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
              aria-label="YouTube Channel"
            >
              <YoutubeIcon size={18} />
            </a>
            <a
              href="https://discord.gg/blundereditz"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-all duration-300"
              aria-label="Discord Server"
            >
              <DiscordIcon size={18} />
            </a>
          </div>
        </div>

        {/* Bottom: Copyright block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-xs text-gray-500 font-light">
          <span>&copy; {new Date().getFullYear()} BlunderChess. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <span>Inspired by Tal's Sacrifices</span>
            <span className="size-1.5 rounded-full bg-neon-blue" />
            <span>Designed in Longview, WA</span>
          </span>
        </div>

      </div>
    </footer>
  );
};
