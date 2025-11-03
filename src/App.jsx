import React from 'react';
import Hero from './components/Hero';
import Scanner from './components/Scanner';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Scanner />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
