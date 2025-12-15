import React, { useState } from 'react';
import { MOCK_MENU } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'beer' | 'food' | 'mexican'>('beer');

  const filteredItems = MOCK_MENU.filter(item => item.category === activeTab);

  return (
    <div className="pt-24 pb-20 bg-stone-50 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Il Nostro Menu</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Dalle nostre spine ai piatti della cucina: un percorso di sapori autentici.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-2 md:space-x-8 overflow-x-auto pb-4 md:pb-0">
          <button
            onClick={() => setActiveTab('beer')}
            className={`px-6 py-3 rounded-full text-lg font-bold transition-all whitespace-nowrap ${
              activeTab === 'beer' 
                ? 'bg-brand-600 text-white shadow-lg scale-105' 
                : 'bg-white text-stone-500 hover:bg-stone-200'
            }`}
          >
            Birre Artigianali
          </button>
          <button
            onClick={() => setActiveTab('food')}
            className={`px-6 py-3 rounded-full text-lg font-bold transition-all whitespace-nowrap ${
              activeTab === 'food' 
                ? 'bg-brand-600 text-white shadow-lg scale-105' 
                : 'bg-white text-stone-500 hover:bg-stone-200'
            }`}
          >
            Panini & Spizzichini
          </button>
          <button
            onClick={() => setActiveTab('mexican')}
            className={`px-6 py-3 rounded-full text-lg font-bold transition-all whitespace-nowrap ${
              activeTab === 'mexican' 
                ? 'bg-red-600 text-white shadow-lg scale-105' 
                : 'bg-white text-stone-500 hover:bg-stone-200'
            }`}
          >
            Serata Messicana
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-stone-900">{item.name}</h3>
                  <span className="text-brand-600 font-bold text-lg">{item.price}</span>
                </div>
                
                {item.category === 'beer' && item.details && (
                  <div className="flex gap-3 mb-3 text-xs font-medium text-stone-400 uppercase tracking-wide">
                    {item.details.style && <span className="bg-stone-100 px-2 py-1 rounded">{item.details.style}</span>}
                    {item.details.abv && <span className="bg-stone-100 px-2 py-1 rounded">ABV: {item.details.abv}</span>}
                  </div>
                )}

                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note for Mexican Night */}
        {activeTab === 'mexican' && (
          <div className="mt-12 bg-red-50 border border-red-100 p-6 rounded-lg text-center">
            <h4 className="text-red-800 font-bold text-lg mb-2">Solo il Martedì!</h4>
            <p className="text-red-700">Il menu messicano è disponibile esclusivamente durante la nostra serata a tema settimanale.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;