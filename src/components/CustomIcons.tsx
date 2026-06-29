import React from 'react';
import { ChessIconProps } from '../types';

export const PawnIcon: React.FC<ChessIconProps> = ({ className = '', size = 24, glow = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(0,129,242,0.6)]' : ''}`}
  >
    <path
      d="M12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9Z"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 9C10.5 11 9 13.5 9 16C9 17 10 18 12 18C14 18 15 17 15 16C15 13.5 13.5 11 12 9Z"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 21H18"
      stroke="url(#chess-grad)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 19H16"
      stroke="url(#chess-grad-cyan)"
      strokeWidth="1.5"
    />
    <defs>
      <linearGradient id="chess-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081f2" />
        <stop offset="100%" stopColor="#00e5ff" />
      </linearGradient>
      <linearGradient id="chess-grad-cyan" x1="8" y1="19" x2="16" y2="19" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00e5ff" />
        <stop offset="100%" stopColor="#0081f2" />
      </linearGradient>
    </defs>
  </svg>
);

export const KnightIcon: React.FC<ChessIconProps> = ({ className = '', size = 24, glow = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]' : ''}`}
  >
    <path
      d="M19 21H5"
      stroke="url(#chess-grad)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 19V14C7 14 6 11 8.5 7.5C11 4 14.5 3.5 14.5 3.5C14.5 3.5 14.5 5 13.5 6.5C12.5 8 13.5 10.5 15.5 11C17.5 11.5 18 10 18 10C18 10 18.5 11.5 17.5 13.5C16.5 15.5 17 19 17 19H7Z"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M10 7.5C10 7.5 10.5 6.5 11.5 6.5"
      stroke="#00e5ff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 11.5C11 11.5 12 11 12 13"
      stroke="url(#chess-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="chess-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081f2" />
        <stop offset="100%" stopColor="#00e5ff" />
      </linearGradient>
    </defs>
  </svg>
);

export const RookIcon: React.FC<ChessIconProps> = ({ className = '', size = 24, glow = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(0,129,242,0.6)]' : ''}`}
  >
    <path
      d="M5 21H19"
      stroke="url(#chess-grad)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 19L8 10H16L17 19H7Z"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M6 10V5H8V8H11V5H13V8H16V5H18V10H6Z"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <line
      x1="10"
      y1="14"
      x2="14"
      y2="14"
      stroke="#00e5ff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="chess-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081f2" />
        <stop offset="100%" stopColor="#00e5ff" />
      </linearGradient>
    </defs>
  </svg>
);

export const QueenIcon: React.FC<ChessIconProps> = ({ className = '', size = 24, glow = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]' : ''}`}
  >
    <path
      d="M5 21H19"
      stroke="url(#chess-grad)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 3L9 9L4 6L6 18H18L20 6L15 9L12 3Z"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="3" r="1" fill="#00e5ff" />
    <circle cx="4" cy="6" r="1" fill="#00e5ff" />
    <circle cx="20" cy="6" r="1" fill="#00e5ff" />
    <circle cx="9" cy="9" r="0.75" fill="#00e5ff" />
    <circle cx="15" cy="9" r="0.75" fill="#00e5ff" />
    <line
      x1="8"
      y1="14"
      x2="16"
      y2="14"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
    />
    <defs>
      <linearGradient id="chess-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081f2" />
        <stop offset="100%" stopColor="#00e5ff" />
      </linearGradient>
    </defs>
  </svg>
);

export const KingIcon: React.FC<ChessIconProps> = ({ className = '', size = 24, glow = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(0,129,242,0.6)]' : ''}`}
  >
    <path
      d="M5 21H19"
      stroke="url(#chess-grad)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 5V2M10 3.5H14"
      stroke="#00e5ff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M6 18L8 7L12 10L16 7L18 18H6Z"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <line
      x1="8"
      y1="14"
      x2="16"
      y2="14"
      stroke="#00e5ff"
      strokeWidth="1.5"
    />
    <defs>
      <linearGradient id="chess-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081f2" />
        <stop offset="100%" stopColor="#00e5ff" />
      </linearGradient>
    </defs>
  </svg>
);

export const BishopIcon: React.FC<ChessIconProps> = ({ className = '', size = 24, glow = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(0,129,242,0.6)]' : ''}`}
  >
    <path
      d="M5 21H19"
      stroke="url(#chess-grad)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 5C10 7 9 9.5 9 13C9 14.5 10 16 12 16C14 16 15 14.5 15 13C15 9.5 14 7 12 5Z"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5V2M10.5 3H13.5"
      stroke="#00e5ff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9.5 11L14.5 12.5"
      stroke="url(#chess-grad)"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient id="chess-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081f2" />
        <stop offset="100%" stopColor="#00e5ff" />
      </linearGradient>
    </defs>
  </svg>
);

export const ChessboardIcon: React.FC<ChessIconProps> = ({ className = '', size = 24, glow = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${glow ? 'drop-shadow-[0_0_8px_rgba(0,129,242,0.6)]' : ''}`}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="url(#chess-grad)"
      strokeWidth="1.5"
    />
    <path d="M9 3V21" stroke="url(#chess-grad)" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M15 3V21" stroke="url(#chess-grad)" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M3 9H21" stroke="url(#chess-grad)" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M3 15H21" stroke="url(#chess-grad)" strokeWidth="1" strokeDasharray="2 2" />
    {/* Solid mini-squares representing premium chess tiles */}
    <rect x="3" y="3" width="3" height="3" fill="#0081f2" opacity="0.4" />
    <rect x="9" y="3" width="3" height="3" fill="#0081f2" opacity="0.4" />
    <rect x="6" y="6" width="3" height="3" fill="#0081f2" opacity="0.4" />
    <rect x="12" y="6" width="3" height="3" fill="#0081f2" opacity="0.4" />
  </svg>
);

export const TrophyIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[var(--icon-blue)]"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h-3.5" />
    <path d="M15 4h-6v5c0 2.21 1.79 4 4 4s4-1.79 4-4V4z" />
    <path d="M4 6h10" />
    <path d="M8 12v3" />
    <path d="M6 15h4" />
    <path d="M12 9c0-.398-.075-.783-.213-1.129" />
    <path d="M11 5V2H13" />
  </svg>
);

export const ChessClockIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[var(--icon-blue)]"
  >
    <rect x="3" y="6" width="18" height="13" rx="2" />
    <circle cx="8" cy="12" r="3" />
    <circle cx="16" cy="12" r="3" />
    <path d="M8 10v2h2" />
    <path d="M16 10v2h1" />
    <path d="M6 3v3" />
    <path d="M18 3v3" />
  </svg>
);

export const YoutubeIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.513 12 3.513 12 3.513s-7.519 0-9.389.542a3.004 3.003 0 0 0-2.11 2.108C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.87.542 9.389.542 9.389.542s7.52 0 9.389-.542a3.003 3.003 0 0 0 2.11-2.108c.502-1.87.502-5.837.502-5.837s0-3.967-.502-5.837ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
  </svg>
);

export const DiscordIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.077 0 0 0 .084-.025a14.08 14.08 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.873-.894a.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.894a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.078.078 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.156-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.156 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.156-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.156 2.418Z" />
  </svg>
);
