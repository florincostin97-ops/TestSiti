export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'beer' | 'food' | 'mexican';
  image: string;
  details?: {
    abv?: string;
    style?: string;
    allergens?: string[];
  };
}

export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO date string or recurring description
  time: string;
  description: string;
  image: string;
  isRecurring?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}