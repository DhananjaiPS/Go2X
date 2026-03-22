'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Mail, CheckCircle, BookOpen, Briefcase, ShieldCheck, Zap, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import { UserState } from '@/app/page'

interface RegistrationSectionProps {
  user: UserState
  onRegister: (name: string, email: string) => void
}

export default function RegistrationSection({ user, onRegister }: RegistrationSectionProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    onRegister(name.trim(), email.trim())
    setSubmitted(true)
    toast.success(`Access Granted, ${name}! 🚀`, {
      description: 'System identity verified. Choose your deployment path.',
      style: { background: '#0a0a0a', color: '#fff', border: '1px solid #ff6b0033' }
    })
  }

  const handleChoosePath = (path: 'course' | 'interview') => {
    if (path === 'course') {
      toast.success('Neural Link Established!', {
        description: 'You are now enrolled in the 50-Day Challenge.',
      })
      document.getElementById('course')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      toast.success('Interview Protocol Initiated!', {
        description: 'Preparing your mock interview environment.',
      })
      document.getElementById('interview')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="register" className="py-32 px-4 relative overflow-hidden bg-[#050505]">
      
      {/* 🌟 AMBIENT BACKGROUND GLOWS 🌟 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-orange-600/10 blur-[150px] pointer-events-none rounded-full z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 shadow-lg backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Encrypted Registration Portal</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black mb-4 tracking-tighter text-white uppercase ">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">Profile</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto font-medium">
            Create your identity in the ecosystem. Join the top 1% of developers transforming their careers today.
          </p>
        </motion.div>

        {/* 🌟 AUTHENTICATION TERMINAL 🌟 */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 100 }}
          className="relative glass-card rounded-[3rem] p-8 md:p-14 border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Subtle Grid Background inside Card */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted && !user.isRegistered ? (
              
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSubmit} 
                className="relative z-10 flex flex-col gap-6 w-full max-w-md mx-auto"
              >
                
                {/* Name Input */}
                <div className="flex flex-col gap-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-orange-500 transition-colors">
                    Developer Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dhananjai Pratap"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#111] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all shadow-inner font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1 group-focus-within:text-orange-500 transition-colors">
                    Secure Comm Link (Email)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-orange-500 transition-colors" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#111] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all shadow-inner font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <motion.button
                  whileHover={{ scale: 1.02, letterSpacing: '0.1em' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="relative overflow-hidden w-full py-5 mt-4 rounded-2xl bg-orange-500 text-black font-black uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,107,0,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {/* Cyber Sweep Shine */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 opacity-50"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                  <Zap className="w-5 h-5 fill-black z-10" />
                  <span className="relative z-10">Request Access</span>
                </motion.button>
              </motion.form>

            ) : (

              /* 🌟 SUCCESS STATE: PATH SELECTOR 🌟 */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center gap-8 w-full"
              >
                {/* Animated Success Badge */}
                <div className="relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-10px] border-2 border-dashed border-orange-500/30 rounded-full"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center relative z-10 bg-gradient-to-br from-orange-500 to-yellow-500 shadow-[0_0_40px_rgba(255,107,0,0.5)]"
                  >
                    <CheckCircle className="w-10 h-10 text-black" strokeWidth={2.5} />
                  </motion.div>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-display font-black mb-2 text-white uppercase italic tracking-tight">
                    Identity <span className="text-orange-500">Verified</span>
                  </h3>
                  <p className="text-gray-400 font-medium">Welcome to the grid, <span className="text-white font-bold">{user.isRegistered ? user.name : name}</span>. Select your deployment protocol.</p>
                </div>

                {/* Path Selection Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
                  
                  {/* Course Path */}
                  <motion.button
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleChoosePath('course')}
                    className="group relative p-6 md:p-8 rounded-[2rem] bg-[#111] border border-white/10 hover:border-orange-500/40 transition-all overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <BookOpen className="w-8 h-8 text-orange-500" />
                    </div>
                    <p className="font-black text-white text-lg uppercase tracking-tight mb-1 group-hover:text-orange-500 transition-colors">50-Day Mastery</p>
                    <p className="text-xs text-gray-500 font-medium mb-4">Structured coding & design path.</p>
                    <div className="mt-auto flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-orange-500">
                      Engage <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>

                  {/* Interview Path */}
                  <motion.button
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleChoosePath('interview')}
                    className="group relative p-6 md:p-8 rounded-[2rem] bg-[#111] border border-white/10 hover:border-blue-500/40 transition-all overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                      <Briefcase className="w-8 h-8 text-blue-400" />
                    </div>
                    <p className="font-black text-white text-lg uppercase tracking-tight mb-1 group-hover:text-blue-400 transition-colors">Combat Simulator</p>
                    <p className="text-xs text-gray-500 font-medium mb-4">Live mock interviews & feedback.</p>
                    <div className="mt-auto flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-blue-400">
                      Engage <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  )
}