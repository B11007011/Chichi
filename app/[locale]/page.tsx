import { HeroSection } from '@/components/sections/HeroSection'
import { TeacherTeam } from '@/components/sections/TeacherTeam'
import { CourseFeatures } from '@/components/sections/CourseFeatures'
import { LearningEnvironment } from '@/components/sections/LearningEnvironment'
import { LanguageLevels } from '@/components/sections/LanguageLevels'
import { PartnersAndFooter } from '@/components/sections/PartnersAndFooter'
import { TestimonialsSection } from '@/components/sections/Testimonials'
import { CTAPopup } from '@/components/CTAPopup'
import { useTranslations } from '@/lib/i18n'

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <CTAPopup locale={locale} />
      <HeroSection locale={locale} />
      <TeacherTeam locale={locale} />
      <CourseFeatures locale={locale} />
      <LanguageLevels locale={locale} />
      <LearningEnvironment locale={locale} />
      <TestimonialsSection locale={locale} />
      
      
      <PartnersAndFooter locale={locale} />
    </div>
  )
} 