import React from 'react';
import { YoutubeIcon, DiscordIcon, PawnIcon } from './CustomIcons';
import { SocialCard } from '../types';

export const Contact: React.FC = () => {
  const socialCards: SocialCard[] = [
    {
      platform: 'YouTube',
      username: '@blundereditz-18',
      url: 'https://youtube.com/@blundereditz-18',
      description: 'Join over 35K+ chess enthusiasts subscribing for cinematic edits, sacrificing patterns, and historical chess masterclasses.'
    },
    {
      platform: 'Discord',
      username: 'BlunderChess Arena',
      url: 'https://discord.gg/blundereditz',
      description: 'Hop into our Discord server to connect with fellow chess players, discuss creative editing styles, and suggest games for future videos.'
    },
    {
      platform: 'Email',
      username: 'harshitsainiji1845@gmail.com',
      url: 'mailto:harshitsainiji1845@gmail.com',
      description: 'For business proposals, creative sponsorship projects, or professional video editing inquiries, send an email directly.'
    }
  ];

  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-deep-black overflow-hidden border-t border-white/5">
      
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 size-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none select-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 size-80 rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none select-none animate-pulse-glow [animation-delay:2.5s]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="font-mono text-xs sm:text-sm tracking-widest text-neon-blue uppercase">Get Connected</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">COMMUNITY & COLLABS</h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-neon-blue rounded-full" />
        </div>

        {/* Premium Social Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {socialCards.map((card, idx) => {
            const isYoutube = card.platform === 'YouTube';
            const isDiscord = card.platform === 'Discord';
            
            return (
              <div
                key={idx}
                onClick={() => handleCardClick(card.url)}
                className="relative group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand-blue/30 transition-all duration-500 cursor-pointer shadow-lg active:scale-[0.99]"
              >
                
                {/* Glassmorphic card frame */}
                <div className="relative h-full rounded-2xl bg-glass-bg border border-white/5 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-hidden">
                  
                  {/* Subtle hover gradient backdrop glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-0 bg-gradient-to-br ${
                    isYoutube ? 'from-red-600 to-red-400' : isDiscord ? 'from-[#5865F2] to-[#7289da]' : 'from-brand-blue to-neon-blue'
                  }`} />

                  {/* Top: Branding Icon & Username */}
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      {/* Premium Icon Container */}
                      <div className={`p-3 rounded-xl border transition-all duration-300 ${
                        isYoutube 
                          ? 'bg-red-500/10 border-red-500/20 text-red-500 group-hover:bg-red-500/20 group-hover:border-red-500/40' 
                          : isDiscord 
                            ? 'bg-[#5865F2]/10 border-[#5865F2]/20 text-[#5865F2] group-hover:bg-[#5865F2]/20 group-hover:border-[#5865F2]/40' 
                            : 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue group-hover:bg-brand-blue/20 group-hover:border-brand-blue/40'
                      }`}>
                        {isYoutube ? (
                          <YoutubeIcon size={24} />
                        ) : isDiscord ? (
                          <DiscordIcon size={24} />
                        ) : (
                          <PawnIcon size={24} glow />
                        )}
                      </div>
                      
                      {/* Connection Signal */}
                      <span className="font-mono text-[9px] tracking-widest text-gray-500 font-bold uppercase flex items-center gap-1.5">
                        <span className={`size-1.5 rounded-full ${
                          isYoutube ? 'bg-red-500' : isDiscord ? 'bg-[#5865F2]' : 'bg-neon-blue'
                        }`} />
                        {card.platform}
                      </span>
                    </div>

                    {/* Channel handle/username */}
                    <div className="space-y-1">
                      <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Handle</span>
                      <h3 className="font-display font-bold text-white text-xl sm:text-2xl group-hover:text-neon-blue transition-colors duration-300">
                        {card.username}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom: Card Description & Interactive Accent */}
                  <div className="relative z-10 pt-4 border-t border-white/5 space-y-4">
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {card.description}
                    </p>

                    <div className="flex items-center justify-end text-xs font-mono font-medium text-neon-blue opacity-80 group-hover:opacity-100 transition-opacity duration-300 gap-1">
                      <span>VISIT PAGE</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-300">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
