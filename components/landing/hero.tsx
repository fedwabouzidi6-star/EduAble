"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <GraduationCap className="h-4 w-4" />
            <span>Hassiba Benbouali University of Chlef</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Inclusive English Learning Platform
          </h1>
          
          <p className="mb-4 text-xl font-medium text-primary md:text-2xl">
            Accessible and specialized English learning for students with disabilities
          </p>
          
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-muted-foreground md:text-lg">
            Developed for Hassiba Benbouali University of Chlef, Algeria, our platform provides 
            tailored English education for deaf, blind, and physically disabled students, 
            ensuring equal access to quality language learning.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
    </section>
  )
}
