import { Toaster } from '@/components/ui/sonner'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LogoCarousel } from '@/components/LogoCarousel'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { Testimonials } from '@/components/Testimonials'
import { CTASection } from '@/components/CTASection'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <Hero />
        <LogoCarousel />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </main>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-muted-foreground text-center">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>
      </footer>

      <Toaster position="bottom-right" />
    </div>
  )
}

export default App
