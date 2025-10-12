import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, Brain, TrendingUp, MapPin, Leaf, CloudRain } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    {
      icon: Satellite,
      title: "AI-Powered Land Monitoring",
      description: "Real-time satellite data analysis with machine learning to detect degradation patterns across vast territories.",
    },
    {
      icon: Brain,
      title: "Intelligent Soil Analysis",
      description: "Claude AI processes soil samples and imagery to identify health indicators, nutrient deficiencies, and contamination.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast degradation trends and receive early warnings for at-risk areas before visible damage occurs.",
    },
    {
      icon: MapPin,
      title: "Precision Intervention Mapping",
      description: "Identify exact locations for reforestation, soil restoration, and sustainable agriculture practices.",
    },
    {
      icon: Leaf,
      title: "Sustainability Metrics",
      description: "Track carbon sequestration potential, biodiversity impact, and climate resilience improvements over time.",
    },
    {
      icon: CloudRain,
      title: "Climate Resilience Planning",
      description: "Data-driven recommendations for drought resistance, erosion control, and climate adaptation strategies.",
    },
  ];

  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Comprehensive AI-Driven Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Harness the power of artificial intelligence and satellite technology to restore our planet's land health.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="hover-elevate transition-all">
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
