import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Beer, Calendar, Users } from 'lucide-react';
import { MOCK_EVENTS } from '../constants';

const Home: React.FC = () => {
  const featuredEvent = MOCK_EVENTS[0]; // Serata Messicana

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://picsum.photos/id/447/1920/1080")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/60 to-stone-900"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="block text-brand-500 font-bold tracking-[0.2em] uppercase mb-4 animate-slide-up">
            Dal 2015 a Terranuova
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-slide-up animation-delay-100">
            Passione Artigianale <br />
            <span className="text-brand-500">Spirito Conviviale</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light animate-slide-up animation-delay-200">
            Vieni a scoprire le nostre birre prodotte in loco e la nostra cucina genuina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
            <Link 
              to="/menu" 
              className="px-8 py-4 bg-brand-600 text-stone-900 rounded-md font-bold text-lg hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2"
            >
              Scopri il Menu <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/prenotazioni" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-bold text-lg hover:bg-white hover:text-stone-900 transition-all flex items-center justify-center"
            >
              Prenota Tavolo
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / Mission */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-8 relative inline-block">
            Benvenuti a Lo Stallo
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-500 mt-2"></span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-12">
            Lo Stallo nasce dalla volontà di recuperare i ritmi lenti e i sapori veri. 
            Siamo più di una birreria: siamo un punto di incontro per la comunità del Valdarno, 
            dove la birra artigianale incontra una cucina sincera in un ambiente rustico e accogliente.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <Beer className="h-12 w-12 text-brand-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Birre Artigianali</h3>
              <p className="text-stone-500">Produciamo le nostre birre con metodi tradizionali e ingredienti selezionati.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <Users className="h-12 w-12 text-brand-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Atmosfera</h3>
              <p className="text-stone-500">Un ambiente caldo dove sentirsi a casa, tra legno, musica e amici.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
              <Calendar className="h-12 w-12 text-brand-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Eventi Unici</h3>
              <p className="text-stone-500">Dalle serate a tema alle degustazioni, c'è sempre qualcosa di speciale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event Banner */}
      <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
            <img 
              src={featuredEvent.image} 
              alt={featuredEvent.title} 
              className="rounded-lg shadow-2xl border-4 border-stone-800 rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover h-[400px]"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-brand-500 font-bold uppercase tracking-wider">Evento della settimana</span>
            <h2 className="text-4xl font-serif font-bold mt-2 mb-6">{featuredEvent.title}</h2>
            <div className="flex items-center gap-2 text-xl text-stone-300 mb-6">
              <Calendar className="h-6 w-6 text-brand-500" />
              <span>{featuredEvent.date}</span>
            </div>
            <p className="text-stone-400 text-lg mb-8">
              {featuredEvent.description} Non perdere l'occasione di gustare i nostri special Tacos e Margarita!
            </p>
            <Link 
              to="/eventi" 
              className="inline-block px-8 py-3 bg-brand-600 text-stone-900 rounded font-bold hover:bg-brand-500 transition-colors"
            >
              Scopri Tutti gli Eventi
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-brand-500 text-stone-900 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-4">Resta Aggiornato</h2>
          <p className="mb-8 font-medium text-stone-800">
            Iscriviti alla nostra newsletter per ricevere novità sulle nuove birre e inviti agli eventi esclusivi.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="La tua email..." 
              className="flex-1 px-4 py-3 rounded border-2 border-stone-800 focus:outline-none focus:border-white bg-white/90"
            />
            <button className="px-8 py-3 bg-stone-900 text-white font-bold rounded hover:bg-stone-800 transition-colors">
              Iscriviti
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;