import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export interface AnalysisInput {
  bleeding: string;
  sacrifice: string;
  oxygen: string[];
}

export const analyzeMisery = async (data: AnalysisInput): Promise<string> => {
  try {
    const prompt = `
      Actúa como una IA brutalmente honesta y cínica llamada SRAP-AI.
      Analiza la situación actual del usuario sin ofrecer consuelo falso.
      
      Datos del usuario:
      - Centro que más sangra (sufre): ${data.bleeding}
      - Sacrificio elegido hoy: ${data.sacrifice}
      - Acciones de oxígeno (alivio): ${data.oxygen.join(', ') || 'Ninguna'}

      Tu tarea:
      1. Confirma por qué su elección de sacrificio es dolorosa pero necesaria.
      2. Advierte sobre las consecuencias de ignorar los otros centros.
      3. Da un veredicto de una sola frase lapidaria.
      
      Usa un tono oscuro, filosófico y directo. Nada de "todo va a salir bien".
    `;

    if (!ai) {
      return "No hay API Key configurada. Configura GEMINI_API_KEY para activar la IA.";
    }
    
    // Use Flash for fast, direct analysis
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Eres SRAP-AI. No usas emojis amigables. Usas metáforas de guerra y supervivencia.",
      }
    });

    return response.text || "La IA se niega a analizar tal nivel de contradicción.";
  } catch (error) {
    console.error("Error analyzing misery:", error);
    return "Error de conexión. Incluso la IA te ha abandonado hoy.";
  }
};

export const analyzeSynthesis = async (synthesis: string): Promise<string> => {
  try {
    const prompt = `
      Actúa como una IA brutalmente honesta y cínica llamada SRAP-AI.
      Analiza la síntesis del usuario sobre su situación.

      Síntesis del usuario: ${synthesis}

      Tu tarea:
      1. Evalúa si la síntesis es honesta o es autoengaño.
      2. Si es honesta, confirma la dureza de la elección.
      3. Si es autoengaño, destrúyelo con lógica fría.
      4. Termina con una pregunta cortante que le obligue a reflexionar.

      Usa un tono oscuro y directo. Sé implacable pero útil.
    `;

    if (!ai) {
      return "No hay API Key configurada. Configura GEMINI_API_KEY para activar la IA.";
    }
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "Eres SRAP-AI. No usas emojis amigables. Usas metáforas de guerra y supervivencia.",
      }
    });

    return response.text || "La IA considera tu síntesis demasiado trivial para analizarla.";
  } catch (error) {
    console.error("Error analyzing synthesis:", error);
    return "Error de conexión. La IA está ocupada con problemas más importantes que el tuyo.";
  }
};
