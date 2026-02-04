
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import { Lab } from './components/Lab';

const App: React.FC = () => {
  const [view, setView] = useState<'portfolio' | 'lab'>('portfolio');

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full glow-accent pointer-events-none z-0"></div>
      
      <Header currentView={view} onNavigate={(v) => setView(v)} />
      
      <main className="flex-grow relative z-10">
        {view === 'portfolio' ? <Portfolio /> : <Lab />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
