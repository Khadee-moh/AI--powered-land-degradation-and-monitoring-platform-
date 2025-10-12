import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@assets/stock_images/satellite_imagery_ea_55dc6c45.jpg";

export function LandingHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Satellite imagery of earth"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-primary/20 p-2 backdrop-blur-sm">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <span className="text-lg font-medium text-primary">TerraSense AI</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              AI-Powered Solutions for a Greener Planet
            </h1>

            <p className="mb-8 text-xl text-gray-200 md:text-2xl">
              Monitor soil health, detect land degradation, and drive sustainable agriculture
              with advanced AI analysis and real-time satellite data.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group gap-2 text-lg"
                data-testid="button-launch-platform"
              >
                Launch Platform
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 bg-white/10 text-lg text-white backdrop-blur-sm hover:bg-white/20"
                data-testid="button-view-demo"
              >
                View Demo
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">2.5M+</div>
                <div className="text-sm text-gray-300">Hectares Monitored</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">94%</div>
                <div className="text-sm text-gray-300">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">180+</div>
                <div className="text-sm text-gray-300">Active Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
