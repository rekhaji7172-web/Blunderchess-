import React from 'react';
import { PawnIcon, TrophyIcon, ChessClockIcon, ChessboardIcon } from './CustomIcons';

export const Stats: React.FC = () => {
  const statItems = [
    {
      label: 'Subscribers',
      value: '35,000+',
      description: 'Active Chess Fans',
      icon: <PawnIcon size={32} glow className="text-neon-blue" />
    },
    {
      label: 'Total Edits',
      value: '120+',
      description: 'High-Quality Videos',
      icon: <TrophyIcon size={32} />
    },
    {
      label: 'Top Video Views',
      value: '2.1M+',
      description: 'Viral Chess Moment',
      icon: <ChessClockIcon size={32} />
    },
    {
      label: 'Channel Started',
      value: '26 Oct 2025',
      description: 'Combine Chess & Art',
      icon: <ChessboardIcon size={32} glow className="text-neon-blue" />
    }
  ];

  return (
    <section id="channel-stats" className="py-24 relative bg-deep-black overflow-hidden border-t border-white/5">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-10 size-80 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="font-mono text-xs sm:text-sm tracking-widest text-neon-blue uppercase">Channel Insights</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">CHANNEL STATS</h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-neon-blue rounded-full" />
        </div>

        {/* Stats Grid Layout */}
        {/* Desktop: Horizontal layout (4 columns) */}
        {/* Mobile: Clean 2x2 Grid (no overlapping, perfectly balanced gap) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statItems.map((stat, idx) => (
            <div 
              key={idx}
              className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand-blue/30 transition-all duration-500 shadow-lg"
            >
              <div className="h-full rounded-2xl bg-glass-bg border border-white/5 backdrop-blur-md p-5 sm:p-6 lg:p-8 flex flex-col justify-between space-y-4 hover:shadow-[0_0_20px_rgba(0,129,242,0.15)] transition-all duration-500 group">
                
                {/* Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-gray-500 font-semibold uppercase group-hover:text-neon-blue transition-colors duration-300">
                    ID-0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <span className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</span>
                  <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon-blue transition-all duration-500 tracking-tight leading-none pt-1">
                    {stat.value}
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-light pt-1">{stat.description}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
