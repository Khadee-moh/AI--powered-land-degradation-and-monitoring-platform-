import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TreePine, Droplets } from "lucide-react";
import healthyLand from "@assets/stock_images/aerial_view_healthy__ed34d9b4.jpg";
import reforestation from "@assets/stock_images/reforestation_drone__e839143b.jpg";

export function ImpactVisualization() {
  const impacts = [
    { icon: TrendingUp, label: "85% improvement", metric: "Soil Health Index" },
    { icon: TreePine, label: "12,000 trees", metric: "Reforestation" },
    { icon: Droplets, label: "+40% retention", metric: "Water Conservation" },
  ];

  return (
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <Badge className="mb-4" variant="outline">
            Real Impact
          </Badge>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Measurable Environmental Results
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our platform drives tangible change with quantifiable improvements in land health and ecosystem restoration.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {impacts.map((impact) => (
            <Card key={impact.label}>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <impact.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{impact.label}</div>
                  <div className="text-sm text-muted-foreground">{impact.metric}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={healthyLand}
              alt="Healthy farmland with crops"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge className="mb-2 bg-primary">After Restoration</Badge>
              <p className="text-lg font-medium text-white">Vibrant agricultural land with 3x yield increase</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <img
              src={reforestation}
              alt="Reforestation with drone technology"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge className="mb-2 bg-primary">AI-Driven Action</Badge>
              <p className="text-lg font-medium text-white">Precision reforestation reducing costs by 60%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
