import React from 'react';
import { PawnIcon, KnightIcon, BishopIcon, RookIcon, QueenIcon, KingIcon } from './CustomIcons';

export const Hero: React.FC = () => {
  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetElement = document.getElementById('videos');
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleJoinDiscord = () => {
    window.open('https://discord.gg/blundereditz', '_blank');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-deep-black"
    >
      
      {/* 1. Base Channel Banner Background Cover with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920&q=80" 
          alt="Space Nebula Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35"
        />
        {/* Cinematic gradient fade from bottom & sides to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-deep-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-transparent to-deep-black/50" />
      </div>

      {/* 2. Banner Text/Signatures Integrated into Background */}
      <div className="absolute top-1/3 right-1/10 lg:right-1/4 z-10 pointer-events-none select-none opacity-40 md:opacity-60 hidden sm:block">
        <div className="flex items-center gap-4 animate-float">
          <PawnIcon size={40} className="text-white opacity-85" />
          <span className="font-handwriting text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] via-[#f72585] to-[#7209b7] drop-shadow-[0_0_15px_rgba(255,51,102,0.5)]">
            Don't You Even Subscribe ?
          </span>
        </div>
      </div>

      {/* 3. Glowing Ambient Lights and Particles */}
      <div className="absolute top-1/4 left-1/4 size-80 rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none select-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 size-80 rounded-full bg-neon-blue/10 blur-[120px] pointer-events-none select-none animate-pulse-glow [animation-delay:2s]" />

      {/* 4. Hero Content Grid Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 lg:py-0">
        
        {/* Left Side: Content & Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
            <span className="size-2 rounded-full bg-neon-blue animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-neon-blue uppercase">YouTube Creator Channel</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display font-bold tracking-tight text-white text-4xl sm:text-6xl lg:text-7.5xl leading-none">
              BLUNDER
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-neon-blue to-white drop-shadow-[0_0_15px_rgba(0,129,242,0.3)]">CHESS</span>
            </h1>
            <p className="font-handwriting text-xl sm:text-2xl text-neon-blue font-bold opacity-90 leading-none">
              Where editing meets the magic of Tal
            </p>
          </div>

          <p className="max-w-xl text-gray-400 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            Experience high-quality, cinematic chess edits compiling historic matches, legendary sacrifices, and brilliant games that make the chessboard come alive.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleExploreClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-brand-blue to-neon-blue hover:shadow-[0_0_25px_rgba(0,129,242,0.4)] active:scale-[0.98] transition-all duration-300"
            >
              Explore Edits
            </button>
            <button
              onClick={handleJoinDiscord}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-[0.98] transition-all duration-300"
            >
              Join Discord
            </button>
          </div>

        </div>

        {/* Right Side: Premium Glass Logo Card with Falling Pieces */}
        <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0">
          <div className="relative group p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_35px_rgba(0,129,242,0.15)] group hover:shadow-[0_0_50px_rgba(0,129,242,0.25)] transition-all duration-500 animate-float">
            
            {/* Real Logo card frame */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-glass-bg border border-white/5 backdrop-blur-2xl flex items-center justify-center overflow-hidden">
              
              {/* Starry Space Circle Inside Card */}
              <div className="absolute inset-0 opacity-45 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent z-0" />
              
              {/* Logo Central Pawn with Double Question Mark */}
              <div className="relative z-10 flex flex-col items-center justify-center scale-110">
                
                {/* Handcrafted circular logo background container */}
                <div className="relative size-32 sm:size-40 rounded-full flex items-center justify-center bg-black/40 border border-white/10 shadow-[inset_0_0_20px_rgba(0,129,242,0.2)]">
                  
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 rounded-full bg-neon-blue/5 blur-md" />
                  
                  {/* Central Pawn Icon */}
                  <PawnIcon size={64} glow className="text-white relative z-10 hover:scale-105 transition-transform duration-300" />
                  
                  {/* Falling Chess Pieces - positioned around the central pawn */}
                  <div className="absolute -top-4 -left-4 animate-[float_4s_infinite]">
                    <KingIcon size={24} className="text-gray-400 rotate-12 opacity-85" />
                  </div>
                  <div className="absolute -top-6 right-2 animate-[float_5s_infinite_1s]">
                    <QueenIcon size={28} className="text-gray-400 -rotate-45 opacity-80" />
                  </div>
                  <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 animate-[float_3s_infinite_2s]">
                    <RookIcon size={22} className="text-gray-400 -rotate-12 opacity-75" />
                  </div>
                  <div className="absolute right-[-10px] top-1/3 -translate-y-1/2 animate-[float_6s_infinite]">
                    <KnightIcon size={24} className="text-gray-400 rotate-45 opacity-85" />
                  </div>
                  <div className="absolute bottom-[-10px] left-4 animate-[float_4s_infinite_0.5s]">
                    <BishopIcon size={20} className="text-gray-400 -rotate-12 opacity-80" />
                  </div>
                  <div className="absolute bottom-[-8px] right-6 animate-[float_5s_infinite_1.5s]">
                    <PawnIcon size={18} className="text-gray-500 rotate-12 opacity-90" />
                  </div>
                </div>

                {/* Subtle double question marks beneath/above the pawn */}
                <span className="absolute -top-2 left-6 text-neon-blue font-bold text-lg select-none drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">??</span>
                <span className="absolute bottom-4 right-6 text-neon-blue font-bold text-lg select-none drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">!!</span>

              </div>

              {/* Minimal light sheen reflections */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
