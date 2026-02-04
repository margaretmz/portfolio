
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-8 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-[1800px] mx-auto pt-10 flex flex-col items-center">
        <div className="text-zinc-300 text-[9px] font-light tracking-[0.2em] uppercase text-center flex flex-col gap-3 px-6">
          <p>© 2025 Margaret Maynard-Reid</p>
          <p className="opacity-60">AI, art & design</p>
        </div>
      </div>
    </footer>
  );
};
