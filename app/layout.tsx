import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sleek - Science-Backed Weight Loss & Metabolic Health',
  description: 'Transform your health with personalized GLP-1 prescriptions, expert guidance, and science-backed metabolic management. Join thousands of members achieving sustainable weight loss.',
  keywords: ['weight loss', 'metabolic health', 'GLP-1', 'health coaching', 'personalized treatment'],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth bg-white`}>
      <body className="font-manrope antialiased bg-white text-gray-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
