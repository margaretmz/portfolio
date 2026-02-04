
import React from 'react';

interface HeaderProps {
  onNavigate: (view: 'portfolio' | 'lab') => void;
  currentView: 'portfolio' | 'lab';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/margaretmz' },
    { name: 'Medium', url: 'https://margaretmz.medium.com/' },
    { name: 'YouTube', url: 'https://www.youtube.com/@Machine2Art' },
    { name: 'Instagram', url: 'https://www.instagram.com/margaretmz/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/margaretmz/' },
    { name: 'X', url: 'https://x.com/margaretmz' },
  ];

  return (
    <header className="relative z-50 w-full border-b border-white/5 bg-background-dark/90 backdrop-blur-xl sticky top-0">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('portfolio')}>
          <h1 className="text-white text-base md:text-lg font-light tracking-[0.4em] uppercase editorial-text">
            AI, art & design
          </h1>
        </div>
        <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors text-[9px] md:text-[10px] font-medium tracking-[0.3em] uppercase whitespace-nowrap py-2"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};