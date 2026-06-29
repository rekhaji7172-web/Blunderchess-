import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  glow?: boolean;
}

// 1. Pawn Icon
export const Pawn: React.FC<IconProps> = ({ size = 24, glow = true, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${glow ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''} ${className}`}
    {...props}
  >
    <path
      d="M12 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM12 9.5c-2 0-3.5 1.5-3.5 3.5v1.5a1 1 0 00.5.8l2.5 1.5v1.2a4 4 0 01-3 3.8l-.5.2c-.6.2-1 .8-1 1.5v.3a1 1 0 001 1h13a1 1 0 001-1v-.3c0-.7-.4-1.3-1-1.5l-.5-.2a4 4 0 01-3-3.8V16.8l2.5-1.5a1 1 0 00.5-.8V13c0-2-1.5-3.5-3.5-3.5z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);

// 2. Knight Icon
export const Knight: React.FC<IconProps> = ({ size = 24, glow = true, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${glow ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''} ${className}`}
    {...props}
  >
    <path
      d="M19.5 22H4.5a1 1 0 01-1-1v-.5c0-1.5.8-2.8 2-3.3l1-.4a8.5 8.5 0 012.3-.5c.2-.5.5-1 .8-1.5-.7-.4-1.3-.9-1.8-1.5a1 1 0 010-1.4l.2-.2a4 4 0 013-1.1c.3-.6.7-1.1 1.1-1.6l-.3-.1a3 3 0 01-1.8-1.6 4.5 4.5 0 01-.4-2.8l.2-1.2C10 3.2 11.5 2 13.2 2c2.1 0 3.8 1.5 4.2 3.5.2.8.1 1.6-.2 2.3l-.2.5a5 5 0 002.5 3.7c1 .5 1.7 1.5 1.7 2.7V21a1 1 0 01-1 1z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
    <circle cx="14" cy="7" r="1" fill="black" />
  </svg>
);

// 3. Rook Icon
export const Rook: React.FC<IconProps> = ({ size = 24, glow = true, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${glow ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''} ${className}`}
    {...props}
  >
    <path
      d="M5 3h3v2h2V3h4v2h2V3h3a1 1 0 011 1v4a1 1 0 01-1 1h-.5v6c0 1.2-.5 2.3-1.3 3.1l-.2.2v1.7h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a1 1 0 011-1h1V18l-.2-.2A4.4 4.4 0 013.5 15V9H3a1 1 0 01-1-1V4a1 1 0 011-1h2zm1.5 15h11v2h-11v-2z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);

// 4. Queen Icon
export const Queen: React.FC<IconProps> = ({ size = 24, glow = true, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${glow ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''} ${className}`}
    {...props}
  >
    <path
      d="M12 5.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-6 2a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zm12 0a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zm-14 13a1 1 0 001 1h18a1 1 0 001-1v-.5c0-1-.5-2-1.5-2.5V13a3 3 0 00-1-2.2l.5-.8L18 7.5l-3 4.5L12 6.5l-3 5.5-3-4.5L3 7.5l.5 2.5a3 3 0 00-1 2.2V17C1.5 17.5 1 18.5 1 19.5v.5zm16-2.5H6v2h12v-2z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);

// 5. King Icon
export const King: React.FC<IconProps> = ({ size = 24, glow = true, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${glow ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''} ${className}`}
    {...props}
  >
    <path
      d="M12 4.5V2m-1.5 1H13.5M2 21a1 1 0 001 1h18a1 1 0 001-1v-.5c0-1.5-1-2.8-2.5-3.2l-1.5-.4V10.5c.6-.3 1-.9 1-1.5a1.5 1.5 0 00-1.5-1.5c-.5 0-1 .3-1.2.7L15 6l-3 4-3-4-1.8 2.2c-.2-.4-.7-.7-1.2-.7A1.5 1.5 0 004.5 9c0 .6.4 1.2 1 1.5v6.4l-1.5.4C2.5 17.7 1.5 19 1.5 20.5v.5zm15.5-3H6.5v2h11.5v-2z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. Chessboard Icon
export const Chessboard: React.FC<IconProps> = ({ size = 24, glow = true, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${glow ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''} ${className}`}
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M7 2v20M12 2v20M17 2v20M2 7h20M2 12h20M2 17h20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    <rect x="2" y="2" width="5" height="5" rx="0.5" fill="currentColor" fillOpacity="0.8" />
    <rect x="12" y="2" width="5" height="5" fill="currentColor" fillOpacity="0.8" />
    <rect x="7" y="7" width="5" height="5" fill="currentColor" fillOpacity="0.8" />
    <rect x="17" y="7" width="5" height="5" fill="currentColor" fillOpacity="0.8" />
    <rect x="2" y="12" width="5" height="5" fill="currentColor" fillOpacity="0.8" />
    <rect x="12" y="12" width="5" height="5" fill="currentColor" fillOpacity="0.8" />
    <rect x="7" y="17" width="5" height="5" fill="currentColor" fillOpacity="0.8" />
    <rect x="17" y="17" width="5" height="5" fill="currentColor" fillOpacity="0.8" />
  </svg>
);

// 7. Trophy Icon
export const Trophy: React.FC<IconProps> = ({ size = 24, glow = true, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${glow ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''} ${className}`}
    {...props}
  >
    <path
      d="M6 9H4.5a2.5 2.5 0 010-5H6v5zm12 0h1.5a2.5 2.5 0 000-5H18v5zM6 3h12v11c0 2.8-2.2 5-5 5h-2c-2.8 0-5-2.2-5-5V3z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19v3M9 22h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 8. Chess Clock Icon
export const ChessClock: React.FC<IconProps> = ({ size = 24, glow = true, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${glow ? 'drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : ''} ${className}`}
    {...props}
  >
    <rect x="2" y="6" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="7.5" cy="12.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16.5" cy="12.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.5 10.5v2h2M16.5 11v1.5h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 3h3M15 3h3M7.5 3v3M16.5 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 9. Blunder Icon (??)
export const BlunderIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <span
    className={`inline-flex items-center justify-center font-bold text-white bg-red-600 rounded-full shrink-0 select-none ${className}`}
    style={{
      width: size,
      height: size,
      fontSize: size * 0.55,
      fontFamily: 'Space Grotesk, sans-serif',
      boxShadow: '0 0 12px rgba(220, 38, 38, 0.7)',
    }}
  >
    ??
  </span>
);

// 10. Brilliant Icon (!!)
export const BrilliantIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
  <span
    className={`inline-flex items-center justify-center font-bold text-white bg-teal-500 rounded-full shrink-0 select-none ${className}`}
    style={{
      width: size,
      height: size,
      fontSize: size * 0.55,
      fontFamily: 'Space Grotesk, sans-serif',
      boxShadow: '0 0 12px rgba(20, 184, 166, 0.7)',
    }}
  >
    !!
  </span>
);
