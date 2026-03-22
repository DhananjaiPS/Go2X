import React from "react";
import { motion } from "framer-motion";

// Font import in your layout or config: e.g., using Tailwind's `font-sans` or `font-display`.

const GoogleTransformationHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#0D0D0D] text-white flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background Accent (Subtle Orange Blur) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF5714]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FF5714]/10 blur-[120px] pointer-events-none" />

      {/* Grid Background Pattern (Optional, for texture) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 z-10 flex flex-col items-center">
        
        {/* Main Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-tight"
          >
            The Ultimate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5714] to-[#FF8C42]">
              Transformation
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Proof that our proven system takes ambitious engineers from baseline grind to top-tier strategy.
          </motion.p>
        </div>

        {/* Transformation Split Container */}
        <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 lg:gap-8 items-stretch border border-[#1A1A1A] rounded-3xl overflow-hidden bg-neutral-900/50 backdrop-blur-sm">
          
          {/* LEFT: BEFORE (₹3 LPA Grind) */}
          <div className="relative p-12 lg:p-16 space-y-8 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest px-3 py-1.5 rounded-full border border-neutral-700 bg-black/40">Baseline</span>
            </div>
            
            <div className="flex-grow space-y-3">
              <h3 className="text-sm font-semibold text-neutral-400">Previous Total Compensation</h3>
              <p className="text-7xl lg:text-8xl font-extrabold text-white tracking-tighter">
                ₹3 <span className="text-5xl lg:text-6xl text-neutral-600">LPA</span>
              </p>
              <p className="text-xl font-medium text-white/80">Junior Developer</p>
              <p className="text-base text-neutral-500 max-w-sm">Focused on tactical troubleshooting and basic code maintenance.</p>
            </div>

            <motion.img 
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2017/06/tcs-campus-usa-1498226938.jpg" // Path to your cropped 'Before' image
              alt="Junior developer focused on screen"
              className="mt-12 rounded-2xl grayscale border border-neutral-800 object-cover aspect-[5/3]"
            />
          </div>

          {/* RIGHT: AFTER (₹50+ LPA Google Leadership) */}
          <div className="relative p-12 lg:p-16 space-y-8 flex flex-col bg-[#0D0D0D] border-l-2 md:border-l-0 md:border-t-2 md:border-orange-950">
            <div className="flex justify-between items-center gap-3">
              <span className="text-[11px] font-bold text-[#FF5714] uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#FF5714]/30 bg-[#FF5714]/5">Current Position</span>
              <div className="h-2.5 w-2.5 rounded-full bg-[#FF5714] animate-pulse" />
            </div>
            
            <div className="flex-grow space-y-3">
              <div className="flex items-center gap-4">
                <img src="data:image/png;base64,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" alt="Google logo" className="h-10 w-10 p-1 rounded-md bg-white" />
                <h3 className="text-sm font-bold text-[#FF5714] uppercase tracking-wider">Placement at Google</h3>
              </div>
              <p className="text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFB28A]">
                ₹50+<span className="text-5xl lg:text-6xl text-white/60">LPA</span>
              </p>
              <p className="text-2xl font-bold text-white">Senior Engineering Leader</p>
              <p className="text-base text-neutral-400 max-w-sm">Defining technical vision, architecting scalable systems, and mentoring global teams.</p>
            </div>

            <motion.img 
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1690983730723-37220d10db46?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D" // Path to your cropped 'After' image
              alt="Senior engineer leading whiteboarding"
              className="mt-12 rounded-2xl border-4 border-[#FF5714]/20 shadow-2xl shadow-[#FF5714]/10 object-cover aspect-[5/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleTransformationHero;