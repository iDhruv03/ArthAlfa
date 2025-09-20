import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// ✅ metadata without viewport
export const metadata: Metadata = {
  title: 'ArthAlfa - Your Trusted Partner',
  description: 'Professional services and solutions for your business needs',
  keywords: 'business, services, solutions, professional, consulting',
  authors: [{ name: 'ArthAlfa Team' }],
}

// ✅ separate viewport export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
