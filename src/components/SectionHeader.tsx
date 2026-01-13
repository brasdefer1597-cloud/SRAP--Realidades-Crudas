import React from 'react';

const SectionHeader: React.FC = () => {
  return (
    <header className="text-center py-12 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-gray-400 via-red-400 to-gray-600 bg-clip-text text-transparent">
            SRAP - REALIDADES CRUDAS
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-semibold text-gray-400 max-w-3xl mx-auto">
            "Tu corazón quiere cambiar el mundo, tu cuerpo pide descanso, y tu cabeza sabe que mañana toca pagar el alquiler."
        </p>
    </header>
  );
};

export default SectionHeader;