import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Monthly Subscription",
    price: "300 DZD",
    period: "month",
    description: "Full access with flexible monthly payments",
    features: [
      "All English lessons",
      "Specialization courses",
      "Unlimited exercises and quizzes",
      "Progress tracking",
      "Accessibility features included",
    ],
    cta: "Subscribe Monthly",
    highlighted: false,
  },
  {
    name: "Annual Subscription",
    price: "3,000 DZD",
    period: "year",
    description: "Best value - save over 15% with annual billing",
    features: [
      "All Monthly features",
      "Priority support",
      "Certificates",
      "Offline access",
      "Advanced accessibility tools",
      "2 months free",
    ],
    cta: "Subscribe Annually",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Simple, Accessible Pricing
          </h2>
          <p className="mb-6 text-muted-foreground md:text-lg">
            Our freemium model ensures that every student can access quality English 
            education while premium features support platform sustainability.
          </p>
          <p className="mb-12 text-sm text-muted-foreground">
            We believe accessibility should never be a paid feature. All accessibility 
            tools are included in both plans.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-primary bg-card shadow-lg"
                  : "border border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  Best Value
                </div>
              )}
              
              <h3 className="mb-2 text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              
              <ul className="mb-8 flex-grow space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
