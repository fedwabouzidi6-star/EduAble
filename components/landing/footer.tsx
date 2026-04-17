import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">
                Inclusive English
              </span>
            </a>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              An accessible English learning platform designed for students with 
              disabilities at Hassiba Benbouali University of Chlef, Algeria.
            </p>
            <p className="text-xs text-muted-foreground">
              Supporting inclusive education in Algeria
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#specializations" className="text-muted-foreground hover:text-foreground">
                  Courses
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Inclusive English Learning Platform. 
            Hassiba Benbouali University of Chlef. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
