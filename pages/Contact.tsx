import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Contatti</h1>
          <p className="text-stone-600">Vieni a trovarci o scrivici per qualsiasi informazione.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-lg shadow-md border border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Dove Siamo</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Indirizzo</h3>
                    <p className="text-stone-600">Loc. Il Tasso, 55<br/>52028 Terranuova Bracciolini (AR)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Telefono</h3>
                    <p className="text-stone-600">+39 055 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900">Email</h3>
                    <p className="text-stone-600">info@lostallo.it</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">Orari di Apertura</h2>
              <ul className="space-y-3">
                <li className="flex justify-between items-center pb-2 border-b border-stone-100">
                  <span className="font-medium text-stone-600">Lunedì - Mercoledì</span>
                  <span className="font-bold text-stone-900">18:00 - 01:00</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-stone-100">
                  <span className="font-medium text-stone-600">Giovedì - Sabato</span>
                  <span className="font-bold text-stone-900">18:00 - 02:00</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-stone-100">
                  <span className="font-medium text-stone-600">Domenica</span>
                  <span className="font-bold text-stone-900">12:00 - 01:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Side (Simulated Iframe) */}
          <div className="h-full min-h-[400px] bg-stone-200 rounded-xl overflow-hidden shadow-lg relative">
             {/* Placeholder for Google Maps Iframe. 
                 Using an image for visual aesthetic in this demo context, 
                 but a real iframe would go here. */}
             <img 
              src="https://picsum.photos/id/1047/800/800" 
              alt="Mappa Locazione" 
              className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-stone-900 px-6 py-3 rounded shadow-lg font-bold hover:bg-brand-500 transition pointer-events-auto flex items-center gap-2"
                >
                  <MapPin className="h-5 w-5" />
                  Apri in Google Maps
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;