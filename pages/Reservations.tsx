import React, { useState } from 'react';
import { ReservationFormData } from '../types';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Reservation:', formData);
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center container mx-auto px-4">
        <div className="bg-green-50 p-8 rounded-lg shadow border border-green-200 text-center max-w-lg">
          <h2 className="text-3xl font-serif font-bold text-green-800 mb-4">Prenotazione Ricevuta!</h2>
          <p className="text-green-700 mb-6">
            Grazie {formData.name}. Abbiamo ricevuto la tua richiesta per il {formData.date} alle {formData.time}.
            Riceverai una conferma via email a breve.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({ ...formData, name: '', email: '', phone: '', notes: '' });
            }}
            className="text-green-800 font-bold underline hover:text-green-900"
          >
            Effettua un'altra prenotazione
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-stone-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Prenota un Tavolo</h1>
          <p className="text-stone-600">Assicurati il tuo posto a Lo Stallo. Per gruppi numerosi, chiamaci direttamente.</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-stone-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-bold text-stone-700">Nome Completo</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                  placeholder="Mario Rossi"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-bold text-stone-700">Telefono</label>
                <input
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                  placeholder="+39 333 1234567"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="email" className="block text-sm font-bold text-stone-700">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                  placeholder="mario@example.com"
                />
              </div>

              {/* Reservation Details */}
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-bold text-stone-700">Data</label>
                <input
                  required
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="time" className="block text-sm font-bold text-stone-700">Orario</label>
                <select
                  required
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                >
                  <option value="">Seleziona orario</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="guests" className="block text-sm font-bold text-stone-700">Numero di Persone</label>
                <input
                  required
                  type="number"
                  min="1"
                  max="20"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="block text-sm font-bold text-stone-700">Note Aggiuntive</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition"
                placeholder="Allergie, seggiolone, tavolo all'aperto..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-600 text-stone-900 py-4 rounded-md font-bold text-lg hover:bg-brand-500 transition-colors shadow-md"
            >
              Conferma Prenotazione
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-stone-500">
            <p>Oppure prenota telefonicamente chiamando il <strong>+39 055 123 4567</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;