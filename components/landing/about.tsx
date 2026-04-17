import { BookOpen, Users, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            About Our Platform
          </h2>
          <p className="mb-12 text-muted-foreground md:text-lg">
            Empowering students with disabilities through accessible English education
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 rounded-2xl bg-card p-8 shadow-sm md:p-12">
            <p className="text-center text-lg leading-relaxed text-foreground md:text-xl">
              Our platform is specifically designed to help students with disabilities at 
              Hassiba Benbouali University of Chlef learn English in a way that aligns with 
              their university modules and academic specializations. We believe that every 
              student deserves equal access to quality education, regardless of their physical 
              abilities.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Curriculum Aligned</h3>
              <p className="text-sm text-muted-foreground">
                Content designed to match university modules and academic requirements
              </p>
            </div>
            
            <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Inclusive Design</h3>
              <p className="text-sm text-muted-foreground">
                Built from the ground up with accessibility as a core principle
              </p>
            </div>
            
            <div className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Personalized Learning</h3>
              <p className="text-sm text-muted-foreground">
                Adaptive content tailored to each student&apos;s needs and pace
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
