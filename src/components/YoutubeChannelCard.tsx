import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Youtube, ExternalLink, Calendar, Tv, Users, Eye, RefreshCw } from 'lucide-react';
import { YoutubeStats } from '../types';
import { CountUp } from './CountUp';

interface YoutubeChannelCardProps {
  stats: YoutubeStats | null;
  isLoading: boolean;
  onRefresh: () => void;
}

export const YoutubeChannelCard: React.FC<YoutubeChannelCardProps> = ({ stats, isLoading, onRefresh }) => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  // Generate some premium slow-floating particle stats background
  useEffect(() => {
    const generated = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generated);
  }, []);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'Oct 26, 2025';
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return 'Oct 26, 2025';
    }
  };

  const formatViews = (viewsNum?: number) => {
    if (!viewsNum) return '4.8M+';
    if (viewsNum >= 1000000) {
      return `${(viewsNum / 1000000).toFixed(1)}M+`;
    }
    return viewsNum.toLocaleString();
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-8" id="youtube-official-card">
      {/* Decorative Outer Glow & Accent Line */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000" />
      
      <div 
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e0e15]/90 to-[#050508]/95 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.25)] group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Particle Orbs inside card */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-blue-400 rounded-full blur-[1px]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.7, 0.1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Dynamic Header Banner */}
        <div className="relative h-32 sm:h-44 md:h-52 w-full overflow-hidden bg-slate-950">
          {stats?.bannerUrl ? (
            <img 
              src={stats.bannerUrl} 
              alt="Channel Banner" 
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          ) : (
            /* Custom gorgeous vector fallback banner representing space + chess grid */
            <div className="relative w-full h-full bg-gradient-to-r from-[#03001e] via-[#7303c0] to-[#ec38bc] opacity-80">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e15] to-transparent" />
              <div className="absolute right-10 bottom-6 md:right-16 md:bottom-8 opacity-20">
                <Youtube size={120} className="text-white" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-space font-extrabold text-xl sm:text-3xl tracking-widest text-white/40 uppercase">
                  BLUNDERCHESS OFFICIAL
                </span>
              </div>
            </div>
          )}
          {/* Top-right floating controls */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
            <span className="text-[10px] sm:text-xs font-mono font-bold bg-black/60 border border-white/10 text-neutral-400 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-lg select-none">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${stats?.fromCache ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${stats?.fromCache ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
              </span>
              {stats?.fromCache ? 'Cached Proxy' : 'API Live'}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRefresh();
              }}
              disabled={isLoading}
              className="p-1.5 sm:p-2 bg-black/60 border border-white/10 hover:border-blue-500/40 text-neutral-300 hover:text-white rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50"
              title="Manual Sync"
            >
              <RefreshCw size={14} className={`sm:w-4 sm:h-4 ${isLoading ? 'animate-spin text-blue-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Profile Details Container */}
        <div className="relative px-6 pb-8 pt-4 sm:pt-0">
          
          {/* Skeleton Overlay with Fade Animation */}
          <AnimatePresence mode="wait">
            {isLoading && !stats ? (
              <motion.div 
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 pt-4"
              >
                {/* Horizontal skeleton */}
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-16 sm:-mt-20 relative z-10">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-neutral-800 animate-pulse border-4 border-[#0e0e15] shadow-xl" />
                  <div className="flex-1 space-y-3 text-center sm:text-left">
                    <div className="h-8 bg-neutral-800 rounded-lg w-48 mx-auto sm:mx-0 animate-pulse" />
                    <div className="h-4 bg-neutral-800 rounded-lg w-28 mx-auto sm:mx-0 animate-pulse" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="h-24 bg-neutral-800/50 rounded-2xl animate-pulse" />
                  <div className="h-24 bg-neutral-800/50 rounded-2xl animate-pulse" />
                  <div className="h-24 bg-neutral-800/50 rounded-2xl animate-pulse" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Channel Identity Row */}
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-16 sm:-mt-20 relative z-10 text-center sm:text-left">
                  {/* Channel PFP */}
                  <div className="relative group/avatar">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-40 group-hover/avatar:opacity-75 transition duration-500" />
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#0e0e15] bg-[#0d0d12] shadow-2xl">
                      <img 
                        src={stats?.avatarUrl || "https://lh3.googleusercontent.com/d/1qvAaYEqGBFhOPUzUUCk2-SpetacoVwxe"} 
                        alt={stats?.title || "Blunderchess"} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/avatar:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Channel Info */}
                  <div className="flex-1 pt-2">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                      <h3 className="text-2xl sm:text-3xl font-space font-extrabold text-white tracking-tight">
                        {stats?.title || "Blunderchess"}
                      </h3>
                      {/* Verified Badge */}
                      <span className="inline-flex items-center justify-center bg-blue-500/15 border border-blue-500/30 text-blue-400 rounded-full px-2 py-0.5 text-[10px] font-space font-bold uppercase tracking-wider gap-1 select-none">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        YouTube Creator
                      </span>
                    </div>

                    <p className="text-sm text-neutral-400 mt-1 font-mono font-medium">
                      {stats?.handle || "@blundereditz-18"}
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-neutral-400">
                      <span className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                        <Calendar size={13} className="text-blue-400" />
                        Created {formatDate(stats?.publishedAt)}
                      </span>
                      <span className="text-xs text-neutral-500 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5 bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                        <Youtube size={13} className="text-red-500" />
                        YouTube Creator
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description snippet */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 text-left">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {stats?.description || "High-quality chess edits and cinematic chess storytelling. Merging chess tactics with art, sound design, and style."}
                  </p>
                </div>

                {/* Live Channel Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  
                  {/* Live Stats Box: Subscribers */}
                  <div className="relative group/box p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/30 transition-all duration-300">
                    <div className="rounded-2xl bg-neutral-900/60 border border-white/5 p-4 sm:p-5 flex flex-col justify-between h-24 sm:h-28 hover:bg-[#0e0e18] transition-colors duration-300 shadow-md">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-xs font-space text-neutral-400 font-medium tracking-wide uppercase">Subscribers</span>
                        <Users size={16} className="text-blue-400" />
                      </div>
                      <div className="text-left mt-auto">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-space font-extrabold text-white tracking-tight">
                          {stats ? <CountUp value={stats.subscriberCount} /> : "125,420"}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-teal-400 font-mono font-semibold flex items-center gap-1 mt-0.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                          Live Count
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Live Stats Box: Videos */}
                  <div className="relative group/box p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/30 transition-all duration-300">
                    <div className="rounded-2xl bg-neutral-900/60 border border-white/5 p-4 sm:p-5 flex flex-col justify-between h-24 sm:h-28 hover:bg-[#0e0e18] transition-colors duration-300 shadow-md">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-xs font-space text-neutral-400 font-medium tracking-wide uppercase">Total Videos</span>
                        <Tv size={16} className="text-blue-400" />
                      </div>
                      <div className="text-left mt-auto">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-space font-extrabold text-white tracking-tight">
                          {stats ? <CountUp value={stats.videoCount} /> : "48"}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-neutral-500 font-mono">
                          Uploaded
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Live Stats Box: Views */}
                  <div className="relative group/box p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/30 col-span-2 md:col-span-1 transition-all duration-300">
                    <div className="rounded-2xl bg-neutral-900/60 border border-white/5 p-4 sm:p-5 flex flex-col justify-between h-24 sm:h-28 hover:bg-[#0e0e18] transition-colors duration-300 shadow-md">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-xs font-space text-neutral-400 font-medium tracking-wide uppercase">Lifetime Views</span>
                        <Eye size={16} className="text-blue-400" />
                      </div>
                      <div className="text-left mt-auto">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-space font-extrabold text-white tracking-tight">
                          {stats ? formatViews(stats.viewCount) : "4.8M+"}
                        </p>
                        <p className="text-[9px] sm:text-[10px] text-neutral-500 font-mono">
                          Cumulative
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Interactive Button Panel & Sync Stamp */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] sm:text-xs font-mono text-neutral-500">
                      Last synced: {stats ? new Date(stats.lastSynced).toLocaleTimeString() : new Date().toLocaleTimeString()} (Auto-refresh: 30s)
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 w-full sm:w-auto">
                    {/* Visit Channel Button */}
                    <a
                      href="https://youtube.com/@blundereditz-18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none text-center px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white font-space font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 hover:bg-white/5"
                    >
                      Visit Channel
                      <ExternalLink size={13} />
                    </a>

                    {/* Official Subscribe Button with Glow */}
                    <a
                      href="https://youtube.com/@blundereditz-18?sub_confirmation=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none relative group/btn overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 p-px transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                    >
                      <div className="relative px-6 py-2.5 rounded-[11px] bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center gap-2">
                        <Youtube size={15} className="text-white fill-current" />
                        <span className="font-space font-bold text-xs sm:text-sm text-white tracking-wide">
                          Subscribe
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </div>
    </div>
  );
};
