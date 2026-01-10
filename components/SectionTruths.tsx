import React from 'react';

const SectionTruths: React.FC = () => {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="hard-truth rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-red-400 mb-6">🔪 VERDADES SIN EDULCORAR</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cuerpo */}
                <div className="reality-card cuerpo-card rounded-xl p-6">
                    <div className="text-center mb-4">
                        <div className="text-4xl mb-2">🦶</div>
                        <h3 className="text-xl font-bold text-green-400">EL CUERPO SIEMPRE GANA</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Puedes ignorarlo años con cafés, estrés y sonrisas falsas. 
                        Pero un día colapsa. Y la factura médica jamás será poética.
                    </p>
                    <div className="mt-4 p-3 bg-green-900 bg-opacity-20 rounded-lg">
                        <p className="text-green-300 text-xs italic">
                            "El cáncer no pregunta '¿qué te importa?' antes de aparecer"
                        </p>
                    </div>
                </div>

                {/* Corazón */}
                <div className="reality-card corazon-card rounded-xl p-6">
                    <div className="text-center mb-4">
                        <div className="text-4xl mb-2">💔</div>
                        <h3 className="text-xl font-bold text-red-400">EL CORAZÓN ES UN MAL ESTRATEGA</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Seguir "tu pasión" sin plan es receta para terminar:
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Con deudas</li>
                            <li>Explotado por quien sí planeó</li>
                            <li>Vendiendo cursos de "vibra alta"</li>
                        </ul>
                    </p>
                </div>

                {/* Cabeza */}
                <div className="reality-card cabeza-card rounded-xl p-6">
                    <div className="text-center mb-4">
                        <div className="text-4xl mb-2">🧊</div>
                        <h3 className="text-xl font-bold text-blue-400">LA CABEZA SIN CORAZÓN CREA MONSTRUOS</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        CEOs que optimizan despidos. Políticos que calculan daños colaterales. 
                        Tú decidiendo "es lógico" mientras matas algo en ti.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SectionTruths;
