import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { MOCK_EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Eventi & Serate</h1>
          <p className="text-stone-600">Non solo birra: musica live, serate a tema e divertimento.</p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {MOCK_EVENTS.map((event, index) => (
            <div 
              key={event.id} 
              className={`flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg border border-stone-100 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                 <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
                {event.isRecurring && (
                  <div className="absolute top-4 left-4 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase">
                    Settimanale
                  </div>
                )}
              </div>
              
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-4">{event.title}</h2>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-stone-500 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-600" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <p className="text-stone-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-auto">
                  <Link 
                    to="/prenotazioni"
                    className="inline-block px-6 py-2 border-2 border-stone-900 text-stone-900 font-bold rounded hover:bg-stone-900 hover:text-white transition-all"
                  >
                    Prenota per questo evento
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;