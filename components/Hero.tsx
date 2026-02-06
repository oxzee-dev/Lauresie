import React, { useState, useEffect } from 'react';
import { ArrowDown, Flower, Leaf, Bird, Sun, Heart, Sparkles } from 'lucide-react';

const RotatingText: React.FC = () => {
  const words = ["s'Indigner", "Résister", "Agir", "Grandir", "Évoluer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 70 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-sand-orange font-black">
      {words[index].substring(0, subIndex)}
      <span className="cursor-blink"></span>
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 py-20 my-8 md:my-16 overflow-hidden bg-cream-warm/30 rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-10 shadow-sm border border-sage/5">
      
      {/* Background Image with High Opacity Effect (Subtle Overlay) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1920" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-10 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-warm/20 via-transparent to-white/40"></div>
      </div>

      {/* Dynamic Background Icons */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <div className="floating-icon top-[15%] left-[8%] text-sage/20" style={{ animationDelay: '0s' }}><Leaf size={40} /></div>
        <div className="floating-icon top-[25%] right-[12%] text-sand-orange/30" style={{ animationDelay: '2s' }}><Flower size={50} /></div>
        <div className="floating-icon bottom-[30%] left-[15%] text-sage-light/20" style={{ animationDelay: '4s' }}><Bird size={35} /></div>
        <div className="floating-icon top-[65%] right-[18%] text-sand/40" style={{ animationDelay: '1s' }}><Sun size={45} /></div>
        <div className="floating-icon bottom-[15%] right-[10%] text-red-300/30" style={{ animationDelay: '3s' }}><Heart size={30} /></div>
        <div className="floating-icon top-[45%] left-[25%] text-sand-orange/20" style={{ animationDelay: '5s' }}><Sparkles size={35} /></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-sage/5 border border-sage/10 text-sage text-xs font-bold mb-8 uppercase tracking-widest backdrop-blur-sm">
          Chroniques d'un monde en éveil
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-sage mb-8 tracking-tighter leading-tight drop-shadow-sm">
          Penser est <br />
          <RotatingText />
        </h1>
        
        <div className="mb-12 flex items-center justify-center space-x-4">
          <span className="text-2xl md:text-3xl text-sage font-medium italic opacity-40">by</span>
          <p className="handwritten-brand text-7xl md:text-9xl text-sand-orange drop-shadow-md hover:scale-105 transition-transform cursor-default pt-2">
            Lauresie
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-14 font-light leading-relaxed">
          Un sanctuaire de réflexion critique où l'indignation se transforme en lumière.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#about" className="px-10 py-4 bg-sage text-white rounded-full text-md font-bold hover:bg-sage-light transition-all shadow-xl shadow-sage/20">
            Explorer ma Vision
          </a>
          <a href="#blogs" className="px-10 py-4 bg-white/80 backdrop-blur-sm border border-sage/20 text-sage rounded-full text-md font-bold hover:border-sage transition-all flex items-center">
            Lire les articles
            <ArrowDown size={18} className="ml-2 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
