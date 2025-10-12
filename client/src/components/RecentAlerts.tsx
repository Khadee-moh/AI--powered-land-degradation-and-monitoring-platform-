import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingDown, Droplets } from "lucide-react";

export function RecentAlerts() {
  const alerts = [
    {
      id: 1,
      type: "warning",
      title: "Moisture Level Declining",
      location: "East Plains, Zone 2",
      time: "2 hours ago",
      severity: "medium",
      icon: Droplets,
    },
    {
      id: 2,
      type: "critical",
      title: "Rapid Degradation Detected",
      location: "South Basin, Zone 5",
      time: "5 hours ago",
      severity: "high",
      icon: AlertTriangle,
    },
    {
      id: 3,
      type: "warning",
      title: "NDVI Score Decreased",
      location: "West Valley, Zone 1",
      time: "1 day ago",
      severity: "medium",
      icon: TrendingDown,
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "medium": return "default";
      default: return "secondary";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-4 rounded-lg border p-4 hover-elevate"
            data-testid={`alert-${alert.id}`}
          >
            <div className={`mt-0.5 rounded-lg p-2 ${alert.severity === 'high' ? 'bg-destructive/10' : 'bg-chart-3/10'}`}>
              <alert.icon className={`h-4 w-4 ${alert.severity === 'high' ? 'text-destructive' : 'text-chart-3'}`} />
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-start justify-between gap-2">
                <h4 className="font-semibold">{alert.title}</h4>
                <Badge variant={getSeverityColor(alert.severity)} className="text-xs">
                  {alert.severity}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{alert.location}</p>
              <p className="mt-1 text-xs text-muted-foreground">{alert.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
