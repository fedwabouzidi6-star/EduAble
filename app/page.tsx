import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Features } from "@/components/landing/features"
import { Specializations } from "@/components/landing/specializations"
import { Pricing } from "@/components/landing/pricing"
import { TargetUsers } from "@/components/landing/target-users"
import { UniversityContext } from "@/components/landing/university-context"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Specializations />
        <Pricing />
        <TargetUsers />
        <UniversityContext />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
