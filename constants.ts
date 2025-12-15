import { MenuItem, EventItem, TeamMember } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Chi Siamo', path: '/chi-siamo' },
  { name: 'Menu', path: '/menu' },
  { name: 'Eventi', path: '/eventi' },
  { name: 'Galleria', path: '/galleria' },
  { name: 'Contatti', path: '/contatti' },
];

export const MOCK_MENU: MenuItem[] = [
  // Beers
  {
    id: 'b1',
    name: 'La Bionda del Tasso',
    description: 'Una Lager fresca e beverina, note di cereale e miele.',
    price: '€5.00',
    category: 'beer',
    image: 'https://picsum.photos/id/225/400/400',
    details: { abv: '4.8%', style: 'Helles Lager' }
  },
  {
    id: 'b2',
    name: 'Rossa Furiosa',
    description: 'Amber Ale con sentori di caramello e frutta secca.',
    price: '€6.00',
    category: 'beer',
    image: 'https://picsum.photos/id/431/400/400',
    details: { abv: '5.5%', style: 'Amber Ale' }
  },
  {
    id: 'b3',
    name: 'IPA Lo Stallo',
    description: 'Esplosione di luppoli americani, note agrumate e tropicali.',
    price: '€6.50',
    category: 'beer',
    image: 'https://picsum.photos/id/500/400/400',
    details: { abv: '6.2%', style: 'West Coast IPA' }
  },
  // Food
  {
    id: 'f1',
    name: 'Il Classico',
    description: 'Hamburger di Chianina 200g, lattuga, pomodoro, cipolla caramellata, salsa stallo.',
    price: '€12.00',
    category: 'food',
    image: 'https://picsum.photos/id/835/400/400'
  },
  {
    id: 'f2',
    name: 'Tagliere Toscano',
    description: 'Selezione di salumi e formaggi locali serviti con miele e crostini.',
    price: '€15.00',
    category: 'food',
    image: 'https://picsum.photos/id/693/400/400'
  },
  {
    id: 'f3',
    name: 'Patate Fritte Rustiche',
    description: 'Patate fresche tagliate a mano con buccia, doppia frittura.',
    price: '€4.50',
    category: 'food',
    image: 'https://picsum.photos/id/491/400/400'
  },
  // Mexican
  {
    id: 'm1',
    name: 'Tacos al Pastor',
    description: 'Tre tacos di mais morbidi con maiale marinato, ananas e coriandolo.',
    price: '€10.00',
    category: 'mexican',
    image: 'https://picsum.photos/id/40/400/400'
  },
  {
    id: 'm2',
    name: 'Burrito Gigante',
    description: 'Riso, fagioli neri, manzo speziato, guacamole e panna acida.',
    price: '€11.00',
    category: 'mexican',
    image: 'https://picsum.photos/id/56/400/400'
  },
  {
    id: 'm3',
    name: 'Nachos Supreme',
    description: 'Totopos con formaggio fuso, jalapeños, pico de gallo e guacamole.',
    price: '€8.00',
    category: 'mexican',
    image: 'https://picsum.photos/id/41/400/400'
  }
];

export const MOCK_EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Serata Messicana',
    date: 'Ogni Martedì',
    time: '19:30 - 23:00',
    description: 'Tacos, Tequila e musica latina! Un viaggio culinario in Messico senza lasciare il Valdarno.',
    image: 'https://picsum.photos/id/76/800/400',
    isRecurring: true
  },
  {
    id: 'e2',
    title: 'Live Music: The Blues Brothers Tribute',
    date: '2023-11-15',
    time: '21:30',
    description: 'Una serata all\'insegna del Rhythm & Blues con la migliore tribute band della zona.',
    image: 'https://picsum.photos/id/452/800/400',
    isRecurring: false
  },
  {
    id: 'e3',
    title: 'Degustazione Birre Invernali',
    date: '2023-12-01',
    time: '18:00',
    description: 'Presentazione delle nuove birre stagionali con abbinamento gastronomico.',
    image: 'https://picsum.photos/id/447/800/400',
    isRecurring: false
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Marco Rossi',
    role: 'Mastro Birraio',
    bio: 'Passione per il luppolo nata nel garage di casa, ora crea le ricette uniche de Lo Stallo.',
    image: 'https://picsum.photos/id/64/300/300'
  },
  {
    name: 'Giulia Bianchi',
    role: 'Chef',
    bio: 'Esperta di cucina toscana rivisitata e innamorata dei sapori speziati del mondo.',
    image: 'https://picsum.photos/id/65/300/300'
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/id/225/600/400',
  'https://picsum.photos/id/431/600/400',
  'https://picsum.photos/id/75/600/400',
  'https://picsum.photos/id/447/600/400',
  'https://picsum.photos/id/1060/600/400',
  'https://picsum.photos/id/835/600/400',
];