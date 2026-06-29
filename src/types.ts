export interface ChessIconProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export interface VideoShort {
  id: string;
  title: string;
  views: string;
  duration: string;
  thumbnailUrl: string;
  youtubeUrl: string;
}

export interface ChannelStat {
  label: string;
  value: string;
  description: string;
  iconName: 'pawn' | 'trophy' | 'chess-clock' | 'chessboard';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialCard {
  platform: 'YouTube' | 'Discord' | 'Email';
  username: string;
  url: string;
  description: string;
}

export interface YoutubeStats {
  success: boolean;
  subscriberCount: number;
  videoCount: number;
  viewCount: number;
  title: string;
  handle: string;
  avatarUrl: string;
  bannerUrl: string;
  publishedAt: string;
  description: string;
  lastSynced: string;
  fromCache?: boolean;
}
