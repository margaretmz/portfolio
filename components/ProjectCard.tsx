
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isUpcoming = project.status === 'upcoming';
  
  const hasLink = (url: string) => url && url !== '#' && url !== 'N/A';

  return (
    <div className={`flex flex-col gap-6 group ${isUpcoming ? 'cursor-default' : 'cursor-pointer'}`}>
      <div className="relative overflow-hidden aspect-[3/4] bg-zinc-900 border border-white/5 transition-all duration-700">
        <div 
          className={`w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-1000 group-hover:scale-110 ${isUpcoming ? 'grayscale opacity-30' : ''}`}
          style={{ backgroundImage: `url("${project.imageUrl}")` }}
        />
        
        {isUpcoming && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="editorial-text text-zinc-400 text-xl italic font-light tracking-widest relative z-10">
                {project.category}
              </span>
           </div>
        )}

        <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-10 text-center z-20 backdrop-blur-sm">
          <span className="text-gold-accent text-[13px] tracking-[0.3em] uppercase mb-6 font-bold">
            {isUpcoming ? 'Upcoming 2025' : project.model}
          </span>
          <h4 className="text-white text-4xl font-light mb-6 editorial-text italic leading-tight">
            {project.title}
          </h4>
          <p className="text-zinc-100 text-base leading-relaxed font-light italic max-w-xs">
            {project.description}
          </p>
          <div className="mt-8 h-[1px] w-12 bg-gold-accent/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
        </div>
      </div>

      <div className="flex items-center justify-between px-1">
        <h3 className={`${isUpcoming ? 'text-zinc-500' : 'text-white'} text-[11px] font-semibold tracking-[0.2em] uppercase max-w-[60%] truncate group-hover:text-gold-accent transition-colors duration-300`}>
          {project.title}
        </h3>
        <div className={`flex items-center gap-4 ${isUpcoming ? 'text-zinc-700' : 'text-zinc-300'}`}>
          {hasLink(project.githubUrl) && (
            <a 
              title="GitHub"
              className={`${isUpcoming ? 'pointer-events-none' : 'hover:text-gold-accent'} transition-all duration-300 flex items-center`} 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px] font-light">code</span>
            </a>
          )}
          {hasLink(project.mediumUrl) && (
            <a 
              title="Documentation / Article"
              className={`${isUpcoming ? 'pointer-events-none' : 'hover:text-gold-accent'} transition-all duration-300 flex items-center`} 
              href={project.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px] font-light">description</span>
            </a>
          )}
          {hasLink(project.youtubeUrl) && (
            <a 
              title="Video Link"
              className={`${isUpcoming ? 'pointer-events-none' : 'hover:text-gold-accent'} transition-all duration-300 flex items-center`} 
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[20px] font-light">smart_display</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
