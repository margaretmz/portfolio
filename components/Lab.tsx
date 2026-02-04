
import React, { useState } from 'react';
import { generateFashionConcept, generateConceptVisual } from '../services/geminiService';
import { GeneratedConcept } from '../types';

export const Lab: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [concept, setConcept] = useState<GeneratedConcept | null>(null);
  const [visualUrl, setVisualUrl] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setConcept(null);
    setVisualUrl(null);

    try {
      const newConcept = await generateFashionConcept(prompt);
      setConcept(newConcept);
      const imageUrl = await generateConceptVisual(newConcept);
      setVisualUrl(imageUrl);
    } catch (error) {
      console.error("Generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        <section className="sticky top-32">
          <div className="inline-flex items-center gap-6 mb-6">
            <div className="h-[1px] w-10 bg-gold-accent opacity-60"></div>
            <span className="text-[14px] font-medium tracking-wide text-gold-accent inline-block transform origin-center">
              Research & Development
            </span>
            <div className="h-[1px] w-10 bg-gold-accent opacity-60"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-white editorial-text italic leading-tight">
            Design Atelier
          </h2>
          <p className="text-zinc-200 text-base md:text-lg font-light leading-relaxed mb-12 max-w-xl">
            Co-create with our proprietary neural engine. Define a silhouette, a mood, or a material, and let the studio synthesize your vision into a cohesive concept.
          </p>

          <form onSubmit={handleGenerate} className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Cyberpunk Victorian gown with liquid chrome accents"
                className="w-full bg-transparent border-b border-white/10 py-4 px-1 text-white placeholder:text-zinc-500 focus:outline-none focus:border-gold-accent transition-colors editorial-text text-xl italic"
              />
            </div>
            <button
              disabled={isGenerating || !prompt.trim()}
              className="self-start px-12 py-4 bg-white text-black text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-gold-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Synthesizing...' : 'Generate Vision'}
            </button>
          </form>

          {isGenerating && (
            <div className="mt-12 flex items-center gap-4">
              <div className="w-4 h-4 border-2 border-gold-accent border-t-transparent rounded-full animate-spin"></div>
              <span className="text-[10px] text-gold-accent font-bold uppercase tracking-widest animate-pulse">Consulting Neural Archives...</span>
            </div>
          )}
        </section>

        <section className="min-h-[600px] border border-white/5 bg-zinc-950/30 p-8 md:p-12 relative overflow-hidden">
          {!concept && !isGenerating && (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-zinc-700 text-6xl mb-6 font-light">
                auto_awesome
              </span>
              <p className="text-zinc-500 text-xs tracking-widest uppercase italic">Awaiting Conceptual Input</p>
            </div>
          )}

          {concept && (
            <div className="flex flex-col gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex flex-col gap-4">
                <span className="text-gold-accent text-[10px] font-bold tracking-[0.3em] uppercase">Concept Synthesis v1.02</span>
                <h3 className="text-white text-4xl editorial-text italic font-light">{concept.name}</h3>
                <p className="text-zinc-200 text-sm font-light leading-relaxed italic border-l border-gold-accent/40 pl-6 py-2">
                  {concept.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white/60 text-[9px] tracking-widest uppercase mb-4">Materials</h4>
                  <ul className="text-zinc-100 text-[10px] space-y-2 uppercase tracking-wide">
                    {concept.materials.map((m, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-[1px] bg-gold-accent"></span> {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white/60 text-[9px] tracking-widest uppercase mb-4">Atmosphere</h4>
                  <p className="text-zinc-100 text-[10px] uppercase tracking-wide">{concept.vibe}</p>
                </div>
              </div>

              {visualUrl && (
                <div className="mt-4 border border-white/5 relative aspect-[3/4] overflow-hidden group">
                   <img 
                    src={visualUrl} 
                    alt={concept.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
