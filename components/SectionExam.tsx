import React, { useState } from 'react';
import { analyzeMisery, analyzeSynthesis } from '../services/geminiService';

const Modal: React.FC<{ analysis: string; onClose: () => void }> = ({ analysis, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-gray-900 rounded-xl p-8 max-w-md mx-4 border-4 border-red-500 shadow-2xl">
            <div className="text-center mb-6">
                <span className="text-5xl block mb-4">🎯</span>
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">DIAGNÓSTICO DE LA IA</h3>
            </div>
            <p className="text-gray-300 italic text-sm mb-6 whitespace-pre-line">
                "{analysis}"
            </p>
            <div className="text-center">
                <button onClick={onClose} className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition-all">
                    ENTENDIDO
                </button>
            </div>
        </div>
    </div>
);


const COLOR_MAP: Record<string, { ring: string; text: string; bg: string }> = {
  blue: { ring: 'ring-blue-400', text: 'text-blue-300', bg: 'bg-blue-900' },
  red: { ring: 'ring-red-400', text: 'text-red-300', bg: 'bg-red-900' },
  green: { ring: 'ring-green-400', text: 'text-green-300', bg: 'bg-green-900' },
};

const SectionExam: React.FC = () => {
  const [bleeding, setBleeding] = useState<string>('');
  const [sacrifice, setSacrifice] = useState<string>('');
  const [oxygen, setOxygen] = useState<string[]>([]);
  const [synthesis, setSynthesis] = useState<string>('');
  
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [synthesisLoading, setSynthesisLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOxygenChange = (value: string) => {
    setOxygen(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleAcceptReality = async () => {
    if (!bleeding || !sacrifice) {
      alert("Completa el diagnóstico y el sacrificio primero.");
      return;
    }
    setLoading(true);
    setAiAnalysis(null);
    try {
      const result = await analyzeMisery({ bleeding, sacrifice, oxygen });
      setAiAnalysis(result);
      setIsModalOpen(true);
    } catch (error) {
      alert("Error al conectar con la IA.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeSynthesis = async () => {
    if (!synthesis.trim()) {
      alert("Escribe tu síntesis primero.");
      return;
    }
    setSynthesisLoading(true);
    setAiAnalysis(null);
    try {
      const result = await analyzeSynthesis(synthesis);
      setAiAnalysis(result);
      setIsModalOpen(true);
    } catch (error) {
      alert("Error al conectar con la IA.");
    } finally {
      setSynthesisLoading(false);
    }
  };
  
  const OXYGEN_OPTIONS = [
    "5 minutos de respiración consciente (Cuerpo)",
    "Escribir 1 verdad cruda sin edulcorar (Corazón)",
    "Hacer 1 cálculo real de supervivencia (Cabeza)"
  ];

  return (
    <>
      {isModalOpen && aiAnalysis && <Modal analysis={aiAnalysis} onClose={() => setIsModalOpen(false)} />}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-400">🎯 EXAMEN SRAP - REALIDAD CRUDA</h2>
        
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-red-800 shadow-xl">
            <div className="text-center mb-8">
                <div className="breathing-crudo w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-red-900 bg-opacity-30">
                    <span className="text-2xl" role="img" aria-label="Calavera">💀</span>
                </div>
                <p className="text-gray-400 italic mb-4">
                    "La iluminación no es paz perpetua. Es saber que el miedo en el pecho, 
                    el cálculo mental y el temblor en las manos son la orquesta normal de estar vivo."
                </p>
                <p className="text-yellow-400 font-semibold">
                    La sabiduría es no dejar que ninguno ahogue a los otros.
                </p>
            </div>

            <div className="space-y-6">
                <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-red-400 mb-4 uppercase tracking-wider">1. DIAGNÓSTICO CRUDO</h3>
                    <p className="text-gray-300 mb-4">¿Cuál de los tres centros está sangrando MÁS hoy?</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                           {id: 'cabeza', label: 'Cabeza', icon: '🧠', color: 'blue'},
                           {id: 'corazon', label: 'Corazón', icon: '💔', color: 'red'},
                           {id: 'cuerpo', label: 'Cuerpo', icon: '🦶', color: 'green'},
                        ].map(item => {
                          const styles = COLOR_MAP[item.color];
                          return (
                            <button
                              key={item.id}
                              onClick={() => setBleeding(item.id)}
                              className={`flex items-center space-x-3 p-3 ${styles.bg} bg-opacity-20 rounded-lg cursor-pointer transition-all duration-200 ring-2 ${bleeding === item.id ? styles.ring : 'ring-transparent'} hover:bg-opacity-30`}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span className={`font-bold ${styles.text}`}>{item.label}</span>
                            </button>
                          );
                        })}
                    </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-red-400 mb-4 uppercase tracking-wider">2. SACRIFICIO CONSCIENTE</h3>
                    <p className="text-gray-300 mb-4">¿A qué centro le toca ceder HOY para que los otros dos sobrevivan?</p>
                    
                    <select 
                      value={sacrifice}
                      onChange={e => setSacrifice(e.target.value)}
                      className="w-full bg-black bg-opacity-50 text-white p-3 rounded-lg border border-red-600 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all outline-none"
                    >
                        <option value="">Elige el sacrificio de hoy...</option>
                        <option value="cabeza">Cabeza: Aceptar caos, dejar de controlar</option>
                        <option value="corazon">Corazón: Postergar sueños, aceptar realidad</option>
                        <option value="cuerpo">Cuerpo: Ignorar cansancio, seguir moviéndose</option>
                    </select>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-red-400 mb-4 uppercase tracking-wider">3. OXÍGENO DE SUPERVIVENCIA</h3>
                    <p className="text-gray-300 mb-4">¿Qué acción mínima puede dar oxígeno al centro más ahogado?</p>
                    
                    <div className="space-y-3">
                      {OXYGEN_OPTIONS.map(opt => (
                        <label key={opt} className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${oxygen.includes(opt) ? 'bg-red-900 bg-opacity-40 border border-red-600' : 'bg-gray-700 bg-opacity-30 hover:bg-opacity-50 border border-transparent'}`}>
                            <input
                              type="checkbox"
                              checked={oxygen.includes(opt)}
                              onChange={() => handleOxygenChange(opt)}
                              className="w-5 h-5 text-red-500 bg-gray-800 border-gray-600 rounded focus:ring-red-500 accent-red-500"
                            />
                            <span className="text-sm text-gray-300">{opt}</span>
                        </label>
                      ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 p-6 bg-red-900 bg-opacity-20 border border-red-700 rounded-xl">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">💎 INTEGRACIÓN CRUDA</h3>
                <textarea 
                    id="synthesis-text"
                    value={synthesis}
                    onChange={e => setSynthesis(e.target.value)}
                    placeholder='Escribe tu síntesis realista. Ejemplo: "Hoy el cuerpo sangra más. Sacrificaré el control mental (cabeza) para dar 10 minutos de descanso al cuerpo. El corazón esperará hasta mañana."'
                    className="w-full h-32 bg-black bg-opacity-50 border border-yellow-600 rounded-lg p-4 text-white focus:outline-none resize-none focus:ring-2 focus:ring-yellow-400 transition-all"
                ></textarea>
                
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                      onClick={handleAcceptReality}
                      disabled={loading || synthesisLoading}
                      className="w-full sm:w-auto bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg transition-all pulse-realidad disabled:bg-gray-700 disabled:cursor-not-allowed disabled:animate-none"
                    >
                      {loading ? 'ANALIZANDO...' : '💀 ACEPTAR REALIDAD Y ACTUAR'}
                    </button>
                    <button
                      onClick={handleAnalyzeSynthesis}
                      disabled={loading || synthesisLoading || !synthesis.trim()}
                      className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-all disabled:bg-gray-700 disabled:cursor-not-allowed"
                    >
                        {synthesisLoading ? 'ANALIZANDO...' : '🔬 ANALIZAR SÍNTESIS'}
                    </button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default SectionExam;
