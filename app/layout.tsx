import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from '@/components/theme-provider'
import Link from 'next/link'
import Image from 'next/image'
import { LanguageSwitcher } from '@/components/language-switcher'
import { MobileNav } from '@/components/mobile-nav'
import { colors } from '@/lib/colors'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "越學越通 - 專業越南語教學",
  description: "專業越南語教學，線上線下課程，量身打造學習計畫",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header 
            className="sticky top-0 z-50 w-full border-b"
            style={{ 
              backgroundColor: colors.lightCream,
              borderColor: colors.secondary 
            }}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/logo.png"
                    alt="Chi Chi Logo"
                    width={48}
                    height={48}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                  <span 
                    className="font-medium text-lg"
                    style={{ color: colors.darkOlive }}
                  >
                    越學越通
                  </span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                  {[
                    { href: '#about', label: '關於我們' },
                    { href: '#courses', label: '課程介紹' },
                    { href: '#contact', label: '聯絡我們' }
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative py-2 transition-colors hover:text-[#b17f4a] group"
                      style={{ color: colors.darkOlive }}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#b17f4a] transform scale-x-0 transition-transform group-hover:scale-x-100" />
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center space-x-4">
                  <LanguageSwitcher />
                  <MobileNav />
                </div>
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'