import React, { useState } from 'react';

interface ChannelLogoProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export const ChannelLogo: React.FC<ChannelLogoProps> = ({ size = 200, className = '', glow = true }) => {
  // Try the most reliable Google Drive direct image URLs
  const primaryUrl = "https://lh3.googleusercontent.com/d/1qvAaYEqGBFhOPUzUUCk2-SpetacoVwxe";
  const fallbackUrl1 = "https://drive.google.com/thumbnail?id=1qvAaYEqGBFhOPUzUUCk2-SpetacoVwxe&sz=w1000";
  const fallbackUrl2 = "https://drive.google.com/uc?export=view&id=1qvAaYEqGBFhOPUzUUCk2-SpetacoVwxe";

  const [imgSrc, setImgSrc] = useState(primaryUrl);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = () => {
    if (retryCount === 0) {
      setImgSrc(fallbackUrl1);
      setRetryCount(1);
    } else if (retryCount === 1) {
      setImgSrc(fallbackUrl2);
      setRetryCount(2);
    }
  };

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative rounded-xl overflow-hidden flex items-center justify-center bg-zinc-950 border-2 border-amber-500/30 select-none ${
        glow ? 'shadow-[0_0_30px_rgba(245,158,11,0.25)]' : ''
      } ${className}`}
    >
      <img
        src={imgSrc}
        alt="BlunderChess Logo"
        className="w-full h-full object-contain rounded-xl transition-transform duration-500 hover:scale-105"
        referrerPolicy="no-referrer"
        onError={handleError}
      />
    </div>
  );
};


