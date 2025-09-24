export interface Comment {
  id?: number;
  name: string;
  text: string;
  time?: string;
  sentiment?: 'positive' | 'negative';
}

export interface Scheme {
  id: number;
  title: string;
  image: string;
  description: string;
  comments: Comment[];
}

export interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  description: string;
}

export type ViewMode = 'sender' | 'receiver';

export interface SentimentData {
  positive: number;
  negative: number;
}