import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 border-t border-stone-900">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About */}
        <div>
          <h3 className="text-white font-serif text-xl font-bold mb-6">LO STALLO</h3>
          <p className="mb-6 leading-relaxed">
            Birreria artigianale nel cuore del Valdarno. 
            Passione per la birra, amore per il buon cibo e convivialità 
            sono gli ingredienti della nostra storia.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-brand-600 hover:text-stone-900 transition-all">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-stone-800 p-2 rounded-full hover:bg-brand-600 hover:text-stone-900 transition-all">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-white font-serif text-lg font-bold mb-6">Contatti</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-1" />
              <span>Loc. Il Tasso, Terranuova Bracciolini (AR)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-500 shrink-0" />
              <span>+39 055 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand-500 shrink-0" />
              <span>info@lostallo.it</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-white font-serif text-lg font-bold mb-6">Orari</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center border-b border-stone-800 pb-2">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Lun - Mer</span>
              <span className="text-stone-200">18:00 - 01:00</span>
            </li>
            <li className="flex justify-between items-center border-b border-stone-800 pb-2">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Gio - Sab</span>
              <span className="text-stone-200">18:00 - 02:00</span>
            </li>
            <li className="flex justify-between items-center border-b border-stone-800 pb-2">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Domenica</span>
              <span className="text-stone-200">12:00 - 01:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-900 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Birreria Lo Stallo. Tutti i diritti riservati. P.IVA 12345678901</p>
        <div className="mt-2 space-x-4">
          <Link to="#" className="hover:text-brand-500">Privacy Policy</Link>
          <Link to="#" className="hover:text-brand-500">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;