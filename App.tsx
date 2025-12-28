import React from 'react';
import { Hero } from './components/Hero';
import { ServiceFeatures } from './components/ServiceFeatures';
import { AlexaFeatures } from './components/AlexaFeatures';
import { Flow } from './components/Flow';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <main className="flex-grow">
        <Hero />
        <ServiceFeatures />
        <AlexaFeatures />
        <Flow />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;