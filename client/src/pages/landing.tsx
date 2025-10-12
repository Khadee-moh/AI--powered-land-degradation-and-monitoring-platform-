import { LandingHero } from "@/components/LandingHero";
import { ProblemSection } from "@/components/ProblemSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { TechnologyStack } from "@/components/TechnologyStack";
import { ImpactVisualization } from "@/components/ImpactVisualization";
import { CTASection } from "@/components/CTASection";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <div className="fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>
      
      <LandingHero />
      <ProblemSection />
      <FeaturesGrid />
      <TechnologyStack />
      <ImpactVisualization />
      <CTASection />
      
      <footer className="border-t py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 TerraSense AI. Building a greener planet with AI-powered land monitoring.
          </p>
        </div>
      </footer>
    </div>
  );
}
