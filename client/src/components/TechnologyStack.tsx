import { Card } from "@/components/ui/card";
import { Database, Brain, Map } from "lucide-react";

export function TechnologyStack() {
  const technologies = [
    {
      icon: Database,
      name: "Supabase",
      description: "Real-time database for land monitoring data and analysis results",
      color: "text-chart-2",
      bgColor: "bg-chart-2/10",
    },
    {
      icon: Brain,
      name: "Claude AI",
      description: "Advanced AI model for soil analysis and predictive insights",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Map,
      name: "GIS & Remote Sensing",
      description: "Satellite imagery integration and geospatial data processing",
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Powered by Leading Technology
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built on enterprise-grade platforms for reliability, scalability, and cutting-edge AI capabilities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {technologies.map((tech) => (
            <Card key={tech.name} className="p-8 text-center">
              <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${tech.bgColor}`}>
                <tech.icon className={`h-8 w-8 ${tech.color}`} />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">{tech.name}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
