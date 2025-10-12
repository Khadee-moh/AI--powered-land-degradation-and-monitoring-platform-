import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import degradedLand from "@assets/stock_images/dry_cracked_soil_des_291e2abe.jpg";

export function ProblemSection() {
  const statistics = [
    { value: "52%", label: "Global land degraded", impact: "critical" },
    { value: "12M", label: "Hectares lost annually", impact: "high" },
    { value: "$10T", label: "Economic impact by 2050", impact: "critical" },
    { value: "1.5B", label: "People affected worldwide", impact: "high" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <span className="text-sm font-medium text-destructive">Critical Challenge</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            The Land Degradation Crisis
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our planet faces unprecedented soil degradation, threatening food security,
            biodiversity, and climate stability. Traditional monitoring methods can't keep pace.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-2 gap-6">
            {statistics.map((stat) => (
              <Card key={stat.label} className="p-6">
                <div
                  className={`mb-2 text-4xl font-bold ${
                    stat.impact === "critical" ? "text-destructive" : "text-chart-3"
                  }`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <img
              src={degradedLand}
              alt="Degraded land with cracked soil"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-lg font-medium text-white">
                Without intervention, 90% of Earth's topsoil could be at risk by 2050
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
