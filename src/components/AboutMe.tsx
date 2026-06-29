import React from 'react';
import { PawnIcon, KnightIcon, QueenIcon, RookIcon, KingIcon, BishopIcon } from './CustomIcons';

export const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="py-24 relative overflow-hidden bg-deep-black">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="font-mono text-xs sm:text-sm tracking-widest text-neon-blue uppercase">About the Creator</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">THE STORY BEHIND</h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-neon-blue rounded-full" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Profile Logo Display Card */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent shadow-xl">
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-glass-bg border border-white/5 backdrop-blur-md flex items-center justify-center overflow-hidden group">
                {/* Embedded dynamic logo design */}
                <div className="relative flex items-center justify-center size-36 sm:size-44 rounded-full bg-black/50 border border-white/10 shadow-[0_0_25px_rgba(0,129,242,0.15)] group-hover:border-neon-blue/30 transition-all duration-500">
                  
                  <div className="absolute inset-0 rounded-full bg-brand-blue/5 blur-sm" />
                  
                  {/* Central Pawn Icon */}
                  <PawnIcon size={56} glow className="text-white relative z-10 group-hover:scale-105 transition-transform duration-300" />
                  
                  {/* Surrounding floating pieces */}
                  <div className="absolute -top-3 -left-3 animate-[float_4s_infinite]">
                    <KingIcon size={20} className="text-gray-400 rotate-12 opacity-80" />
                  </div>
                  <div className="absolute -top-4 right-1 animate-[float_5s_infinite_1s]">
                    <QueenIcon size={24} className="text-gray-400 -rotate-45 opacity-75" />
                  </div>
                  <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 animate-[float_3s_infinite_2s]">
                    <RookIcon size={18} className="text-gray-400 -rotate-12 opacity-70" />
                  </div>
                  <div className="absolute right-[-8px] top-1/3 -translate-y-1/2 animate-[float_6s_infinite]">
                    <KnightIcon size={20} className="text-gray-400 rotate-45 opacity-80" />
                  </div>
                  <div className="absolute bottom-[-8px] left-3 animate-[float_4s_infinite_0.5s]">
                    <BishopIcon size={18} className="text-gray-400 -rotate-12 opacity-75" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
                  <span>PFP LOGO</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Exact Story Copy */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 font-light text-base sm:text-lg leading-relaxed order-1 lg:order-2">
            
            <p className="font-semibold text-white text-xl sm:text-2xl border-l-2 border-brand-blue pl-4">
              Hi, I'm BlunderChess.
            </p>

            <p>
              I started this channel with one simple idea—to combine my passion for chess with my love for high-quality, cinematic editing.
            </p>

            <p>
              Here you'll find professional chess edits featuring legendary games, brilliant sacrifices, cold looks, and unforgettable moments from chess history.
            </p>

            <p>
              My goal is to entertain fellow chess enthusiasts and build an awesome community that enjoys the pure aesthetic and intensity of the game.
            </p>

            <p>
              Inspired by the creative, aggressive style of players like Mikhail Tal, I aim to make every video a piece of art, whether you're a beginner or a lifelong grandmaster.
            </p>

            {/* Premium signature accent */}
            <div className="pt-4 flex flex-col items-start">
              <span className="font-handwriting text-3xl text-neon-blue leading-none">BlunderChess</span>
              <span className="font-mono text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mt-1">Channel Founder & Editor</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
