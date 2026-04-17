import { Building2, MapPin, Heart } from "lucide-react"

export function UniversityContext() {
  return (
    <section id="university" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                Developed for Hassiba Benbouali University
              </h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                This platform is developed in the context of Hassiba Benbouali University 
                of Chlef, one of Algeria&apos;s leading public universities committed to 
                inclusive education and equal opportunities for all students.
              </p>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Our mission aligns with the university&apos;s vision of providing accessible, 
                quality education that prepares all students for success in their academic 
                and professional journeys. By focusing on English language learning for 
                students with disabilities, we aim to bridge the gap and ensure no student 
                is left behind.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-sm text-muted-foreground">Chlef, Algeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mission</h4>
                    <p className="text-sm text-muted-foreground">Supporting inclusive education in Algeria</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-sm">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-foreground">
                  Hassiba Benbouali University of Chlef
                </h3>
                <p className="mb-6 text-muted-foreground">
                  A public university dedicated to academic excellence and inclusive education, 
                  serving students across Algeria with diverse programs and support services.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-primary">~38</p>
                    <p className="text-xs text-muted-foreground">Students with Disabilities</p>
                  </div>
                  <div className="rounded-lg bg-card p-4 text-center shadow-sm">
                    <p className="text-2xl font-bold text-primary">12</p>
                    <p className="text-xs text-muted-foreground">Faculties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
