import { Video, Headphones, PenTool, Accessibility, BookMarked } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "Sign Language Video Lessons",
    description: "Comprehensive video lessons with sign language interpretation for deaf students, ensuring clear communication of all educational content.",
  },
  {
    icon: Headphones,
    title: "Audio-Based Learning",
    description: "Rich audio content with screen reader compatibility and voice navigation for blind students to access all learning materials.",
  },
  {
    icon: PenTool,
    title: "Interactive Exercises & Quizzes",
    description: "Engaging exercises and assessments designed with accessibility in mind, supporting various input methods and assistive technologies.",
  },
  {
    icon: Accessibility,
    title: "Adaptive & Accessible Interface",
    description: "Fully customizable interface with high contrast modes, adjustable text sizes, and keyboard navigation support.",
  },
  {
    icon: BookMarked,
    title: "University Curriculum Content",
    description: "Learning materials aligned with Hassiba Benbouali University curriculum, ensuring academic relevance and progression.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Platform Features
          </h2>
          <p className="mb-12 text-muted-foreground md:text-lg">
            Designed with accessibility at its core, our platform offers specialized 
            features to support every student&apos;s learning journey.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
