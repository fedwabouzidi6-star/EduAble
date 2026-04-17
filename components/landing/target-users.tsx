import { Eye, EyeOff, Hand, Users } from "lucide-react"

const userGroups = [
  {
    icon: Hand,
    title: "Deaf Students",
    description: "Full access through sign language video lessons, visual cues, and text-based learning materials.",
  },
  {
    icon: EyeOff,
    title: "Blind Students",
    description: "Complete audio support with screen reader compatibility, voice navigation, and audio-described content.",
  },
  {
    icon: Eye,
    title: "Visually Impaired",
    description: "High contrast modes, adjustable text sizes, and customizable display settings for comfortable reading.",
  },
  {
    icon: Users,
    title: "Physically Disabled",
    description: "Full keyboard navigation, voice commands, and adaptive input methods for easy interaction.",
  },
]

export function TargetUsers() {
  return (
    <section id="students" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Who We Serve
          </h2>
          <p className="mb-12 text-muted-foreground md:text-lg">
            Our platform is specifically designed for students with disabilities at 
            Hassiba Benbouali University of Chlef, providing tailored support for 
            diverse accessibility needs.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {userGroups.map((group, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-sm"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <group.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
