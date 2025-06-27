import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { ScrollToTop } from '@/components/ScrollToTop'
import { QuickContact } from '@/components/QuickContact'
import type { Locale } from '@/lib/i18n'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chi Chi Language School',
  description: 'Learn Vietnamese, English, and Chinese at Chi Chi Language School',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <Header locale={locale as Locale} />
        <main className="flex-1 pb-16 md:pb-0 pt-14 sm:pt-16">{children}</main>
        <ScrollToTop />
        <QuickContact locale={locale} />
      </div>
    </>
  )
} 