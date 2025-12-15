import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Chi Siamo</h1>
          <p className="text-xl text-stone-600">
            Due amici, una vecchia stalla ristrutturata e il sogno di portare la cultura della birra artigianale a Terranuova.
          </p>
        </div>

        {/* Story Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/id/431/800/600" 
              alt="Interno Birreria" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-stone-800">La Nostra Storia</h2>
            <p className="text-stone-600 leading-relaxed">
              Tutto è iniziato nel 2015, quando abbiamo deciso di trasformare un vecchio locale adibito a stalla nel cuore del Tasso in un luogo di ritrovo. 
              Volevamo mantenere l'anima rustica dell'edificio: travi a vista, mattoni rossi e tavoli in legno massiccio.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Lo Stallo non è solo un nome, è un omaggio alle origini del luogo. Oggi è un punto di riferimento per chi cerca qualità senza formalismi.
            </p>
          </div>
        </div>

        {/* Philosophy - Beer Focus */}
        <div className="bg-stone-100 rounded-2xl p-8 md:p-16 mb-20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/id/225/800/600" 
                alt="Produzione Birra" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-stone-800">Filosofia Produttiva</h2>
              <p className="text-stone-600 leading-relaxed">
                Produciamo birra perché la amiamo. Il nostro impianto a vista permette ai clienti di vedere dove avviene la magia.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-sm shrink-0">1</span>
                  <span className="text-stone-700"><strong>Ingredienti Naturali:</strong> Solo acqua, malto, luppolo e lievito. Nessun additivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-sm shrink-0">2</span>
                  <span className="text-stone-700"><strong>Tempi Lunghi:</strong> Rispettiamo i tempi naturali di fermentazione e maturazione.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-sm shrink-0">3</span>
                  <span className="text-stone-700"><strong>Filiera Corta:</strong> Collaboriamo con fornitori locali per materie prime fresche.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-stone-800 text-center mb-12">Il Nostro Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md border border-stone-200 flex flex-col sm:flex-row">
                <img src={member.image} alt={member.name} className="sm:w-1/3 object-cover h-64 sm:h-auto" />
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-xl text-stone-900">{member.name}</h3>
                  <span className="text-brand-600 font-medium text-sm uppercase mb-3 block">{member.role}</span>
                  <p className="text-stone-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;