import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle2 } from "lucide-react";

export function DashboardStats() {
  const stats = [
    {
      title: "Total Area Monitored",
      value: "24,580",
      unit: "hectares",
      trend: { value: "+12.5%", isPositive: true },
      icon: TrendingUp,
    },
    {
      title: "Healthy Zones",
      value: "18,420",
      unit: "hectares",
      trend: { value: "+8.3%", isPositive: true },
      icon: CheckCircle2,
    },
    {
      title: "At-Risk Areas",
      value: "4,860",
      unit: "hectares",
      trend: { value: "-15.2%", isPositive: true },
      icon: AlertTriangle,
    },
    {
      title: "Critical Degradation",
      value: "1,300",
      unit: "hectares",
      trend: { value: "-22.1%", isPositive: true },
      icon: TrendingDown,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stat.value}
              <span className="ml-1 text-sm font-normal text-muted-foreground">{stat.unit}</span>
            </div>
            <p className={`mt-1 text-xs ${stat.trend.isPositive ? 'text-primary' : 'text-destructive'}`}>
              {stat.trend.value} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
