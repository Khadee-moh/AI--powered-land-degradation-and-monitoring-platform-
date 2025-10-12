import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Layers, ZoomIn, ZoomOut } from "lucide-react";

export function LandMap() {
  const zones = [
    { id: 1, name: "North Valley", lat: 34.5, lng: -118.2, status: "healthy", size: 850 },
    { id: 2, name: "East Plains", lat: 34.3, lng: -117.9, status: "at-risk", size: 620 },
    { id: 3, name: "South Basin", lat: 34.1, lng: -118.0, status: "degraded", size: 340 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy": return "bg-primary";
      case "at-risk": return "bg-chart-3";
      case "degraded": return "bg-destructive";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <CardTitle className="text-xl">Land Monitoring Map</CardTitle>
        <div className="flex gap-2">
          <Button size="icon" variant="outline" data-testid="button-zoom-in">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" data-testid="button-zoom-out">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" data-testid="button-layers">
            <Layers className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-4/20 via-primary/10 to-chart-2/20" />
          
          {zones.map((zone) => (
            <div
              key={zone.id}
              className="group absolute cursor-pointer transition-transform hover:scale-110"
              style={{
                left: `${(zone.lng + 118.5) * 100}%`,
                top: `${(34.6 - zone.lat) * 100}%`,
              }}
              data-testid={`map-zone-${zone.id}`}
            >
              <div className={`h-3 w-3 rounded-full ${getStatusColor(zone.status)} animate-pulse`} />
              <div className="invisible absolute left-6 top-0 z-10 min-w-max rounded-lg bg-popover p-3 shadow-lg group-hover:visible">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{zone.name}</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{zone.size} hectares</div>
                <Badge className="mt-2" variant={zone.status === "healthy" ? "default" : "destructive"}>
                  {zone.status}
                </Badge>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 left-4 rounded-lg bg-card/90 p-3 backdrop-blur-sm">
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Healthy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-chart-3" />
                <span>At Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-destructive" />
                <span>Degraded</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
