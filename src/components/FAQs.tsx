import React, { useState } from 'react';
import { FAQItem } from '../types';

export const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'What editing app do you use?',
      answer: 'I edit all my videos using Alight Motion.'
    },
    {
      question: 'What type of content do you make?',
      answer: 'I currently create cinematic chess edits featuring legendary games and iconic moments.'
    },
    {
      question: 'How often do you upload?',
      answer: 'Usually once every 1–2 weeks.'
    },
    {
      question: 'Can I suggest a game for your next edit?',
      answer: "Yes! I'm always open to community suggestions."
    },
    {
      question: 'Do you play chess?',
      answer: "Yes, I'm a chess enthusiast as well as an editor."
    },
    {
      question: 'Do you livestream?',
      answer: 'No, not at the moment.'
    },
    {
      question: 'Can I use your edits in my own videos?',
      answer: "No. Please don't re-upload or use my edits without my permission."
    },
    {
      question: 'Do you accept collaborations?',
      answer: "Yes, if you make high-quality edits that match the channel's style."
    },
    {
      question: 'What apps do you use besides Alight Motion?',
      answer: 'I use different apps depending on the project, but Alight Motion is my main editing app.'
    },
    {
      question: 'What device do you edit on?',
      answer: 'I edit on my phone.'
    },
    {
      question: 'Where can I contact you?',
      answer: 'You can reach me through YouTube or Discord.'
    },
    {
      question: 'Can I contact you for business inquiries?',
      answer: 'Yes. Feel free to use the contact information provided on this website.'
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 relative bg-deep-black overflow-hidden border-t border-white/5">
      
      {/* Glow background anchor */}
      <div className="absolute bottom-1/4 left-1/3 size-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="font-mono text-xs sm:text-sm tracking-widest text-neon-blue uppercase">Help & Guidelines</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">COMMON QUESTIONS</h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-brand-blue to-neon-blue rounded-full" />
        </div>

        {/* FAQ layout - side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info panel - explaining the editing journey */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-2xl bg-glass-bg border border-white/5 backdrop-blur-md space-y-4">
              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl">CREATOR FREQUENTLY ASKED QUESTIONS</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Find quick answers to common questions about BlunderChess setups, upload schedules, collaborations, and media usage policies.
              </p>
              <div className="pt-2">
                <div className="flex items-center gap-3 text-xs font-mono text-neon-blue font-semibold uppercase">
                  <span>Scroll or click questions to expand</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-[float_2s_infinite]">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Accordion Panel */}
          <div className="lg:col-span-8 space-y-3 w-full">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl overflow-hidden border border-white/5 bg-glass-bg backdrop-blur-md transition-all duration-300"
                  style={{
                    borderColor: isOpen ? 'rgba(0, 129, 242, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: isOpen ? '0 0 20px rgba(0, 129, 242, 0.1)' : 'none'
                  }}
                >
                  {/* Question button tab */}
                  <button
                    onClick={() => handleToggle(idx)}
                    className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-white hover:text-neon-blue focus:outline-none transition-colors duration-300"
                  >
                    <span className="text-sm sm:text-base font-semibold tracking-wide pr-4">
                      {item.question}
                    </span>
                    <span className="flex-shrink-0 size-7 rounded-full flex items-center justify-center bg-white/5 border border-white/5 text-gray-400 group-hover:text-white transition-all duration-300">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth unfolding Answer tab */}
                  <div 
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
