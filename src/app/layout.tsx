import './globals.css'
import { Inter, Quicksand } from 'next/font/google'
import ClientFloatingIcons from '@/components/ClientFloatingIcons'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' })

export const metadata = {
  title: 'My Futuristic Portfolio',
  description: 'A modern and feminine portfolio showcasing my creative work and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quicksand.variable} font-sans min-h-screen`}>
        <div className="relative">
          {/* Decorative background elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full rotate-12 bg-gradient-to-br from-pink-200/20 to-purple-300/20 rounded-full animate-float" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-pink-300/30 to-purple-400/30 rounded-full blur-3xl" />
          </div>
          <ClientFloatingIcons />
          {children}
        </div>
      </body>
    </html>
  )
}
