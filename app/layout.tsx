import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DreamJob - India\'s #1 Job Placement Platform',
  description: 'Join 50,000+ students who\'ve landed offers at top companies through our proven 50-day challenge system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
