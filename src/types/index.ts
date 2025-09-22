export interface Comment {
  id?: number;
  name: string;
  text: string;
  time?: string;
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