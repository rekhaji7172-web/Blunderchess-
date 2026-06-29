import React, { useRef } from 'react';
import { VideoShort } from '../types';

export const Videos: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const shorts: VideoShort[] = [
    {
      id: 'short1',
      title: 'The Coldest Look in Chess History 🥶',
      views: '2.4M views',
      duration: '0:54',
      thumbnailUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=400&h=700&q=80',
      youtubeUrl: 'https://youtube.com/@blundereditz-18'
    },
    {
      id: 'short2',
      title: 'Mikhail Tal\'s Sacrifices That Defied Logic 🧠',
      views: '1.8M views',
      duration: '0:58',
      thumbnailUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=400&h=700&q=80',
      youtubeUrl: 'https://youtube.com/@blundereditz-18'
    },
    {
      id: 'short3',
      title: 'When Magnus Carlsen Insulted His Opponent... 💀',
      views: '1.5M views',
      duration: '0:48',
      thumbnailUrl: 'https://images.unsplash.com/photo-1586165368502-1badb97a6461?auto=format&fit=crop&w=400&h=700&q=80',
      youtubeUrl: 'https://youtube.com/@blundereditz-18'
    },
    {
      id: 'short4',
      title: 'Garry Kasparov\'s Most Angry Chess Moments 😡',
      views: '1.1M views',
      duration: '0:52',
      thumbnailUrl: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&w=1920&q=80',
      youtubeUrl: 'https://youtube.com/@blundereditz-18'
    },
    {
      id: 'short5',
      title: 'Hikaru Nakamura\'s Premoves are Illegal ⚡',
      views: '980K views',
      duration: '0:50',
      thumbnailUrl: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&w=400&h=700&q=80',
      youtubeUrl: 'https://youtube.com/@blundereditz-18'
    },
    {
      id: 'short6',
      title: 'The Pure Disrespect of This Move! 🤯',
      views: '850K views',
      duration: '0:45',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=400&h=700&q=80',
      youtubeUrl: 'https://youtube.com/@blundereditz-18'
    }
  ];

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleCardClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="videos" className="py-24 relative bg-deep-black overflow-hidden border-t border-white/5">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/4 right-10 size-96 rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="flex flex-col items-start space-y-3">
            <span className="font-mono text-xs sm:text-sm tracking-widest text-neon-blue uppercase">Latest Uploads</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">CINEMATIC SHORTS</h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-neon-blue rounded-full" />
          </div>
          
          {/* Navigation Controls (Only visible on Desktop) */}
          <div className="hidden md:flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={scrollLeft}
              className="size-11 rounded-full flex items-center justify-center border border-white/10 hover:border-brand-blue/50 bg-white/5 text-white hover:bg-brand-blue/20 transition-all duration-300"
              aria-label="Scroll Left"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="size-11 rounded-full flex items-center justify-center border border-white/10 hover:border-brand-blue/50 bg-white/5 text-white hover:bg-brand-blue/20 transition-all duration-300"
              aria-label="Scroll Right"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Video Scroller Container */}
        <div 
          ref={scrollContainer}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 -mx-6 px-6"
        >
          {shorts.map((short) => (
            <div
              key={short.id}
              onClick={() => handleCardClick(short.youtubeUrl)}
              className="flex-shrink-0 w-[70vw] sm:w-[280px] md:w-[300px] snap-start group cursor-pointer"
            >
              {/* Vertical Card structure */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-glass-bg group-hover:border-brand-blue/40 shadow-lg group-hover:shadow-[0_0_30px_rgba(0,129,242,0.25)] transition-all duration-500">
                
                {/* Real Thumbnail */}
                <img
                  src={short.thumbnailUrl}
                  alt={short.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Play Button Overlay (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="size-14 rounded-full flex items-center justify-center bg-black/60 border border-white/10 backdrop-blur-md text-white scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 shadow-[0_0_20px_rgba(0,129,242,0.5)] transition-all duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-neon-blue ml-1">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono font-medium text-white">
                  {short.duration}
                </div>

                {/* Info Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2 flex flex-col justify-end">
                  
                  {/* YouTube Shorts Red Tag */}
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-wider font-semibold text-red-500 uppercase">SHORTS</span>
                  </div>

                  <h3 className="font-display font-semibold text-white text-base sm:text-lg tracking-tight group-hover:text-neon-blue line-clamp-2 transition-colors duration-300">
                    {short.title}
                  </h3>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-gray-400 font-medium">{short.views}</span>
                    <span className="text-[10px] font-mono text-neon-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">WATCH NOW →</span>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Small swipe instruction for mobile viewports */}
        <div className="flex justify-center mt-6 md:hidden">
          <p className="text-xs text-gray-500 flex items-center gap-1.5">
            <span>Swipe horizontally to view more edits</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
            </svg>
          </p>
        </div>

      </div>
    </section>
  );
};
