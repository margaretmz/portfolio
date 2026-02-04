
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { GeneratedConcept } from "../types";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const generateFashionConcept = async (prompt: string): Promise<GeneratedConcept> => {
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: SchemaType.OBJECT,
        properties: {
          name: { type: SchemaType.STRING },
          description: { type: SchemaType.STRING },
          materials: {
            type: SchemaType.ARRAY,
            items: { type: SchemaType.STRING }
          },
          vibe: { type: SchemaType.STRING }
        },
        required: ["name", "description", "materials", "vibe"]
      }
    }
  });

  const result = await model.generateContent(`Act as a high-end AI fashion designer. Generate a concept for: ${prompt}`);
  const text = result.response.text();
  return JSON.parse(text);
};

export const generateConceptVisual = async (concept: GeneratedConcept): Promise<string | null> => {
  const visualPrompt = `High-fashion editorial photography of a model wearing ${concept.name}. ${concept.description}. Aesthetics: ${concept.vibe}, ultra-high fidelity, dramatic lighting, luxury atmosphere. Materials: ${concept.materials.join(', ')}.`;

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
  });

  const result = await model.generateContent(visualPrompt);
  const response = result.response;

  // Note: Standard Gemini 1.5 doesn't generate images directly like this in most regions
  // but keeping the structure if the user has a specific model configured.
  // Actually, standard generative-ai SDK for text models returns text/candidates.

  return null; // Placeholder as standard text models don't return inlineData images this way
};
