'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Sparkles, Zap, Fingerprint } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-32 pb-8 overflow-hidden border-t border-white/10 selection:bg-orange-500 selection:text-black">
      
      {/* 🌟 AMBIENT GLOWS (Hidden by default, triggered by group hover below) 🌟 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-orange-600/0 via-purple-600/0 to-orange-600/0 blur-[120px] pointer-events-none transition-all duration-700 z-0 opacity-0 group-hover/footer:opacity-100" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 group/footer">
        
        {/* Top Minimal Info */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
              <Zap className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span>System Online</span>
            </div>
            <h2 className="text-3xl font-display font-black text-white tracking-tighter uppercase italic">
              Dream<span className="text-orange-500">Job</span>
            </h2>
            <p className="text-gray-500 text-sm font-medium mt-4">
              Building the future of developer assessments. No fluff, just raw performance.
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-2 flex items-center justify-end gap-2">
              <Fingerprint className="w-4 h-4" /> Master Architects
            </p>
            <p className="text-gray-400 text-sm font-mono">Initiate hover sequence below ↓</p>
          </div>
        </div>

        {/* 🌟 CRAZY MINIMAL CREATOR BLOCKS 🌟 */}
        <div className="flex flex-col gap-0 border-y border-white/10">
          
          {/* Creator 1: Dhananjai */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            className="group/dhananjai relative py-12 md:py-16 border-b border-white/5 cursor-crosshair overflow-hidden flex flex-col md:flex-row items-center justify-between transition-colors duration-500 hover:bg-orange-500/5"
          >
            {/* Huge Stroke Text */}
            <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black uppercase tracking-tighter transition-all duration-500 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover/dhananjai:[-webkit-text-stroke:0px] group-hover/dhananjai:text-orange-500 group-hover/dhananjai:drop-shadow-[0_0_30px_rgba(255,107,0,0.5)] z-10 text-center md:text-left w-full md:w-auto">
              Dhananjai <br className="hidden md:block lg:hidden" /> Pratap Singh
            </h3>

            {/* Hidden Floating Socials */}
            <motion.div 
              variants={{
                initial: { opacity: 0, x: 50, filter: 'blur(10px)' },
                hover: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 200, damping: 20 } }
              }}
              className="absolute md:relative bottom-4 md:bottom-auto flex gap-4 z-20"
            >
              <a href="#" className="w-14 h-14 rounded-full bg-orange-500 text-black flex items-center justify-center hover:scale-110 hover:bg-white transition-all shadow-[0_0_30px_rgba(255,107,0,0.4)]">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-orange-500 text-black flex items-center justify-center hover:scale-110 hover:bg-white transition-all shadow-[0_0_30px_rgba(255,107,0,0.4)]">
                <Linkedin className="w-6 h-6 fill-black" />
              </a>
            </motion.div>

            {/* Background Sweep */}
            <motion.div 
              variants={{
                initial: { x: '-100%' },
                hover: { x: '100%', transition: { duration: 1.5, ease: 'linear', repeat: Infinity } }
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-0"
            />
          </motion.div>

          {/* Creator 2: Kashish */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            className="group/kashish relative py-12 md:py-16 cursor-crosshair overflow-hidden flex flex-col md:flex-row items-center justify-between transition-colors duration-500 hover:bg-purple-500/5"
          >
            {/* Huge Stroke Text */}
            <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-black uppercase tracking-tighter transition-all duration-500 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] group-hover/kashish:[-webkit-text-stroke:0px] group-hover/kashish:text-purple-500 group-hover/kashish:drop-shadow-[0_0_30px_rgba(168,85,247,0.5)] z-10 text-center md:text-left w-full md:w-auto">
              Kashish <br className="hidden md:block lg:hidden" /> Vasisth
            </h3>

            {/* Hidden Floating Socials */}
            <motion.div 
              variants={{
                initial: { opacity: 0, x: 50, filter: 'blur(10px)' },
                hover: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 200, damping: 20 } }
              }}
              className="absolute md:relative bottom-4 md:bottom-auto flex gap-4 z-20"
            >
              <a href="#" className="w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center hover:scale-110 hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center hover:scale-110 hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <Linkedin className="w-6 h-6 fill-white hover:fill-black" />
              </a>
            </motion.div>

            {/* Background Sweep */}
            <motion.div 
              variants={{
                initial: { x: '-100%' },
                hover: { x: '100%', transition: { duration: 1.5, ease: 'linear', repeat: Infinity } }
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-0"
            />
          </motion.div>

        </div>

        {/* Tactical Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
            © {new Date().getFullYear()} DREAMJOB PROPRIETARY.
          </p>
          
          {/* Animated Ticker for extra crazy vibe */}
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-64 border border-white/5 rounded-full px-3 py-1.5 bg-white/5 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-orange-500 flex-shrink-0" />
            <motion.p 
              animate={{ x: [0, -200] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-[10px] font-mono text-gray-400 whitespace-nowrap"
            >
              // DEPLOYMENT SUCCESSFUL // MAINTAINING SERVER STABILITY // KEEP GRINDING //
            </motion.p>
          </div>
        </div>

      </div>
    </footer>
  )
}