'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Mic, Crown, X, CheckCircle, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

const plans = [
  {
    id: 'basic',
    icon: Clock,
    price: '₹9',
    title: 'Student Session',
    subtitle: '20 min with placed student',
    features: ['1:1 with a placed student', '20-minute session', 'Career advice', 'Resume tips'],
  },
  {
    id: 'mock',
    icon: Mic,
    price: '₹99',
    title: 'Mock Interview',
    subtitle: 'Real interview simulation',
    features: ['Full mock interview', 'HR + Technical rounds', 'Performance report', 'Follow-up Q&A'],
    popular: true, // Just for the badge text, styling is now hover-based
  },
  {
    id: 'premium',
    icon: Crown,
    price: '₹999',
    title: 'Premium Interview',
    subtitle: 'Detailed feedback & coaching',
    features: ['Expert interviewer', 'Detailed written feedback', 'Skill gap analysis', '3 interview rounds', '1 month support'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.4 } },
}

export default function InterviewSection() {
  const [modal, setModal] = useState<string | null>(null)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const selectedPlan = plans.find((p) => p.id === modal)

  const handleBook = (planId: string, planTitle: string) => {
    setModal(null)
    toast.success('Interview Scheduled! 🎉', {
      description: `Your ${planTitle} has been booked. Check your email.`,
    })
  }

  return (
    <section id="interview" className="py-24 px-4 relative overflow-hidden bg-[#050505]">
      {/* Background ambient glow - follows the hovered card conceptually */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-orange-500/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-6 backdrop-blur-md">
            <Crown className="w-3.5 h-3.5 text-orange-400" />
            <span>Elevate Your Preparation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-white">
            Book an <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Interview Session</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose a plan that fits your needs. Get real feedback, conquer your fears, and land that dream job.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          onMouseLeave={() => setHoveredPlan(null)}
        >
          {plans.map((plan) => {
            const isHovered = hoveredPlan === plan.id;
            const isDimmed = hoveredPlan !== null && hoveredPlan !== plan.id;

            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                className={`relative group rounded-[2rem] p-8 flex flex-col gap-6 transition-all duration-500 overflow-hidden cursor-pointer
                  ${isHovered 
                    ? 'bg-[#111] border-orange-500/50 shadow-[0_0_50px_rgba(255,107,0,0.15)] -translate-y-4 z-20 scale-[1.02]' 
                    : 'bg-[#0a0a0a] border-white/10 z-10 scale-100 translate-y-0'}
                  ${isDimmed ? 'opacity-40 blur-[2px]' : 'opacity-100 blur-0'}
                `}
                style={{ borderWidth: '1px' }}
              >
                {/* Dynamic Gradient Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 pointer-events-none
                  ${isHovered ? 'from-orange-500/20 via-black to-black opacity-100' : 'from-gray-500/5 to-transparent opacity-50'}`} 
                />
                
                {/* Animated Shine Effect ONLY on Hover */}
                {isHovered && (
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                  />
                )}

                {/* Optional Badge */}
                {plan.popular && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-b-xl shadow-lg transition-colors duration-500
                    ${isHovered ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black' : 'bg-white/10 text-gray-400'}
                  `}>
                    Most Popular
                  </div>
                )}

                {/* Card Header (Icon & Title) */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner transition-colors duration-500
                    ${isHovered ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-gray-500'}`}
                  >
                    <plan.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className={`font-semibold text-lg transition-colors duration-500 ${isHovered ? 'text-white' : 'text-gray-300'}`}>{plan.title}</p>
                    <p className="text-xs text-gray-500">{plan.subtitle}</p>
                  </div>
                </div>

                {/* Price Tag */}
                <div className={`relative z-10 py-4 border-y transition-colors duration-500 ${isHovered ? 'border-orange-500/20' : 'border-white/5'}`}>
                  <p className={`text-5xl font-display font-black tracking-tighter transition-colors duration-500
                    ${isHovered ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500' : 'text-gray-400'}`}
                  >
                    {plan.price}
                  </p>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3 relative z-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-500 ${isHovered ? 'text-orange-500' : 'text-gray-600'}`} />
                      <span className={`transition-colors duration-500 ${isHovered ? 'text-gray-200' : 'text-gray-500'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button
                  onClick={() => setModal(plan.id)}
                  className={`relative z-10 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 mt-4 active:scale-95 flex items-center justify-center gap-2
                    ${isHovered 
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-[0_0_20px_rgba(255,107,0,0.3)]' 
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'}`}
                >
                  <span>Book Session</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Booking Modal (Premium Glassmorphic) */}
      <AnimatePresence>
        {modal && selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#111] border border-orange-500/30 rounded-[2rem] p-8 max-w-sm w-full relative shadow-[0_0_50px_rgba(255,107,0,0.15)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/20 via-black to-black opacity-50 pointer-events-none`} />

              <button
                onClick={() => setModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative z-10 flex flex-col items-center text-center mt-2">
                <div className="w-16 h-16 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center mb-5 shadow-inner">
                  <selectedPlan.icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-1">{selectedPlan.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{selectedPlan.subtitle}</p>
                
                <div className="w-full h-px bg-white/10 mb-6" />

                <p className="text-sm text-gray-400 mb-2">Total Amount</p>
                <p className="text-4xl font-display font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                  {selectedPlan.price}
                </p>

                <button
                  onClick={() => handleBook(selectedPlan.id, selectedPlan.title)}
                  className="w-full py-4 rounded-xl text-sm font-bold active:scale-95 bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-transform duration-200"
                >
                  Confirm & Pay Securely
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}