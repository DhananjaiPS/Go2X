'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { UserState } from '@/app/page'

interface NavbarProps {
  user: UserState
}

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Courses', href: '#courses' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Interview', href: '#interview' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Leaderboard', href: '#leaderboard' },
]

export default function Navbar({ user }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-xl border-b border-white/5 bg-background/80"
    >
      <a href="#hero" className="flex items-center gap-2">
          <img src="https://www.go2x.live/_next/image?url=%2Flogo_noBg.png&w=384&q=75" alt="" className='w-50 h-10 sm:pl-20 '/>

        
    </a>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {user.isRegistered ? (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-black">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-xs text-primary font-medium">{user.points} pts</span>
          </div>
        ) : (
          <a
            href="#register"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] text-white cursor-pointer"
          >
            Get Started
          </a>
        )}
      </div>
    </motion.nav>
  )
}
