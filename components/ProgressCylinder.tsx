'use client'

import { motion } from 'framer-motion'

interface ProgressCylinderProps {
  percentage: number
  size?: 'sm' | 'lg'
}

// Inline Google Logo Component
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function ProgressCylinder({ percentage, size = 'lg' }: ProgressCylinderProps) {
  const clampedPct = Math.min(100, Math.max(0, percentage))
  const isSmall = size === 'sm'
  const width = isSmall ? 60 : 100
  const height = isSmall ? 180 : 320

  const glowColor =
    clampedPct < 30
      ? 'rgba(255,107,0,0.15)'
      : clampedPct < 70
      ? 'rgba(255,107,0,0.4)'
      : 'rgba(255,200,0,0.6)'

  const liquidColor =
    clampedPct < 30 ? '#ff6b00' : clampedPct < 70 ? '#ff8c00' : '#ffd700'

  return (
    <div className={`flex flex-col items-center relative w-full ${isSmall ? 'pt-24' : 'pt-32'}`}>
      {/* BADHAYA HUA GAP YAHAN HAI: pt-24 for small, pt-32 for large */}
      
      {/* ================================================== */}
      {/* 🌟 THE GOD LOGO FLOATING ON TOP OF THE CYLINDER 🌟 */}
      {/* ================================================== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        {/* Outer 360 God Rays */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: isSmall ? 100 : 180,
            height: isSmall ? 100 : 180,
            background: 'repeating-conic-gradient(from 0deg, transparent 0deg 15deg, rgba(255, 215, 0, 0.20) 15deg 30deg)',
            WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 60%)',
          }}
        />
        {/* Glow Core */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bg-yellow-400/40 rounded-full blur-2xl pointer-events-none"
          style={{
            width: isSmall ? 60 : 90,
            height: isSmall ? 60 : 90,
          }}
        />
        {/* Logo Box */}
        <div className="relative z-10 p-[2px] rounded-[1.25rem] bg-gradient-to-b from-white/20 to-transparent">
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white rounded-[1rem] shadow-[0_0_50px_rgba(255,215,0,0.4)] border border-white/50 flex items-center justify-center overflow-hidden"
            style={{
              width: isSmall ? 40 : 64,
              height: isSmall ? 40 : 64,
              padding: isSmall ? '8px' : '12px'
            }}
          >
            <GoogleLogo />
          </motion.div>
        </div>
      </div>
      {/* ================================================== */}

      {/* The Cylinder */}
      {/* EXTRA MARGIN YAHAN BHI ADD KIYA HAI: mt-4 */}
      <div className="relative z-10 mt-4" style={{ width, height }}>
        <div
          className="relative w-full h-full overflow-hidden border border-white/10"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.04), rgba(255,255,255,0.01), rgba(255,255,255,0.04))',
            borderRadius: '50px',
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.6)', borderRadius: '50px' }}
          />

          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ height: '0%' }}
            animate={{ height: `${clampedPct}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              background: `linear-gradient(to top, ${liquidColor}CC, ${liquidColor}88)`,
              borderRadius: '0 0 50px 50px',
            }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0"
              style={{ height: 8 }}
              animate={{ scaleX: [1, 1.05, 0.95, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `${liquidColor}FF`,
                  borderRadius: '50%',
                  transform: 'scaleY(0.5)',
                }}
              />
            </motion.div>
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, transparent 0%, ${liquidColor}33 100%)`,
              }}
            />
          </motion.div>

          <div
            className="absolute top-0 left-0 w-1/3 h-full pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(255,255,255,0.08), transparent)',
              borderRadius: '50px 0 0 50px',
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <span
              className="font-display font-bold text-white drop-shadow-md"
              style={{ fontSize: isSmall ? 14 : 20, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              {Math.round(clampedPct)}%
            </span>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ borderRadius: '50px' }}
          animate={{
            boxShadow: [
              `0 0 20px ${glowColor}`,
              `0 0 40px ${glowColor}`,
              `0 0 20px ${glowColor}`,
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}