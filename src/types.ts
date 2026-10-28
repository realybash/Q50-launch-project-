export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  verified: boolean;
  stars: number;
  joinedDaysAgo: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AdScript {
  id: string;
  platform: 'Facebook / Instagram' | 'WhatsApp Broadcast' | 'TikTok / Short Video';
  title: string;
  script: string;
  targetAudience: string;
}

export interface LiveNotification {
  id: string;
  name: string;
  area: string;
  timeAgo: string;
  slotNumber: number;
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}
