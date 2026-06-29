import React from 'react';

interface ChannelBannerProps {
  className?: string;
  overlayOpacity?: number;
}

export const ChannelBanner: React.FC<ChannelBannerProps> = ({ className = '', overlayOpacity = 0.65 }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${className}`}>
      {/* Absolute background SVG for cinematic rendering */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          {/* Deep black starry backdrop space */}
          <radialGradient id="spaceBackdrop" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#060814" />
            <stop offset="40%" stopColor="#03040b" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          {/* Electric Blue glowing horizontal cloud */}
          <radialGradient id="electricBlueCloud" cx="50%" cy="55%" r="55%" fx="45%" fy="50%">
            <stop offset="0%" stopColor="#005dfc" stopOpacity="0.45" />
            <stop offset="25%" stopColor="#003ec4" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#00227a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Glowing Purple/Violet secondary background nebula */}
          <radialGradient id="violetCloud" cx="20%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
            <stop offset="35%" stopColor="#7e22ce" stopOpacity="0.12" />
            <stop offset="80%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cyanCloud" cx="80%" cy="60%" r="45%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.22" />
            <stop offset="40%" stopColor="#0891b2" stopOpacity="0.08" />
            <stop offset="90%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Text/Signature gradients */}
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff4d6d" />
            <stop offset="20%" stopColor="#ff758f" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#a5c4f7" />
            <stop offset="100%" stopColor="#64dfdf" />
          </linearGradient>

          {/* Pawn gradient */}
          <linearGradient id="bannerPawnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>

          {/* Glowing Text Filter */}
          <filter id="cursiveGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="pawnGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Starry Space Base */}
        <rect width="100%" height="100%" fill="url(#spaceBackdrop)" />

        {/* 2. Layered Glowing Cosmic Clouds */}
        <ellipse cx="960" cy="540" rx="900" ry="300" fill="url(#electricBlueCloud)" transform="rotate(-3, 960, 540)" />
        <ellipse cx="600" cy="500" rx="800" ry="400" fill="url(#violetCloud)" />
        <ellipse cx="1300" cy="580" rx="700" ry="350" fill="url(#cyanCloud)" />

        {/* 3. High-density background stars */}
        <g opacity="0.45">
          <circle cx="200" cy="200" r="1" fill="#ffffff" />
          <circle cx="280" cy="850" r="1.5" fill="#ffffff" />
          <circle			cx="350" cy="180" r="2" fill="#ffffff" />
          <circle cx="150" cy="450" r="1" fill="#ffffff" />
          <circle cx="1800" cy="150" r="1.5" fill="#ffffff" />
          <circle cx="1700" cy="850" r="1" fill="#ffffff" />
          <circle cx="1400" cy="250" r="2" fill="#ffffff" />
          <circle cx="1050" cy="650" r="1.5" fill="#ffffff" />
          <circle cx="1550" cy="100" r="1" fill="#white" />
          <circle cx="850" cy="120" r="1.5" fill="#ffffff" />
          <circle cx="120" cy="650" r="2" fill="#ffffff" />
          <circle cx="550" cy="850" r="1" fill="#ffffff" />
          <circle cx="1100" cy="800" r="1.5" fill="#ffffff" />
          <circle cx="1380" cy="900" r="2" fill="#ffffff" />
          <circle cx="1500" cy="150" r="1" fill="#ffffff" />
          <circle cx="950" cy="180" r="1.5" fill="#ffffff" />
          <circle cx="200" cy="500" r="1" fill="#ffffff" />
          <circle cx="1000" cy="600" r="1" fill="#ffffff" />
          <circle cx="1100" cy="300" r="1" fill="#white" />
          <circle cx="1250" cy="250" r="1" fill="#ffffff" />
          <circle cx="1400" cy="450" r="1" fill="#ffffff" />
          <circle cx="150" cy="700" r="1" fill="#ffffff" />
          <circle cx="1350" cy="150" r="1" fill="#ffffff" />
        </g>

        {/* 4. Fine stardust particles (floating effect) */}
        <g opacity="0.6">
          <circle cx="180" cy="340" r="1" fill="#60a5fa" className="animate-pulse" />
          <circle cx="450" cy="200" r="1.5" fill="#9333ea" className="animate-pulse" />
          <circle cx="850" cy="150" r="2" fill="#38bdf8" className="animate-pulse" />
          <circle cx="1350" cy="450" r="1" fill="#f43f5e" className="animate-spin" />
          <circle cx="1100" cy="250" r="1.5" fill="#38bdf8" />
          <circle cx="1200" cy="800" r="1.2" fill="#c084fc" />
          <circle cx="250" cy="700" r="1.5" fill="#f472b6" />
        </g>

        {/* Floating chess pieces faded beautifully in the background banner context */}
        <g opacity="0.08" className="text-white">
          <path d="M 150 150 L 160 170 H 140 Z" fill="currentColor" />
          <path d="M1200 120 L 1210 140" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
        <div className="max-w-4xl w-full flex items-center justify-center gap-6 md:gap-12 select-none">
          {/* Cursive Handwriting Slogan Text */}
          <div className="text-center font-pinyon text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide select-none drop-shadow-[0_0_20px_rgba(255,77,109,0.35)] leading-tight">
            <span className="bg-gradient-to-r from-[#ff4d6d] via-[#ff758f] to-[#64dfdf] bg-clip-text text-transparent">
              Don't You Even Subscribe ?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
