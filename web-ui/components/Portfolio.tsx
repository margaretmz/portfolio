
import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(0); // Default first row open

  const toggleRow = (rowIdx: number) => {
    setExpandedRow(expandedRow === rowIdx ? null : rowIdx);
  };

  /**
   * ==========================================
   * REFINEMENT AREA: EDIT YOUR LISTS HERE
   * ==========================================
   * You can add, remove, or rename the skills in 
   * the 'technology' and 'expertise' arrays below.
   */
  const rows = [
    {
      title: "AI & Fashion",
      subtitle: "I am an engineer",
      projects: PROJECTS.slice(0, 3), // AI Fashion Moodboard, AI Fashion House, Sketch2Runway
      analysis: "My AI fashion projects showcase agentic workflows and custom applications that redefine the entire fashion design lifecycle. These are open-source collaborations built with my fellow GDEs.",
      technology: ['Gemini', 'Nano Banana Pro', 'Imagen','Veo', 'Vertex AI', 'Google Cloud'],
      expertise: ['Coding', 'Engineering', 'Agentic Workflows', 'Product Design',  'UI/UX for AI']
    },
    {
      title: "Art & Design",
      subtitle: "I am a creative",
      projects: PROJECTS.slice(3, 6), // Century of Style, AI Fashion Designs, Parsons Design
      analysis: "I specialize in digital couture, brought to life through cinematic motion and graphic design. This dimension explores the intersection of AI/3D fashion and visual storytelling, where traditional tailoring meets the digital lens.",
      technology: ['Clo3D', 'Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'InDesign'],
      expertise: ['Fashion Design', 'Motion Design', 'Graphic Design', 'Creative Direction']
    },
    {
      title: "GDE & Community",
      subtitle: "I am a leader",
      projects: PROJECTS.slice(6, 9), // Project Koru, Google AI Early Access, AI Community Summit
      analysis: "This dimension showcases my community impact and contribution as a leader and Google Developer Expert.",
      technology: ['Google AI', 'Google Generative Media', 'Google Cloud', 'Vertex AI'],
      expertise: ['Developer Advocacy', 'Public Speaking', 'Community Leadership', 'Product Testing']
    }
  ];

  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 pt-10 pb-20">
      <section className="mb-12 text-center max-w-5xl lg:max-w-none mx-auto">
        <h2 className="text-4xl md:text-7xl font-light mb-6 text-white editorial-text italic leading-tight">
          Margaret Maynard-Reid
        </h2>
        <div className="inline-flex items-center gap-6 mb-8">
          <div className="h-[1px] w-10 bg-gold-accent opacity-60"></div>
          <span className="text-[14px] font-medium tracking-wide text-gold-accent inline-block transform origin-center">
             Fashion Designer & Engineer | Google Developer Expert
          </span>
          <div className="h-[1px] w-10 bg-gold-accent opacity-60"></div>
        </div>
        <p className="text-zinc-100 max-w-2xl lg:max-w-none mx-auto text-base md:text-lg font-light leading-relaxed">
          I design AI & 3D fashion and study at Parsons School of Design. I bring a rare creative-developer perspective on how AI is reshaping creative workflows.
        </p>
      </section>

      <div className="flex flex-col gap-12">
        {rows.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className="flex flex-col border-t border-white/5 pt-12 first:border-t-0 first:pt-4">
              {/* Row Teaser / Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <span className="text-gold-accent text-[14px] font-medium tracking-tight uppercase">
                    DIMENSION 0{rowIdx + 1} - <span className="normal-case">{row.subtitle}</span>
                  </span>
                  <h3 className="text-white text-3xl md:text-5xl editorial-text italic font-light">
                    {row.title}
                  </h3>
                </div>
                
                <button 
                  onClick={() => toggleRow(rowIdx)}
                  className="group flex items-center gap-4 outline-none self-start md:self-auto"
                >
                  <span className="text-[9px] text-zinc-300 tracking-[0.4em] uppercase group-hover:text-white transition-colors">
                    {expandedRow === rowIdx ? 'Collapse Dimension' : 'Expand Dimension'}
                  </span>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border border-white/10 group-hover:border-gold-accent/40 transition-all ${expandedRow === rowIdx ? 'bg-gold-accent/10 border-gold-accent/40' : ''}`}>
                    <span className={`material-symbols-outlined text-gold-accent text-sm font-light transition-transform duration-500 ${expandedRow === rowIdx ? 'rotate-45' : ''}`}>
                      add
                    </span>
                  </div>
                </button>
              </div>

              {/* Expandable Content (Tiles + Analysis) */}
              <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${expandedRow === rowIdx ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-16 pb-12">
                  {/* Project Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
                    {(row.projects || []).map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>

                  {/* Analysis Block */}
                  <div className="w-full bg-zinc-950/40 border border-white/5 py-16 md:py-24 mt-12">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-x-8 md:gap-x-10 gap-y-12 items-start px-8">
                      {/* Column 1: Narrative */}
                      <div className="flex flex-col gap-8 md:pr-24">
                        <h5 className="text-gold-accent text-[11px] font-bold tracking-[0.3em] uppercase flex items-center gap-4">
                          <span className="w-6 h-[1px] bg-gold-accent/40"></span>
                          Dimension Narrative
                        </h5>
                        <p className="text-zinc-200 text-sm font-light leading-relaxed italic">
                          {row.analysis}
                        </p>
                      </div>

                      {/* Column 2: Technology */}
                      <div className="flex flex-col gap-8">
                        <h5 className="text-gold-accent text-[11px] font-bold tracking-[0.3em] uppercase flex items-center gap-4">
                          <span className="w-6 h-[1px] bg-gold-accent/40"></span>
                          Technology
                        </h5>
                        <ul className="flex flex-col gap-4">
                          {(row.technology || []).map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-[10px] text-zinc-300 tracking-[0.2em] uppercase font-medium">
                              <span className="w-[3px] h-[3px] bg-gold-accent/70 rotate-45 shrink-0"></span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Expertise */}
                      <div className="flex flex-col gap-8">
                        <h5 className="text-gold-accent text-[11px] font-bold tracking-[0.3em] uppercase flex items-center gap-4">
                          <span className="w-6 h-[1px] bg-gold-accent/40"></span>
                          Expertise
                        </h5>
                        <ul className="flex flex-col gap-4">
                          {(row.expertise || []).map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-[10px] text-zinc-300 tracking-[0.2em] uppercase font-medium">
                              <span className="w-[3px] h-[3px] bg-gold-accent/70 rotate-45 shrink-0"></span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
