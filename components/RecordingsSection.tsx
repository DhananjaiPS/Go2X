'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Lock, X, Eye, Server, Database, Network, Crown, Code, Sparkles, LayoutTemplate } from 'lucide-react'
import { toast } from 'sonner'

const recordings = [
  {
    id: 'free',
    title: 'Google SDE-2 Interview',
    company: 'Google',
    package: '15 LPA',
    duration: '42 min',
    type: 'Free',
    locked: false,
    description: 'Full mock interview simulation for Google Software Engineer role. Watch for free!',
    theme: 'from-blue-500 to-cyan-400',
    glowColor: 'rgba(56, 189, 248, 0.4)', // Cyan glow
    badgeTheme: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  },
  {
    id: 'paid',
    title: 'Amazon Senior Engineer',
    company: 'Amazon',
    package: '20 LPA',
    duration: '58 min',
    type: 'Paid',
    locked: true,
    description: 'In-depth Amazon SDE-3 interview with system design round.',
    theme: 'from-orange-500 to-amber-500',
    glowColor: 'rgba(249, 115, 22, 0.4)', // Orange glow
    badgeTheme: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  },
  {
    id: 'premium',
    title: '1 Crore Package Interview',
    company: 'Big Tech',
    package: '1 Cr+',
    duration: '90 min',
    type: 'Premium',
    locked: true,
    description: 'Secret. Available only for premium members.',
    theme: 'from-yellow-400 to-amber-600',
    glowColor: 'rgba(250, 204, 21, 0.4)', // Gold glow
    badgeTheme: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
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

export default function RecordingsSection() {
  const [modal, setModal] = useState<string | null>(null)
  const [hoveredRec, setHoveredRec] = useState<string | null>(null)

  const handleAction = (rec: (typeof recordings)[0]) => {
    if (!rec.locked) {
      setModal(rec.id)
    } else if (rec.type === 'Paid') {
      toast.success('Payment simulated! Recording unlocked 🎥', {
        description: 'You now have access to this interview recording.',
      })
    } else {
      toast.error('Premium Content', {
        description: 'Upgrade to Premium to unlock this exclusive recording.',
      })
    }
  }

  // Dynamic Stylized Thumbnails using CSS & Icons
  const renderThumbnail = (id: string) => {
    switch (id) {
      case 'free':
        return (
          <div className="absolute inset-0 bg-[#0a192f] overflow-hidden">
            {/* Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
            {/* Floating Elements */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-6 top-8">
              <Code className="w-16 h-16 text-blue-500/20" />
            </motion.div>
            <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute right-8 bottom-6">
              <LayoutTemplate className="w-12 h-12 text-cyan-400/20" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>
        )
      case 'paid':
        return (
          <div className="absolute inset-0 bg-[#2a1200] overflow-hidden">
            {/* System Design Nodes */}
            <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute left-1/2 -translate-x-1/2 top-6">
              <Server className="w-10 h-10 text-orange-500/30" />
            </motion.div>
            <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute left-8 bottom-10">
              <Database className="w-10 h-10 text-orange-400/30" />
            </motion.div>
            <motion.div animate={{ x: [3, -3, 3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute right-8 bottom-10">
              <Network className="w-10 h-10 text-amber-500/30" />
            </motion.div>
            {/* Connecting lines simulation */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
               <path d="M 150 40 L 60 120 M 150 40 L 250 120" stroke="orange" strokeWidth="2" strokeDasharray="5,5" fill="none" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>
        )
      case 'premium':
        return (
          <div className="absolute inset-0 bg-[#241a00] overflow-hidden flex items-center justify-center">
            {/* Golden Aura & Crown */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15)_0,transparent_60%)]" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(250,204,21,0.1)_360deg)]" />
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}>
               <Crown className="w-20 h-20 text-yellow-500/20" />
            </motion.div>
            {/* Sparkles */}
            <Sparkles className="absolute top-8 left-12 w-6 h-6 text-yellow-400/30" />
            <Sparkles className="absolute bottom-12 right-12 w-8 h-8 text-amber-500/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="recordings" className="py-24 px-4 relative overflow-hidden bg-[#050505]">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-orange-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#111] border border-white/10 text-xs text-gray-400 mb-6 shadow-lg">
            <Play className="w-3.5 h-3.5 text-orange-400" />
            <span className="tracking-wide">Exclusive Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white tracking-tight">
            Interview <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Recordings</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium">
            Watch real, unfiltered interview recordings from candidates who cracked top-tier tech companies.
          </p>
        </motion.div>

        {/* Recordings Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          onMouseLeave={() => setHoveredRec(null)}
        >
          {recordings.map((rec) => {
            const isHovered = hoveredRec === rec.id;
            const isDimmed = hoveredRec !== null && hoveredRec !== rec.id;

            return (
              <motion.div
                key={rec.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredRec(rec.id)}
                className={`relative group rounded-[2rem] flex flex-col transition-all duration-500 cursor-pointer overflow-hidden
                  ${isHovered 
                    ? 'bg-[#111] -translate-y-4 z-30 scale-105' 
                    : 'bg-[#0a0a0a] z-10 scale-100 translate-y-0'}
                  ${isDimmed ? 'opacity-40 blur-[3px] scale-[0.98]' : 'opacity-100 blur-0'}
                `}
                style={{ 
                  borderWidth: '1px',
                  borderColor: isHovered ? rec.glowColor.replace('0.4', '0.6') : 'rgba(255,255,255,0.08)',
                  boxShadow: isHovered ? `0 0 60px ${rec.glowColor}` : '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                
                {/* ================================================== */}
                {/* 🌟 ILLUSTRATIVE THUMBNAIL (h-48) 🌟 */}
                {/* ================================================== */}
                <div className="relative h-48 w-full flex items-center justify-center overflow-hidden border-b border-white/5">
                  {renderThumbnail(rec.id)}

                  {/* Top Right Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${rec.badgeTheme}`}>
                      {rec.type}
                    </span>
                  </div>

                  {/* Center Overlay (Lock or Play) */}
                  <div className={`absolute inset-0 z-10 flex items-center justify-center transition-all duration-500
                    ${rec.locked ? 'backdrop-blur-xl bg-black/50' : 'bg-black/10 group-hover:bg-black/40'}
                  `}>
                    <div className={`w-16 h-16 rounded-full border flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}
                      ${rec.locked ? 'bg-black/60 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]' : `bg-gradient-to-r ${rec.theme} border-transparent shadow-[0_0_30px_${rec.glowColor}]`}
                    `}>
                      {rec.locked ? (
                        <Lock className="w-7 h-7 text-white/70" />
                      ) : (
                        <Play className="w-7 h-7 text-black ml-1" fill="currentColor" />
                      )}
                    </div>
                  </div>
                </div>

                {/* ================================================== */}
                {/* 🌟 CARD CONTENT 🌟 */}
                {/* ================================================== */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div>
                    <p className={`font-display font-bold text-xl transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-200'}`}>
                      {rec.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-medium tracking-wide">
                      {rec.company} • {rec.duration} • <span className={`text-transparent bg-clip-text bg-gradient-to-r ${rec.theme} font-bold`}>{rec.package}</span>
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">
                    {rec.description}
                  </p>

                  {/* Action Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.stopPropagation(); handleAction(rec); }}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 mt-2
                      ${!rec.locked
                        ? `bg-gradient-to-r ${rec.theme} text-black shadow-[0_0_20px_${rec.glowColor}]`
                        : isHovered
                        ? `bg-white/10 border border-white/20 text-white`
                        : 'bg-white/5 border border-white/5 text-gray-400'
                      }`}
                  >
                    {!rec.locked ? (
                      <><Eye className="w-4 h-4" /> Watch Now</>
                    ) : rec.type === 'Paid' ? (
                      <><Lock className="w-4 h-4" /> Unlock for ₹99</>
                    ) : (
                      <><Crown className="w-4 h-4" /> Premium Only</>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ================================================== */}
      {/* 🌟 SLEEK VIDEO PLAYER MODAL 🌟 */}
      {/* ================================================== */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Simulated Video Area */}
              <div className="relative w-full aspect-video bg-black flex flex-col items-center justify-center overflow-hidden">
                 {/* Video Player Glow */}
                 <div className="absolute inset-0 bg-blue-500/10 blur-[100px]" />
                 
                 <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 backdrop-blur-md cursor-pointer hover:bg-white/20 transition-colors">
                    <Play className="w-10 h-10 text-white ml-2" fill="currentColor" />
                 </div>
                 <h3 className="font-display text-2xl font-bold text-white z-10">Now Playing</h3>
                 <p className="text-gray-400 text-sm z-10">
                   {recordings.find((r) => r.id === modal)?.title}
                 </p>

                 {/* Top Controls Bar */}
                 <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                    <span className="text-white font-medium text-sm px-3 py-1 bg-white/10 rounded-full backdrop-blur-md">Simulated Playback</span>
                    <button
                      onClick={() => setModal(null)}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
                    >
                      <X className="w-5 h-5" />
                    </button>
                 </div>

                 {/* Bottom Player Controls */}
                 <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-3">
                    <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer relative">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 3, ease: 'linear' }}
                        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 font-medium">
                      <span>18:45</span>
                      <span>42:00</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}