import { Languages, Stethoscope, Users, TrendingUp } from "lucide-react"

const specializations = [
  {
    icon: Languages,
    title: "English for English Language Students",
    description: "Advanced English studies for language and literature students. Develop your linguistic skills, literary analysis, and academic writing abilities.",
    topics: ["Advanced Grammar", "Literary Analysis", "Academic Writing", "Linguistics"],
  },
  {
    icon: Stethoscope,
    title: "English for Medical Students",
    description: "Specialized vocabulary and communication skills for medical and healthcare students. Learn terminology, patient interaction, and medical documentation in English.",
    topics: ["Medical Terminology", "Patient Communication", "Clinical Documentation", "Healthcare Ethics"],
  },
  {
    icon: Users,
    title: "English for Social Science Students",
    description: "English for psychology, sociology, and social work students. Master academic discourse, research writing, and professional communication in social sciences.",
    topics: ["Research Writing", "Academic Discourse", "Case Studies", "Social Terminology"],
  },
  {
    icon: TrendingUp,
    title: "English for Economics Students",
    description: "Professional English for economics, finance, and business students. Master economic terminology, financial reporting, and professional correspondence.",
    topics: ["Economic Terminology", "Financial Reports", "Business Communication", "Data Presentation"],
  },
]

export function Specializations() {
  return (
    <section id="specializations" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Choose Your Branch
          </h2>
          <p className="mb-12 text-muted-foreground md:text-lg">
            English courses adapted to your academic specialty, helping you master 
            the language relevant to your field of study.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl bg-card p-8 shadow-sm"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <spec.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {spec.title}
              </h3>
              <p className="mb-6 flex-grow text-muted-foreground">
                {spec.description}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Key Topics:</p>
                <ul className="space-y-1">
                  {spec.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
