import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  MessageSquare, 
  Youtube, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Eye,
  Mail,
  Copy,
  Check,
  ThumbsUp,
  Heart,
  Sparkles,
  RefreshCw,
  Sliders,
  Plus,
  Code,
  Terminal
} from 'lucide-react';
import { 
  Pawn, 
  Knight, 
  Rook, 
  Queen, 
  King, 
  Chessboard, 
  Trophy, 
  ChessClock,
  BlunderIcon,
  BrilliantIcon
} from './components/ChessIcons';
import { ChannelLogo } from './components/ChannelLogo';
import { ChannelBanner } from './components/ChannelBanner';
import { YoutubeChannelCard } from './components/YoutubeChannelCard';
import { CountUp } from './components/CountUp';
import { YoutubeStats } from './types';
import { motion, AnimatePresence } from 'motion/react';

// Exact structure for the 12 FAQs
const faqsList = [
  {
    q: "What editing app do you use?",
    a: "I edit all my videos using Alight Motion and Node Video Editor."
  },
  {
    q: "What type of content do you make?",
    a: "I currently create cinematic chess edits featuring legendary games and iconic moments."
  },
  {
    q: "How often do you upload?",
    a: "Usually once every 1–2 weeks."
  },
  {
    q: "Can I suggest a game for your next edit?",
    a: "Yes! I'm always open to community suggestions."
  },
  {
    q: "Do you play chess?",
    a: "Yes, I'm a chess enthusiast as well as an editor."
  },
  {
    q: "Do you livestream?",
    a: "No, not at the moment."
  },
  {
    q: "Can I use your edits in my own videos?",
    a: "No. Please don't re-upload or use my edits without my permission."
  },
  {
    q: "Do you accept collaborations?",
    a: "Yes, if you make high-quality edits that match the channel's style."
  },
  {
    q: "What apps do you use besides Alight Motion and Node Video Editor?",
    a: "I use different graphic and utility apps depending on the project, but Alight Motion and Node Video Editor are my main editing tools."
  },
  {
    q: "What device do you edit on?",
    a: "I edit on my phone."
  },
  {
    q: "Where can I contact you?",
    a: "You can reach me through YouTube or Discord."
  },
  {
    q: "Can I contact you for business inquiries?",
    a: "Yes. Feel free to use the contact information provided on this website."
  }
];

// Interactive YouTube Shorts Cards with Real Chess Edits & custom decorative SVGs representing chess positions
const shortsList = [
  {
    title: "The Beauty Of Mikhail Tal's Games ✨",
    views: "2.4M views",
    duration: "0:54",
    ytUrl: "https://youtube.com/shorts/OFLwptMBu-w?si=-TNkmeGXesCApWxS",
    videoId: "OFLwptMBu-w",
    // Beautiful programmatic chess grid representation instead of a boring raw color
    bgGradient: "from-blue-900/40 to-indigo-950/60",
    pawnPosition: "left-12 bottom-16",
    moveArrow: "M50,150 Q100,50 150,150"
  },
  {
    title: "Destroy Your Opponent With This Trap! 😈",
    views: "1.8M views",
    duration: "0:58",
    ytUrl: "https://youtube.com/shorts/nHNWEIU995k?si=TJcryJBQwSbq_4JD",
    videoId: "nHNWEIU995k",
    bgGradient: "from-purple-900/40 to-slate-950/60",
    pawnPosition: "right-12 top-16",
    moveArrow: "M150,50 L50,150"
  },
  {
    title: "Kasparov vs Topalov: Immortal Chess Game ♟️⚔️",
    views: "1.5M views",
    duration: "0:48",
    ytUrl: "https://youtube.com/shorts/dSDlXOkJBSo?si=2rIGcwY4PzojgDk1",
    videoId: "dSDlXOkJBSo",
    bgGradient: "from-cyan-900/40 to-blue-950/60",
    pawnPosition: "left-1/3 top-20",
    moveArrow: "M50,50 L150,150"
  },
  {
    title: "Bro Downloaded Stockfish Into His Brain! 👽",
    views: "1.1M views",
    duration: "0:52",
    ytUrl: "https://youtube.com/shorts/8f488vJwQ6M?si=XGgLz1nx6gfYwIMl",
    videoId: "8f488vJwQ6M",
    bgGradient: "from-indigo-900/40 to-violet-950/60",
    pawnPosition: "right-1/4 bottom-20",
    moveArrow: "M50,150 L150,50"
  },
  {
    title: "He Sacrificed Everything But Still Won! 😭🙏",
    views: "980K views",
    duration: "0:50",
    ytUrl: "https://youtube.com/shorts/4psTvUDx01s?si=YNWMYoup4b3kfoq4",
    videoId: "4psTvUDx01s",
    bgGradient: "from-blue-950/50 to-neutral-950/70",
    pawnPosition: "left-8 top-12",
    moveArrow: "M100,50 Q150,100 100,150"
  }
];

