'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react'
import { UserState } from '@/app/page'
import TransformationSection from './TransformationSection'

interface HeroSectionProps {
  user: UserState
}
// Inline Google Logo Component
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)
// Student Placement Data (Similar to video)
const placements = [
  { name: 'Vanshika Singhal', company: 'Adobe', pkg: '53 LPA', img: 'data:image/jpeg;base64,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', color: '#FF0000' },
  { name: 'Jai Sethi', company: 'Google', pkg: '35 LPA', img: 'data:image/jpeg;base64,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', color: '#4285F4' },
  { name: 'Tanay Saxena', company: 'Wells Fargo', pkg: '40 LPA', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ci7zrEaImVrTOtNEhshJXpEpglLHQCuFgA&s', color: '#FFFF00' },
  { name: 'Prince Saxena', company: 'Cloop', pkg: '14 LPA', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGiUBVVaR_UjvdPEfvPnOagpsYLtihzmrZaQ&s', color: '#00FF00' },
  { name: 'Vishal Kumar', company: 'Lenskart', pkg: '15 LPA', img: 'data:image/jpeg;base64,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', color: '#0000FF' },
  { name: 'Utkarsh', company: 'Zomato', pkg: '24 LPA', img: 'data:image/jpeg;base64,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', color: '#E23744' },
]

export default function HeroSection({ user }: HeroSectionProps) {

  // Smooth scroll handler for buttons
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center pt-32 pb-16 bg-[#050505] overflow-hidden"
      >
        {/* Background Radial Glow - Brand Focused */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.15)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col items-center text-center px-4 max-w-7xl mx-auto">

          {/* Trust Badge / Rating */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img key={i} className="w-7 h-7 rounded-full border-2 border-black" src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" />
              ))}
            </div>
            <div className="h-4 w-[1px] bg-white/20" />
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
              <span className="text-white text-sm font-bold">4.9/5</span>
              <span className="text-neutral-500 text-xs ml-1 font-medium tracking-tight">10k+ STUDENTS TAUGHT</span>
            </div>
          </motion.div>

          {/* Headline - "2X Your Career" Style */}
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="mb-6 text-center"
>
  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter">
    <span className="text-orange-600 italic inline-block hover:scale-110 transition-transform cursor-default mr-4 md:mr-6">
      2X
    </span> 
    Y
    
    {/* --- 🌟 THE "GOD-MODE" O WRAPPER 🌟 --- */}
    <span className="relative inline-flex items-center justify-center mx-2 md:mx-4 align-middle">
      
      {/* 1. Main Spinning Sunburst (The "Crazy" Rays) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '300%', // Makes rays go far behind letters
          height: '300%',
          background: 'repeating-conic-gradient(from 0deg, transparent 0deg 15deg, rgba(255, 215, 0, 0.25) 15deg 30deg)',
          WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 60%)',
          maskImage: 'radial-gradient(circle, black 20%, transparent 60%)',
        }}
      />
      
      {/* 2. Counter-Spinning Inner Rays */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '200%',
          height: '200%',
          background: 'repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255, 255, 255, 0.3) 10deg 20deg)',
          WebkitMaskImage: 'radial-gradient(circle, black 10%, transparent 70%)',
          maskImage: 'radial-gradient(circle, black 10%, transparent 70%)',
        }}
      />
      
      {/* 3. The Pulsing Aura (Your exact scaling/opacity) */}
      <motion.div 
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-yellow-400/40 rounded-full blur-[30px] pointer-events-none"
      />

      {/* 4. Floating Google Logo (Your exact Y-axis motion) */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative top-1 z-10 bg-white shadow-[0_0_60px_rgba(255,255,255,0.6),0_0_100px_rgba(255,215,0,0.4)] p-3 pb-3 md:p-5 rounded-full border border-white/50 flex items-center justify-center transform scale-90 md:scale-100"
      >
        <GoogleLogo />
      </motion.div>
    </span>
    {/* ------------------------------------- */}
    
    UR<br />CAREER
  </h1>
</motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg md:text-2xl max-w-3xl mb-12 font-medium leading-relaxed"
          >
            Placement-focused programs built by <span className="text-white">IITians</span> and <span className="text-white">Industry Experts</span> to help you crack top product roles.
          </motion.p>

          {/* Action Buttons - Fully Functional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 mb-24 z-20"
          >
            <button
              onClick={() => scrollToSection('course')}
              className="group relative px-5 py-2 bg-orange-600 hover:bg-orange-500 text-white font-black text-md rounded-2xl transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(234,88,12,0.4)] active:scale-95 h-15"
            >
              START CHALLENGE
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/9932980664', '_blank')}
              className="px-10 py-5 border-2 border-white/10 hover:border-white/20 bg-white/5 text-white font-bold text-md rounded-2xl transition-all backdrop-blur-sm active:scale-95"
            >
              REQUEST CALLBACK
            </button>
          </motion.div>

          {/* INFINITE SCROLL SECTION (Student Placement Cards) */}
          <div className="w-screen relative    overflow-hidden py-12 bg-black/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 ">

              {/* Left Side: Cool Static Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col items-start text-left shrink-0 z-20"
              >
                <h2 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tighter">
                  NEXT CAN <br />
                  <span className="text-orange-500 italic underline decoration-white/20 underline-offset-8">BE YOU!</span>
                </h2>
                <p className="text-neutral-500 font-bold mt-4 text-sm uppercase tracking-[0.3em]">
                  Join the elite 1%
                </p>

                {/* Decorative arrow or line */}
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-orange-600 to-transparent rounded-full" />
              </motion.div>

              {/* Right Side: Smooth Infinite Scroller */}
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                  animate={{ x: [0, -1920] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="flex gap-6 whitespace-nowrap py-4"
                >
                  {[...placements, ...placements].map((item, idx) => (
                    <div
                      key={idx}
                      className="relative w-64 h-[380px] bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-white/10 group hover:border-orange-500/50 transition-all duration-500 shrink-0 shadow-2xl"
                    >
                      {/* Background Image */}
                      <img
                        src={item.img}
                        className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        alt={item.name}
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      {/* Placement Info */}
                      <div className="absolute bottom-8 left-6 right-6 text-left">
                        <div className="text-4xl font-black text-white mb-1 tracking-tighter">
                          {item.pkg}
                        </div>
                        <div className="flex items-center gap-2 mb-3 bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-md border border-white/5">
                          <span className="text-[10px] text-white font-black uppercase tracking-widest">{item.company}</span>
                        </div>
                        <div className="text-xs font-bold text-neutral-400 uppercase tracking-tighter flex items-center gap-2">
                          {item.name} <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-screen transformation section */}
      <TransformationSection />
    </>
  )
}