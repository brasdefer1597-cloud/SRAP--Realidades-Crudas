import React from 'react';
import SectionHeader from './components/SectionHeader';
import SectionTruths from './components/SectionTruths';
import SectionExam from './components/SectionExam';
import SectionBreathing from './components/SectionBreathing';

const SectionMap: React.FC = () => (
  <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="bg-gray-800 rounded-2xl p-8 border border-yellow-700">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">🗺️ MAPA DE LA REALIDAD</h2>
          
          <div className="overflow-x-auto">
              <table className="w-full text-sm">
                  <thead>
                      <tr className="border-b border-yellow-600">
                          <th className="text-left py-4 text-yellow-400 min-w-[80px]">Centro</th>
                          <th className="text-left py-4 text-yellow-400 min-w-[120px]">Te Promete</th>
                          <th className="text-left py-4 text-yellow-400 min-w-[200px]">La Realidad Exige</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="border-b border-gray-700">
                          <td className="py-4 font-semibold text-blue-400">🧠 Cabeza</td>
                          <td className="py-4 text-gray-300">Control</td>
                          <td className="py-4 text-gray-300">Aceptar caos + actuar igual</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                          <td className="py-4 font-semibold text-red-400">💓 Corazón</td>
                          <td className="py-4 text-gray-300">Significado</td>
                          <td className="py-4 text-gray-300">Tolerar vacío + construir sentido</td>
                      </tr>
                      <tr>
                          <td className="py-4 font-semibold text-green-400">🦶 Cuerpo</td>
                          <td className="py-4 text-gray-300">Placer</td>
                          <td className="py-4 text-gray-300">Soportar dolor + moverte igual</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </section>
);

const SectionSacrifices: React.FC = () => (
    <section className="py-12 px-6 max-w-6xl mx-auto -mt-12">
      <div className="integration-cruda rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-red-400 mb-6">⚰️ SACRIFICIOS DIARIOS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-dashed border-gray-600 rounded-lg bg-gray-800">
                  <h4 className="font-bold text-yellow-400 mb-2">❌ NO HAY "EQUILIBRIO PERFECTO"</h4>
                  <p className="text-gray-300 text-sm">
                      Elegirás qué centro sacrificar hoy. No puedes tenerlo todo. 
                      La pregunta no es "¿cómo equilibrar?" sino "¿a quién le toca sufrir hoy?"
                  </p>
              </div>
              
              <div className="p-4 border border-dashed border-gray-600 rounded-lg bg-gray-800">
                  <h4 className="font-bold text-yellow-400 mb-2">⏳ DECLINACIÓN INEVITABLE</h4>
                  <p className="text-gray-300 text-sm">
                      Tu cuerpo envejece, tu cabeza olvida, tu corazón cicatriza mal. 
                      Cada elección acelera el desgaste de algún centro.
                  </p>
              </div>
              
              <div className="p-4 border border-dashed border-gray-600 rounded-lg bg-gray-800">
                  <h4 className="font-bold text-yellow-400 mb-2">💉 SANGRADO SIMULTÁNEO</h4>
                  <p className="text-gray-300 text-sm">
                      La única integración real es aceptar que a veces sangras por los tres sitios a la vez. 
                      Bienvenido a estar vivo.
                  </p>
              </div>
          </div>
      </div>
    </section>
);

function App() {
  return (
    <div className="min-h-screen selection:bg-red-500 selection:text-white">
      <SectionHeader />
      <SectionTruths />
      <SectionMap />
      <SectionSacrifices />
      <SectionExam />
      <SectionBreathing />
    </div>
  );
}

export default App;
