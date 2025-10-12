import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-primary p-12 md:p-16 lg:p-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Start Creating Impact Today
            </h2>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Join leading organizations using TerraSense AI to restore land health, boost agricultural sustainability, and combat climate change with data-driven solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-lg"
                data-testid="button-get-started"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-primary-foreground/10 text-lg text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20"
                data-testid="button-contact-sales"
              >
                <Mail className="h-5 w-5" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