// Pre-configured pool of stunning viral Chess Shorts for simulation
const viralChessEditsPool = [
  {
    title: "The Most Legendary Queen Sacrifice in Chess History! 👑⚔️",
    videoId: "8Y7z7r0R-pA",
    duration: "0:58"
  },
  {
    title: "Magnus Carlsen Disrespects GM in 3 Moves! 💀⚡",
    videoId: "3e_jF9R5D-o",
    duration: "0:45"
  },
  {
    title: "Andrea Botez Brilliant Move Shocked Hikaru! 🤯👽",
    videoId: "g-eH0I_bQTo",
    duration: "0:52"
  },
  {
    title: "Hikaru Nakamura Speedrun is Faster Than Light! ⚡🏃",
    videoId: "_7q9b8I26g4",
    duration: "0:50"
  },
  {
    title: "Alexandra Botez Legendary Blunder Compilation 😭🙏",
    videoId: "YgV3_7U4rD0",
    duration: "0:57"
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [selectedShort, setSelectedShort] = useState<{ title: string; ytUrl: string; videoId: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [devCopied, setDevCopied] = useState(false);
  const [devDiscordCopied, setDevDiscordCopied] = useState(false);

  const [ytStats, setYtStats] = useState<YoutubeStats | null>(null);
  const [isYtLoading, setIsYtLoading] = useState(false);
  
  // Dynamic video state tracking our live streaming list
  const [videos, setVideos] = useState([...shortsList]);
  const [videoViews, setVideoViews] = useState<Record<string, string>>({});
  const [videoLikes, setVideoLikes] = useState<Record<string, string>>({});
  const [isVideosLoading, setIsVideosLoading] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("harshitsainiji1845@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyDevEmailToClipboard = () => {
    navigator.clipboard.writeText("rekhaji7172@gmail.com");
    setDevCopied(true);
    setTimeout(() => setDevCopied(false), 2000);
  };

  const copyDevDiscordToClipboard = () => {
    navigator.clipboard.writeText("YchessEditz");
    setDevDiscordCopied(true);
    setTimeout(() => setDevDiscordCopied(false), 2000);
  };

  const fetchYtStats = async () => {
    setIsYtLoading(true);
    try {
      const res = await fetch('/api/youtube/stats');
      if (res.ok) {
        const data = await res.json();
        // Avoid index.html fallback pages commonly served as 200 on SPA hosts like Netlify
        if (data && data.success) {
          setYtStats(data);
          return;
        }
      }

      // Client-side fallback if the API is unavailable (static hosting like Netlify/GitHub Pages)
      const apiKey = (import.meta as any).env.VITE_YOUTUBE_API_KEY;
      if (apiKey) {
        const handle = "@blundereditz-18";
        const url = `https://www.googleapis.com/youtube/v3/channels?forHandle=${encodeURIComponent(handle)}&part=snippet,statistics,brandingSettings&key=${apiKey}`;
        const ytRes = await fetch(url);
        if (ytRes.ok) {
          const result = await ytRes.json();
          if (result.items && result.items.length > 0) {
            const channel = result.items[0];
            const snippet = channel.snippet || {};
            const statistics = channel.statistics || {};
            const branding = channel.brandingSettings || {};
            setYtStats({
              success: true,
              subscriberCount: parseInt(statistics.subscriberCount || "125420", 10),
              videoCount: parseInt(statistics.videoCount || "48", 10),
              viewCount: parseInt(statistics.viewCount || "4800000", 10),
              title: snippet.title || "Blunderchess",
              handle: snippet.customUrl || "@blundereditz-18",
              avatarUrl: snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url || "https://lh3.googleusercontent.com/d/1qvAaYEqGBFhOPUzUUCk2-SpetacoVwxe",
              bannerUrl: branding.image?.bannerExternalUrl || "",
              publishedAt: snippet.publishedAt || "2025-10-26T00:00:00Z",
              description: snippet.description || "High-quality chess edits and cinematic chess storytelling. Merging chess tactics with art, sound design, and style.",
              lastSynced: new Date().toISOString(),
              fromCache: false
            });
          }
        }
      }
    } catch (err) {
      console.error("Failed to fetch live YouTube stats:", err);
    } finally {
      setIsYtLoading(false);
    }
  };

  const fetchLatestVideos = async () => {
    setIsVideosLoading(true);
    try {
      const res = await fetch('/api/youtube/latest-videos');
      if (res.ok) {
        const result = await res.json();
        if (result && result.success && result.data && result.data.length > 0) {
          setVideos(result.data);
          // Seed cached views from list
          const initialViews: Record<string, string> = {};
          result.data.forEach((v: any) => {
            if (v.views && v.views !== "Loading...") {
              initialViews[v.videoId] = v.views;
            }
          });
          setVideoViews(prev => ({ ...prev, ...initialViews }));
          return;
        }
      }

      // Client-side direct YouTube API fallback if server backend fails/404s (e.g. Netlify)
      const apiKey = (import.meta as any).env.VITE_YOUTUBE_API_KEY;
      if (apiKey) {
        const handle = "@blundereditz-18";
        const channelUrl = `https://www.googleapis.com/youtube/v3/channels?forHandle=${encodeURIComponent(handle)}&part=contentDetails&key=${apiKey}`;
        const channelRes = await fetch(channelUrl);
        if (channelRes.ok) {
          const channelResult = await channelRes.json();
          if (channelResult.items && channelResult.items.length > 0) {
            const uploadsPlaylistId = channelResult.items[0].contentDetails?.relatedPlaylists?.uploads;
            if (uploadsPlaylistId) {
              const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${uploadsPlaylistId}&part=snippet&maxResults=10&key=${apiKey}`;
              const playlistRes = await fetch(playlistUrl);
              if (playlistRes.ok) {
                const playlistResult = await playlistRes.json();
                if (playlistResult.items && Array.isArray(playlistResult.items)) {
                  const gradients = [
                    "from-violet-900/40 to-slate-950/60",
                    "from-cyan-900/40 to-blue-950/60",
                    "from-blue-900/40 to-indigo-950/60",
                    "from-indigo-900/40 to-violet-950/60",
                    "from-blue-950/50 to-neutral-950/70",
                    "from-rose-950/40 to-neutral-950/70"
                  ];
                  const pawnPositions = [
                    "left-12 bottom-16",
                    "right-12 top-16",
                    "left-1/3 top-20",
                    "right-1/4 bottom-20",
                    "left-8 top-12",
                    "right-8 bottom-12"
                  ];
                  const moveArrows = [
                    "M50,150 Q100,50 150,150",
                    "M150,50 L50,150",
                    "M50,50 L150,150",
                    "M50,150 L150,50",
                    "M100,50 Q150,100 100,150",
                    "M50,50 Q100,150 150,50"
                  ];

                  const apiVideos = playlistResult.items.map((item: any, idx: number) => {
                    const snippet = item.snippet || {};
                    const videoId = snippet.resourceId?.videoId;
                    const title = snippet.title || "";
                    const styleIdx = idx % gradients.length;
                    return {
                      title,
                      views: "Loading...",
                      duration: "0:59",
                      ytUrl: `https://youtube.com/shorts/${videoId}`,
                      videoId,
                      bgGradient: gradients[styleIdx],
                      pawnPosition: pawnPositions[styleIdx],
                      moveArrow: moveArrows[styleIdx]
                    };
                  });

                  if (apiVideos.length > 0) {
                    setVideos(apiVideos);
                  }
                }
              }
            }
          }
        }
      }
    } catch (err) {
      console.error("Failed to fetch live latest YouTube videos:", err);
    } finally {
      setIsVideosLoading(false);
    }
  };

  const fetchVideoViews = async (idsArray?: string[]) => {
    try {
      const queryIds = idsArray || videos.map(v => v.videoId);
      if (queryIds.length === 0) return;
      const res = await fetch(`/api/youtube/video-views?ids=${queryIds.join(',')}`);
      if (res.ok) {
        const result = await res.json();
        if (result && result.success && result.data) {
          const viewsMap: Record<string, string> = {};
          const likesMap: Record<string, string> = {};
          for (const [id, value] of Object.entries(result.data)) {
            viewsMap[id] = (value as any).views;
            likesMap[id] = (value as any).likes || "0 likes";
          }
          setVideoViews(prev => ({ ...prev, ...viewsMap }));
          setVideoLikes(prev => ({ ...prev, ...likesMap }));
          return;
        }
      }

      // Client-side direct YouTube API fallback if server backend fails/404s (e.g. Netlify)
      const apiKey = (import.meta as any).env.VITE_YOUTUBE_API_KEY;
      if (apiKey) {
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${queryIds.join(',')}&part=statistics&key=${apiKey}`;
        const ytRes = await fetch(url);
        if (ytRes.ok) {
          const result = await ytRes.json();
          if (result.items && Array.isArray(result.items)) {
            const viewsMap: Record<string, string> = {};
            const likesMap: Record<string, string> = {};

            const formatViews = (viewsNum: number): string => {
              if (viewsNum >= 1000000) return (viewsNum / 1000000).toFixed(1).replace(/\.0$/, '') + 'M views';
              if (viewsNum >= 1000) return (viewsNum / 1000).toFixed(1).replace(/\.0$/, '') + 'K views';
              return viewsNum + ' views';
            };

            const formatLikes = (likesNum: number): string => {
              if (likesNum >= 1000000) return (likesNum / 1000000).toFixed(1).replace(/\.0$/, '') + 'M likes';
              if (likesNum >= 1000) return (likesNum / 1000).toFixed(1).replace(/\.0$/, '') + 'K likes';
              return likesNum + ' likes';
            };

            for (const item of result.items) {
              const id = item.id;
              const viewsRaw = parseInt(item.statistics?.viewCount || "0", 10);
              const likesRaw = parseInt(item.statistics?.likeCount || "0", 10);
              if (viewsRaw > 0) {
                viewsMap[id] = formatViews(viewsRaw);
                likesMap[id] = likesRaw > 0 ? formatLikes(likesRaw) : formatLikes(Math.floor(viewsRaw * 0.05));
              }
            }
            setVideoViews(prev => ({ ...prev, ...viewsMap }));
            setVideoLikes(prev => ({ ...prev, ...likesMap }));
          }
        }
      }
    } catch (err) {
      console.error("Failed to fetch live YouTube video views:", err);
    }
  };

  useEffect(() => {
    fetchYtStats();
    fetchLatestVideos();
    const interval = setInterval(() => {
      fetchYtStats();
      fetchLatestVideos();
    }, 45000); // Poll every 45 seconds
    return () => clearInterval(interval);
  }, []);

  // Automatically fetch high-precision views and likes when the list changes
  useEffect(() => {
    if (videos.length > 0) {
      fetchVideoViews(videos.map(v => v.videoId));
    }
  }, [videos]);

  // Monitor scrolling to highlight correct navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'videos', 'stats', 'developer', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Horizontal scroller handlers
  const scrollShorts = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="min-h-screen bg-[#030303] text-white flex flex-col font-sans overflow-x-hidden relative selection:bg-blue-600/30 selection:text-white">
      
      {/* BACKGROUND CINEMATIC ARTWORK & NEBULA EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft glowing nodes throughout the page layout */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] rounded-full bg-blue-950/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-950/15 blur-[100px] pointer-events-none" />

        {/* Ambient Chessboard Infinite Grid Background Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        
        {/* Decorative giant faded chess pieces floating in back margins */}
        <div className="absolute top-[25%] left-4 opacity-[0.02] transform -rotate-12 text-white">
          <King size={320} glow={false} />
        </div>
        <div className="absolute top-[55%] right-4 opacity-[0.02] transform rotate-12 text-white">
          <Knight size={280} glow={false} />
        </div>
        <div className="absolute bottom-[15%] left-10 opacity-[0.02] transform rotate-6 text-white">
          <Rook size={240} glow={false} />
        </div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#030303]/75 backdrop-blur-xl border-b border-white/5 py-4 px-4 sm:px-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Brand text */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group focus:outline-none select-none text-left">
            <ChannelLogo size={38} glow={true} className="transition-transform duration-500 group-hover:rotate-12" />
            <span className="font-space font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-white via-neutral-100 to-blue-400 bg-clip-text text-transparent flex items-center gap-1.5">
              BlunderChess
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Me' },
              { id: 'videos', label: 'Videos' },
              { id: 'stats', label: 'Stats' },
              { id: 'developer', label: 'Developer' },
              { id: 'faqs', label: 'FAQs' },
              { id: 'contact', label: 'Contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 duration-200 outline-none hover:text-white ${
                  activeSection === link.id ? 'text-blue-400' : 'text-neutral-400'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span 
                    layoutId="activeNavIndicatorLine" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Subscribe Button */}
          <div className="hidden md:block">
            <a
              href="https://www.youtube.com/@blundereditz-18?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-space font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] select-none"
            >
              Subscribe
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-1 rounded-lg focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-[#070707] border-b border-white/5 py-6 px-6 flex flex-col gap-5 md:hidden shadow-2xl overflow-hidden"
            >
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'videos', label: 'Videos' },
                { id: 'stats', label: 'Stats' },
                { id: 'developer', label: 'Developer' },
                { id: 'faqs', label: 'FAQs' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-base font-medium py-1 transition-colors duration-200 outline-none ${
                    activeSection === link.id ? 'text-blue-400 font-semibold' : 'text-neutral-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-white/5 my-1" />
              <a
                href="https://www.youtube.com/@blundereditz-18?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-space font-semibold py-3 rounded-full text-center transition-all duration-300"
              >
                Subscribe
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[92vh] md:min-h-screen flex items-center justify-center py-10 md:py-16 overflow-hidden z-10">
        
        {/* Banner covers the entire background with high-fidelity gradients */}
        <div className="absolute inset-0 w-full h-full z-0">
          <ChannelBanner className="w-full h-full" />
          {/* Custom Dark Vignette Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-[#030303]/85" />
        </div>

        {/* Hero Content Layer */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-8 pt-10">
          
          {/* Left Text Column */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.15
                }
              }
            }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-semibold tracking-wide animate-pulse"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Chess Edits Coming
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space font-bold tracking-tight text-white leading-[1.08]"
              >
                Blunderchess <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-600 bg-clip-text text-transparent">
                  Edits Reloaded
                </span>
              </motion.h1>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                High-end chess edits blending tactical brilliance with cinematic visual art. Combining the style of Tal with modern editing.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <a
                href="https://www.youtube.com/@blundereditz-18?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-space font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transform hover:-translate-y-0.5 group gap-2"
              >
                Subscribe Now
                <Play size={16} className="fill-white group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollToSection('videos')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white font-space font-medium px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 gap-2"
              >
                Watch Edits
                <ArrowRight size={16} />
              </button>
            </motion.div>


          </motion.div>

          {/* Right Glass Card Column with channel logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
            className="w-full lg:w-1/2 flex items-center justify-center"
          >
            <div className="relative group select-none max-w-sm sm:max-w-md w-full">
              {/* Outer ambient blue glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              
              {/* High-end glassmorphic card container */}
              <div className="relative bg-[#0d0d12]/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-500 hover:border-blue-500/30">
                {/* Channel logo component in center */}
                <div className="relative mb-6">
                  <ChannelLogo size={240} className="transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-space font-bold text-white tracking-tight flex items-center justify-center gap-2">
                    BlunderChess <BlunderIcon size={20} />
                  </h3>
                  <p className="text-sm text-neutral-400 font-light max-w-xs leading-relaxed">
                    Tactical blunders and masterpiece sacrifices. Edited on mobile with passion.
                  </p>
                </div>

                {/* Subscribed verification text badge */}
                <div className="mt-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold tracking-wide uppercase">
                  <BrilliantIcon size={14} /> Active Chess Editor
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFFICIAL YOUTUBE PROFILE SECTION */}
      <section id="youtube-profile" className="py-20 md:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5 bg-[#050508]/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none select-none" />
        
        <div className="text-center space-y-3 mb-8">
          <span className="text-red-500 font-space font-semibold text-xs md:text-sm tracking-widest uppercase block">
            OFFICIAL PLATFORM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight text-white leading-tight">
            Official Channel Hub
          </h2>
          <div className="h-[2px] w-20 bg-red-500 rounded-full mx-auto shadow-[0_0_8px_#ef4444]" />
        </div>

        <YoutubeChannelCard 
          stats={ytStats} 
          isLoading={isYtLoading} 
          onRefresh={fetchYtStats} 
        />
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-20 md:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5 bg-[#050508]/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Column: Visual representation of profile (Channel logo in shield) with scroll entrance */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1"
            >
              <div className="relative group max-w-sm w-full aspect-square flex items-center justify-center">
                {/* Glowing neon halo behind image */}
                <div className="absolute w-[80%] h-[80%] rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 blur-3xl opacity-20 group-hover:opacity-30 transition duration-700"></div>
                
                {/* Elegant floating board with the channel logo */}
                <div className="relative bg-[#0d0d12]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex items-center justify-center shadow-2xl transition-all duration-500 hover:border-blue-500/30 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px]">
                  <ChannelLogo size={300} className="w-full h-full transform group-hover:rotate-6 transition-transform duration-700 ease-out" />
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text content - Exact unchanged text constraint */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-3">
                <span className="text-blue-500 font-space font-semibold text-xs md:text-sm tracking-widest uppercase block">
                  THE SOUL OF VIDEOS
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight text-white leading-tight">
                  About Me
                </h2>
                <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto lg:mx-0 shadow-[0_0_8px_#3b82f6]" />
              </div>

              {/* Exact unedited requested text boundaries */}
              <div className="text-neutral-300 text-base md:text-lg leading-relaxed font-light space-y-5">
                <p>
                  Hi, I'm BlunderChess.
                </p>
                <p>
                  I started this channel with one simple idea—to combine my passion for chess with my love for high-quality editing.
                </p>
                <p>
                  Here you'll find cinematic chess edits featuring legendary games, brilliant sacrifices, cold looks, and unforgettable moments from chess history.
                </p>
                <p>
                  My goal is to entertain fellow chess fans and build a community that enjoys the beauty of the game.
                </p>
                <p>
                  Inspired by the creative style of Mikhail Tal, I aim to make every video enjoyable, whether you're a beginner or a longtime chess player.
                </p>
              </div>

              {/* Website Made By credit block */}
              <div className="pt-4 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">Website Made By</p>
                  <p className="text-base font-space font-bold text-white mt-0.5 flex items-center gap-2">
                    <span className="text-blue-400 font-extrabold font-mono text-xs">-:-</span>
                    <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">YchessEditz</span>
                  </p>
                </div>
                <div className="text-center sm:text-right font-mono text-xs text-neutral-500 tracking-wider">
                  DESIGN & DEVELOPMENT
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* VIDEOS SECTION (YOUTUBE SHORTS HORIZONTAL LIST) */}
      <section id="videos" className="py-20 md:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 md:mb-14 gap-6 text-center sm:text-left">
            <div className="space-y-3">
              <span className="text-blue-500 font-space font-semibold text-xs md:text-sm tracking-widest uppercase block">
                LIVE YOUTUBE SHORTS FEED
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight text-white leading-tight">
                Latest Edits
              </h2>
              <div className="h-[2px] w-24 bg-blue-500 rounded-full mx-auto sm:mx-0 shadow-[0_0_8px_#3b82f6]" />
              <p className="text-sm sm:text-base text-neutral-400 max-w-xl mt-2 leading-relaxed">
                Stream dynamic high-octane chess compilations, legendary queen sacrifices, and hyper-edited matches sourced in real-time from our channel feed.
              </p>
            </div>

            {/* Scroll Navigation Handles for desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => scrollShorts('left')}
                className="inline-flex items-center justify-center size-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all duration-300 backdrop-blur-md outline-none focus:ring-1 focus:ring-blue-500"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollShorts('right')}
                className="inline-flex items-center justify-center size-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all duration-300 backdrop-blur-md outline-none focus:ring-1 focus:ring-blue-500"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* LATEST FEATURED VIDEO SPOTLIGHT */}
          <div className="mb-16 bg-gradient-to-br from-neutral-900/90 via-[#0d0d14]/95 to-blue-950/20 rounded-[28px] border border-white/10 p-6 md:p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Background glowing gradients */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Chessboard decorative pattern lines */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Side: Immersive Portrait Smartphone Style Playable Card */}
              <div className="lg:col-span-5 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedShort(videos[0])}
                  className="relative w-full max-w-[260px] aspect-[9/16] rounded-3xl overflow-hidden border-2 border-white/10 hover:border-red-500/50 shadow-2xl group text-left outline-none focus:ring-2 focus:ring-red-500"
                >
                  {/* YouTube Thumbnail Background */}
                  <img
                    src={`https://img.youtube.com/vi/${videos[0].videoId}/hqdefault.jpg`}
                    alt={videos[0].title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transform scale-102 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Deep overlay mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/50 group-hover:via-black/40 transition-all duration-300 z-10" />
                  
                  {/* Glowing custom chess vector arrow on thumbnail */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-500 z-10" viewBox="0 0 200 350">
                    <path d={videos[0].moveArrow || "M50,150 Q100,50 150,150"} stroke="#ef4444" strokeWidth="2.5" strokeDasharray="5 4" fill="none" />
                  </svg>

                  {/* Pulsing play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="size-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)] border border-red-400/40 transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Top Badge: PULSING NEW */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white font-space font-extrabold text-[9px] uppercase tracking-widest shadow-lg animate-pulse border border-red-500/30 z-20">
                    <span className="size-1.5 rounded-full bg-white animate-ping" />
                    Latest Release
                  </div>

                  {/* Bottom Duration indicator */}
                  <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded bg-black/70 text-white/95 font-mono text-[10px] border border-white/5 z-20">
                    {videos[0].duration}
                  </div>
                </motion.button>
              </div>

              {/* Right Side: Title Block, Real-time stats & Loop Controls */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest">
                    <Sparkles size={12} className="text-yellow-400" />
                    Spotlight Video
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-space font-bold text-white leading-tight tracking-tight">
                    {videos[0].title}
                  </h3>
                  <p className="text-sm text-neutral-400 max-w-xl leading-relaxed">
                    Check out the newest chess edit that has just uploaded! This spotlight card automatically shifts down to the horizontal grid below once a new masterpiece is deployed.
                  </p>
                </div>

                {/* Real-Time stats cards */}
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-1 shadow-inner backdrop-blur-md">
                    <span className="text-[10px] text-neutral-500 font-space font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Eye size={12} className="text-blue-400" />
                      Live Views
                    </span>
                    <span className="text-lg sm:text-xl font-space font-extrabold text-white tracking-tight">
                      {videoViews[videos[0].videoId] || "Fetching..."}
                    </span>
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-1 shadow-inner backdrop-blur-md">
                    <span className="text-[10px] text-neutral-500 font-space font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <ThumbsUp size={11} className="text-red-500" />
                      Live Likes
                    </span>
                    <span className="text-lg sm:text-xl font-space font-extrabold text-white tracking-tight">
                      {videoLikes[videos[0].videoId] || "Fetching..."}
                    </span>
                  </div>
                </div>

                {/* Manual stats refresh button */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={async () => {
                      setIsYtLoading(true);
                      setIsVideosLoading(true);
                      await Promise.all([
                        fetchYtStats(),
                        fetchLatestVideos()
                      ]);
                      setIsYtLoading(false);
                      setIsVideosLoading(false);
                    }}
                    disabled={isYtLoading || isVideosLoading}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:bg-white/5 disabled:opacity-50 border border-white/10 hover:border-blue-500/30 text-white font-space font-bold text-xs transition-all duration-300"
                  >
                    <RefreshCw size={13} className={`text-blue-400 ${isYtLoading || isVideosLoading ? 'animate-spin' : ''}`} />
                    {isYtLoading || isVideosLoading ? "Refreshing Stats..." : "Refresh Stats"}
                  </motion.button>
                  
                  {(isYtLoading || isVideosLoading) && (
                    <span className="text-[11px] text-neutral-500 font-mono animate-pulse">
                      Updating live views and likes...
                    </span>
                  )}
                </div>

                {/* Dynamic Pipeline Sync Status */}
                <div className="pt-4 border-t border-white/5 space-y-4 max-w-xl">
                  <div className="flex items-start gap-3.5 bg-white/[0.01] border border-white/5 rounded-2xl p-4 backdrop-blur-md">
                    <span className="relative flex size-2 mt-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs font-space font-extrabold text-white uppercase tracking-wider">
                        Live Auto-Sync Active
                      </h4>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        The spotlight section is directly integrated with `@blundereditz-18` channel. When a new video drops on YouTube, it automatically crowns this Spotlight section instantly, sliding preceding edits into the horizontal grid below!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Draggable/Scrollable Horizontal Grid Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {videos.slice(1).map((short, index) => (
              <motion.div 
                key={short.videoId}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4), type: "spring", stiffness: 100, damping: 15 }}
                className="flex-shrink-0 w-[78%] sm:w-[48%] md:w-[32%] lg:w-[23%] xl:w-[21%] snap-start snap-always"
              >
                <button
                  onClick={() => setSelectedShort(short)}
                  className="block text-left w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-500 bg-[#0d0d12] relative group focus:outline-none"
                >
                  {/* Actual YouTube Video Thumbnail as card background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${short.videoId}/hqdefault.jpg`}
                      alt={short.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-115 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Dark gradient shadow overlays to guarantee high readability of title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/60 group-hover:via-neutral-950/60 transition-all duration-300 z-10" />

                  {/* Chess board pattern grid line background overlay on thumbnail */}
                  <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none z-10" />
                  
                  {/* Glowing chess tactical line arrow vector */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-500 z-10" viewBox="0 0 200 350">
                    <path d={short.moveArrow} stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="5 4" fill="none" />
                  </svg>

                  {/* Card Content wrapper */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 select-none z-20 h-full">
                    
                    {/* Top card metadata info */}
                    <div className="flex items-center justify-between w-full">
                      <span className="flex items-center justify-center size-8 rounded-full bg-black/75 border border-white/10 text-blue-400 font-extrabold text-xs shadow-md backdrop-blur-sm">
                        !!
                      </span>
                      <span className="text-[9px] text-white/95 font-semibold px-2.5 py-1 rounded-full bg-red-600 border border-red-500/20 shadow-md uppercase tracking-wider">
                        Edits
                      </span>
                    </div>

                    {/* Central Play overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                      <div className="size-16 rounded-full bg-blue-600/95 flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.6)] border border-blue-400/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play size={24} className="text-white fill-white ml-1" />
                      </div>
                    </div>

                    {/* Card Title block */}
                    <div className="relative z-20 mt-auto space-y-2 text-left">
                      <h4 className="text-sm sm:text-base font-space font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors leading-snug line-clamp-2">
                        {short.title}
                      </h4>
                      <div className="flex items-center justify-between text-[11px] text-neutral-300 font-medium">
                        <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                          <Eye size={11} className="text-neutral-400" />
                          {videoViews[short.videoId] || short.views}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-black/50 border border-white/5 backdrop-blur-sm">{short.duration}</span>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Swipe indicator label visible ONLY on mobile */}
          <div className="sm:hidden text-center text-xs text-neutral-500 mt-4 animate-pulse flex items-center justify-center gap-1.5">
            Swipe left/right to view edits <ArrowRight size={12} />
          </div>

        </div>
      </section>

      {/* CHANNEL STATS SECTION */}
      <section id="stats" className="py-20 md:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5 bg-[#050508]/40">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-12 md:mb-16">
            <span className="text-blue-500 font-space font-semibold text-xs md:text-sm tracking-widest uppercase block">
              LIVE MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight text-white leading-tight">
              Channel Stats
            </h2>
            <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto shadow-[0_0_8px_#3b82f6]" />
          </div>

          {/* Stats Glass Cards Grid - Desktop: horizontal row. Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Stat Card 1: Subscribers */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0, type: "spring", stiffness: 100, damping: 15 }}
              className="group relative bg-[#0d0d12]/40 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-2xl p-5 sm:p-7 text-center transition-all duration-300 flex flex-col justify-between h-36 sm:h-44 shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Pawn size={22} />
                </span>
                <span className="text-[10px] text-teal-400 font-space font-semibold bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Live
                </span>
              </div>
              <div className="text-left mt-auto">
                {isYtLoading && !ytStats ? (
                  <div className="h-8 w-24 bg-white/10 animate-pulse rounded mb-1" />
                ) : (
                  <p className="text-2xl sm:text-4xl font-space font-bold text-white tracking-tight">
                    {ytStats ? <CountUp value={ytStats.subscriberCount} /> : "125,420"}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light uppercase tracking-wider">Subscribers</p>
              </div>
            </motion.div>

            {/* Stat Card 2: Videos */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
              className="group relative bg-[#0d0d12]/40 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-2xl p-5 sm:p-7 text-center transition-all duration-300 flex flex-col justify-between h-36 sm:h-44 shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Chessboard size={22} />
                </span>
                <span className="text-[10px] text-blue-400 font-space font-semibold bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Total
                </span>
              </div>
              <div className="text-left mt-auto">
                <p className="text-2xl sm:text-4xl font-space font-bold text-white tracking-tight">45+</p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light uppercase tracking-wider">Videos</p>
              </div>
            </motion.div>

            {/* Stat Card 3: Top Views */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
              className="group relative bg-[#0d0d12]/40 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-2xl p-5 sm:p-7 text-center transition-all duration-300 flex flex-col justify-between h-36 sm:h-44 shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Trophy size={22} />
                </span>
                <span className="text-[10px] text-teal-400 font-space font-semibold bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Peak
                </span>
              </div>
              <div className="text-left mt-auto">
                <p className="text-2xl sm:text-4xl font-space font-bold text-white tracking-tight">58K</p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light uppercase tracking-wider">Top Views</p>
              </div>
            </motion.div>

            {/* Stat Card 4: Channel Started */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
              className="group relative bg-[#0d0d12]/40 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-2xl p-5 sm:p-7 text-center transition-all duration-300 flex flex-col justify-between h-36 sm:h-44 shadow-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <ChessClock size={22} />
                </span>
                <span className="text-[10px] text-blue-400 font-space font-semibold bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Epoch
                </span>
              </div>
              <div className="text-left mt-auto">
                <p className="text-2xl sm:text-4xl font-space font-bold text-white tracking-tight">26 Oct</p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light uppercase tracking-wider">Started 2025</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DEVELOPER SECTION */}
      <section id="developer" className="py-20 md:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5 bg-[#050508]/10 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-blue-500/[0.02] blur-[150px] pointer-events-none select-none" />
        <div className="absolute right-10 top-10 size-72 rounded-full bg-violet-500/[0.02] blur-[120px] pointer-events-none select-none" />

        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-3 mb-16 md:mb-20">
            <span className="text-blue-500 font-space font-semibold text-xs md:text-sm tracking-widest uppercase block">
              THE CREATIVE MIND
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight text-white leading-tight">
              Meet the Developer
            </h2>
            <div className="h-[2px] w-24 bg-blue-500 rounded-full mx-auto shadow-[0_0_8px_#3b82f6]" />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
              Crafting immersive, lightning-fast digital experiences tailored for chess champions and content creators worldwide.
            </p>
          </div>

          {/* Premium Bio & Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
            className="group relative max-w-2xl mx-auto rounded-3xl p-6 sm:p-10 bg-[#07070b]/60 backdrop-blur-2xl border border-white/5 hover:border-blue-500/20 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 overflow-hidden"
          >
            {/* Glossy overlay sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/[0.02] to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Chess decor lines */}
            <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-white/[0.01] to-transparent pointer-events-none select-none" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10">
              
              {/* Left Column: Premium Interactive Avatar Wrapper */}
              <div className="flex-shrink-0 relative mx-auto">
                {/* Glowing ring effects */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-violet-600 opacity-40 group-hover:opacity-100 blur-[8px] transition-all duration-500 scale-95 group-hover:scale-100" />
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-60" />

                {/* Avatar frame */}
                <div className="relative size-28 sm:size-32 rounded-full overflow-hidden bg-[#0a0a0f] border-2 border-slate-950 flex items-center justify-center select-none">
                  <img
                    src="https://lh3.googleusercontent.com/d/1_Yrj_Zj41FgvDSh2nREl1aA5zW3BGmlZ=s300"
                    alt="Yuvraj Avatar"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to beautiful initial letter Y in high contrast if Drive fails
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = "absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-neutral-900 flex flex-col items-center justify-center font-space text-white";
                        fallbackDiv.innerHTML = `
                          <span class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 animate-pulse">Y</span>
                          <span class="text-[8px] tracking-widest text-blue-500/80 font-bold uppercase mt-1">Chess Editz</span>
                        `;
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                    className="object-cover w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Verification/Crown badge on avatar */}
                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full p-1.5 shadow-[0_4px_12px_rgba(59,130,246,0.5)] border border-slate-950 flex items-center justify-center">
                  <Terminal size={14} className="text-white" />
                </div>
              </div>

              {/* Right Column: Identity details */}
              <div className="flex-grow text-center md:text-left space-y-4">
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5">
                    <h3 className="text-2xl sm:text-3xl font-space font-extrabold text-white tracking-tight">
                      Yuvraj
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-[10px] font-space font-bold uppercase tracking-wider">
                      Lead Developer
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 font-mono flex items-center justify-center md:justify-start gap-1">
                    <Code size={12} className="text-neutral-500" /> Web Architect & Chess Enthusiast
                  </p>
                </div>

                {/* Elegant Bio */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-md italic">
                  "Ummm...... If you want a website contact me."
                </p>

                {/* Divider */}
                <div className="h-px bg-white/5 my-4" />

                {/* Contact grids */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {/* Discord Handle Button */}
                  <div className="flex items-center gap-3 bg-[#0a0a0f]/60 border border-white/5 p-3 rounded-2xl hover:border-indigo-500/20 transition-colors duration-300">
                    <div className="size-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <MessageSquare size={16} />
                    </div>
                    <div className="text-left flex-grow min-w-0">
                      <p className="text-[10px] uppercase font-space font-extrabold text-neutral-500 tracking-wider">Discord</p>
                      <p className="text-xs font-mono font-bold text-white truncate">YchessEditz</p>
                    </div>
                    <button
                      onClick={copyDevDiscordToClipboard}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors duration-200"
                      title="Copy Discord Tag"
                    >
                      {devDiscordCopied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    </button>
                  </div>

                  {/* Email Button */}
                  <div className="flex items-center gap-3 bg-[#0a0a0f]/60 border border-white/5 p-3 rounded-2xl hover:border-blue-500/20 transition-colors duration-300">
                    <div className="size-9 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                      <Mail size={16} />
                    </div>
                    <div className="text-left flex-grow min-w-0">
                      <p className="text-[10px] uppercase font-space font-extrabold text-neutral-500 tracking-wider">Inquiries</p>
                      <p className="text-xs font-mono font-bold text-white truncate">rekhaji7172@gmail.com</p>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        onClick={copyDevEmailToClipboard}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors duration-200"
                        title="Copy Email"
                      >
                        {devCopied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      </button>
                      <a
                        href="mailto:rekhaji7172@gmail.com"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors duration-200"
                        title="Send Email"
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional Drive image preview link button */}
                <div className="pt-2 text-center md:text-left">
                  <a
                    href="https://drive.google.com/file/d/1_Yrj_Zj41FgvDSh2nREl1aA5zW3BGmlZ/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] text-neutral-500 hover:text-blue-400 transition-colors duration-200 uppercase font-space tracking-widest"
                  >
                    View Original Profile Emblem <ExternalLink size={10} />
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs SECTION */}
      <section id="faqs" className="py-20 md:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-12 md:mb-16">
            <span className="text-blue-500 font-space font-semibold text-xs md:text-sm tracking-widest uppercase block">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto shadow-[0_0_8px_#3b82f6]" />
          </div>

          {/* Accordion List (Clean transitions and zero content modified) */}
          <div className="space-y-4">
            {faqsList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-white/5 hover:border-white/10 bg-[#0d0d12]/30 backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-md"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 select-none focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-2xl group transition-colors duration-200 hover:bg-white/5"
                  >
                    <span className="font-space font-semibold text-sm sm:text-base text-white pr-4 group-hover:text-blue-300 transition-colors">
                      {faq.q}
                    </span>
                    <span className={`text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  
                  {/* Dynamic Height collapse transition wrapper */}
                  <div 
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="p-5 sm:p-6 pt-0 border-t border-white/5 text-neutral-300 font-light leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 relative z-10 border-t border-white/5 bg-[#050508]/40 overflow-hidden">
        {/* Background decorative glow highlights */}
        <div className="absolute top-1/3 left-1/3 size-72 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none select-none" />
        <div className="absolute bottom-1/3 right-1/3 size-72 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none select-none" />

        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center space-y-3 mb-12 md:mb-16">
            <span className="text-blue-500 font-space font-semibold text-xs md:text-sm tracking-widest uppercase block">
              STAY CONNECTED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight text-white leading-tight">
              Get in Touch
            </h2>
            <div className="h-[2px] w-20 bg-blue-500 rounded-full mx-auto shadow-[0_0_8px_#3b82f6]" />
          </div>

          {/* Social cards with gorgeous hover effects (no standard buttons) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full"
          >
            
            {/* Card 1: YouTube */}
            <motion.a
              href="https://www.youtube.com/@blundereditz-18"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-[#07070b]/60 hover:bg-[#07070b]/80 backdrop-blur-xl border border-white/5 hover:border-red-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                {/* Red YouTube style logo */}
                <div className="size-11 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.104 2.126l-.008.105-.022.26-.01.104c-.048.52-.12 1.022-.221 1.402a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.287-.012-.105-.004c-.624-.034-1.378-.077-1.874-.156a2.007 2.007 0 0 1-1.415-1.42c-.101-.38-.172-.882-.22-1.402l-.01-.104-.022-.26-.008-.104c-.065-.914-.073-1.77-.074-1.957v-.075c.001-.194.01-1.108.104-2.126l.008-.105.022-.26.01-.104c.048-.52.12-1.022.22-1.402a2.007 2.007 0 0 1 1.415-1.42c1.16-.311 5.253-.342 6.18-.335h.092zm-1.355 3.962v6.087l4.137-3.043-4.137-3.044z" />
                  </svg>
                </div>
                <ExternalLink size={16} className="text-neutral-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="text-left space-y-2 mt-4">
                <p className="text-xs uppercase font-space font-semibold tracking-widest text-red-500">YouTube</p>
                <p className="text-lg font-space font-bold text-white tracking-tight">Official Channel</p>
                <p className="font-mono text-xs text-neutral-300">@blundereditz-18</p>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Join our subscribers for high-level chess shorts, dynamic chess animations, and cinematic edit playlists.
                </p>
              </div>
            </motion.a>

            {/* Card 2: Discord */}
            <motion.a
              href="https://discord.gg/blundereditz" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-[#07070b]/60 hover:bg-[#07070b]/80 backdrop-blur-xl border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                {/* Blue Discord style logo */}
                <div className="size-11 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.575-.406.842a12.19 12.19 0 0 0-3.658 0 8.257 8.257 0 0 0-.412-.842.051.051 0 0 0-.052-.025 13.013 13.013 0 0 0-3.257 1.011.05.05 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.015c.348-.475.654-.987.913-1.528.01-.021.005-.047-.015-.058a8.522 8.527 0 0 1-1.242-.593.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.054.054 0 0 1 .057-.008c2.611 1.196 5.454 1.196 8.013 0a.054.054 0 0 1 .058.007c.08.066.164.132.248.195a.05.05 0 0 1-.004.083 8.56 8.56 0 0 1-1.242.593.05.05 0 0 0-.015.058c.27.54.569 1.05.913 1.528a.05.05 0 0 0 .056.015 13.243 13.243 0 0 0 3.995-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.19zM8.54 14.89a2.72 2.72 0 0 1-2.91-2.9 2.7 2.7 0 0 1 2.91-2.9 2.72 2.72 0 0 1 2.91 2.9 2.7 2.7 0 0 1-2.91 2.9zm4.35 0a2.72 2.72 0 0 1-2.91-2.9 2.7 2.7 0 0 1 2.91-2.9 2.72 2.72 0 0 1 2.91 2.9 2.7 2.7 0 0 1-2.91 2.9z" />
                  </svg>
                </div>
                <ExternalLink size={16} className="text-neutral-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="text-left space-y-2 mt-4">
                <p className="text-xs uppercase font-space font-semibold tracking-widest text-indigo-400">Community</p>
                <p className="text-lg font-space font-bold text-white tracking-tight">Chess Arena Discord</p>
                <p className="font-mono text-xs text-neutral-300">BlunderChess Arena</p>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Discuss strategic lines, request custom video reviews, and suggest historic board matches with other chess lovers.
                </p>
              </div>
            </motion.a>

            {/* Card 3: Business Inquiries (Email) */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-[#07070b]/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[220px] shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                {/* Glowing Blue/Teal icon container */}
                <div className="size-11 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <Mail size={22} className="text-blue-400" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all duration-200 border border-white/5 hover:border-white/10 relative"
                    title="Copy Email Address"
                  >
                    {copied ? <Check size={14} className="text-emerald-400 animate-pulse" /> : <Copy size={14} />}
                  </button>
                  <a href="mailto:harshitsainiji1845@gmail.com" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all duration-200 border border-white/5 hover:border-white/10">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              
              <div className="text-left space-y-2 mt-4">
                <p className="text-xs uppercase font-space font-semibold tracking-widest text-blue-400">Collaborations</p>
                <p className="text-lg font-space font-bold text-white tracking-tight font-display">Business Inquiries</p>
                
                <div className="flex flex-col gap-1">
                  <button 
                    onClick={copyEmailToClipboard}
                    className="font-mono text-xs text-neutral-300 hover:text-blue-400 break-all transition-colors duration-200 text-left relative focus:outline-none flex items-center gap-1.5 group/email"
                  >
                    harshitsainiji1845@gmail.com
                    {copied && (
                      <span className="text-[10px] font-space text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
                
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  For brand deals, video sponsorships, editing projects, or general requests.
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#030303] text-neutral-500 pt-16 pb-12 border-t border-white/5 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
            {/* Branding */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-xs select-none">
              <button onClick={() => scrollToSection('home')} className="flex items-center gap-2.5 font-space font-bold text-lg text-white outline-none">
                <ChannelLogo size={32} />
                BlunderChess
              </button>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Premium cinematic chess edits that preserve legendary, brilliant sacrifices, and blunder moments of chess history.
              </p>
            </div>

            {/* Links Block */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-xs font-medium uppercase tracking-wider">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'videos', label: 'Videos' },
                { id: 'stats', label: 'Stats' },
                { id: 'developer', label: 'Developer' },
                { id: 'faqs', label: 'FAQs' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-white transition-colors duration-200 outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.youtube.com/@blundereditz-18"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/5 hover:border-red-500/30 hover:bg-white/10 text-neutral-400 hover:text-red-500 transition-all shadow"
                aria-label="YouTube channel link"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://discord.gg/chess"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-white/10 text-neutral-400 hover:text-blue-400 transition-all shadow"
                aria-label="Discord server link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.575-.406.842a12.19 12.19 0 0 0-3.658 0 8.257 8.257 0 0 0-.412-.842.051.051 0 0 0-.052-.025 13.013 13.013 0 0 0-3.257 1.011.05.05 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.015c.348-.475.654-.987.913-1.528.01-.021.005-.047-.015-.058a8.522 8.527 0 0 1-1.242-.593.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.054.054 0 0 1 .057-.008c2.611 1.196 5.454 1.196 8.013 0a.054.054 0 0 1 .058.007c.08.066.164.132.248.195a.05.05 0 0 1-.004.083 8.56 8.56 0 0 1-1.242.593.05.05 0 0 0-.015.058c.27.54.569 1.05.913 1.528a.05.05 0 0 0 .056.015 13.243 13.243 0 0 0 3.995-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.19zM8.54 14.89a2.72 2.72 0 0 1-2.91-2.9 2.7 2.7 0 0 1 2.91-2.9 2.72 2.72 0 0 1 2.91 2.9 2.7 2.7 0 0 1-2.91 2.9zm4.35 0a2.72 2.72 0 0 1-2.91-2.9 2.7 2.7 0 0 1 2.91-2.9 2.72 2.72 0 0 1 2.91 2.9 2.7 2.7 0 0 1-2.91 2.9z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="h-px bg-white/5" />

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-600 font-light select-none">
            <p>© {new Date().getFullYear()} BlunderChess. All rights reserved.</p>
            <p className="flex items-center gap-1 uppercase tracking-widest text-[9px] text-neutral-500 font-medium">
              Made with <Play size={8} className="fill-blue-500 text-blue-500" /> for the chess community
            </p>
          </div>

        </div>
      </footer>

      {/* Dynamic Animated YouTube Shorts Popup Video Player */}
      <AnimatePresence>
        {selectedShort && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Overlay with Ambient Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedShort(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center overflow-hidden"
            >
              {/* Dynamic pulsing glowing orbs in backdrop */}
              <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-blue-500/10 blur-[150px] animate-pulse pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 size-96 rounded-full bg-red-500/10 blur-[150px] animate-pulse pointer-events-none" />
            </motion.div>

            {/* Video Player Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-[360px] bg-[#09090d] border border-white/10 rounded-[32px] p-5 shadow-[0_0_60px_rgba(59,130,246,0.3)] flex flex-col items-center gap-4 z-10 overflow-hidden"
            >
              {/* Subtle glass reflection sheet on top of player */}
              <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              
              {/* Top Bar with Title */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full flex items-center justify-between border-b border-white/5 pb-3.5 relative z-10"
              >
                <div className="flex items-center gap-2 max-w-[85%]">
                  <span className="flex items-center justify-center px-2 py-0.5 rounded-md bg-red-600/20 text-red-500 font-extrabold text-[10px] uppercase tracking-widest select-none animate-pulse">
                    Live Edit
                  </span>
                  <h4 className="text-sm font-space font-bold text-white/95 truncate">
                    {selectedShort.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedShort(null)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-red-500/20 text-neutral-400 hover:text-red-400 transition-all duration-300 border border-white/5"
                  aria-label="Close"
                >
                  <X size={15} />
                </button>
              </motion.div>

              {/* High-Fidelity Smartphone-Bezel Iframe container with neon shadow ring */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border-2 border-white/10 bg-black shadow-[0_0_25px_rgba(0,0,0,0.8)] group"
              >
                {/* Embedded Shorts Player with auto-play parameters */}
                <iframe
                  src={`https://www.youtube.com/embed/${selectedShort.videoId}?autoplay=1&mute=0&rel=0&playsinline=1&modestbranding=1&loop=1&playlist=${selectedShort.videoId}`}
                  title={selectedShort.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </motion.div>

              {/* Action Buttons Panel */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full flex items-center gap-3 mt-1 relative z-10"
              >
                {/* Watch on YouTube Button */}
                <a
                  href={selectedShort.ytUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-[5] text-center px-4 py-3 rounded-2xl border border-white/10 hover:border-red-500/30 text-neutral-300 hover:text-white font-space font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:bg-red-600/10 shadow-sm"
                >
                  Watch on YouTube
                  <ExternalLink size={14} className="text-red-500" />
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedShort(null)}
                  className="flex-[4] text-center px-4 py-3 rounded-2xl bg-neutral-900 hover:bg-neutral-800 text-white border border-white/5 hover:border-white/10 font-space font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-lg"
                >
                  Go Back
                </button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
