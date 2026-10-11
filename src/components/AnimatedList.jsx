'use client';

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedList({ items = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    gsap.fromTo(
      itemsRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col gap-4 max-w-4xl mx-auto">
      {items.map((item, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <div
            key={index}
            ref={el => (itemsRef.current[index] = el)}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 transition-all duration-300 cursor-pointer opacity-0 hover:bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white font-bold text-lg md:text-xl">
                {item.title}
              </h3>
              <div 
                className={`text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
              >
                <ChevronDown size={24} />
              </div>
            </div>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {item.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
