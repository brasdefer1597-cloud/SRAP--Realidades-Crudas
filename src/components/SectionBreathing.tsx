import React, { useState } from 'react';

const SectionBreathing: React.FC = () => {
  const [activeOxygen, setActiveOxygen] = useState<string | null>(null);

  return (
    <section className="py-12 bg-black bg-opacity-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-6">🌬️ ¿DOLIÓ? BIEN. AHORA RESPIRA</h2>
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-red-800">
                <div className={`breathing-crudo w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center transition-all duration-500 ${activeOxygen ? 'animate-[breathe-crudo_2s_ease-in-out_infinite]' : ''}`}>
                    <span className="text-3xl">💨</span>
                </div>
                
                <p className="text-gray-300 mb-6">
                    <strong className="text-yellow-400">DECIDE:</strong> ¿Cuál de los tres centros necesita más oxígeno HOY?
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      { id: 'cabeza', label: 'Oxígeno Mental', icon: '🧠', color: 'blue' },
                      { id: 'corazon', label: 'Oxígeno Emocional', icon: '💔', color: 'red' },
                      { id: 'cuerpo', label: 'Oxígeno Físico', icon: '🦶', color: 'green' }
                    ].map(type => (
                      <button 
                        key={type.id}
                        onClick={() => setActiveOxygen(type.id)}
                        className={`py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-semibold bg-${type.color}-900 bg-opacity-30 hover:bg-${type.color}-800 text-${type.color}-300 ring-2 ${activeOxygen === type.id ? 'ring-yellow-400' : 'ring-transparent'}`}
                      >
                          {type.icon} {type.label}
                      </button>
                    ))}
                </div>
                
                <p className="text-sm text-gray-400 italic">
                    No hay respuesta correcta. Solo elecciones y sus consecuencias. 
                    La sabiduría está en elegir consciente de que estás sacrificando algo.
                </p>
            </div>
        </div>
    </section>
  );
};

export default SectionBreathing;
