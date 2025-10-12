import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

export function NDVIChart() {
  const data = [
    { month: "Jan", ndvi: 0.45, moisture: 28 },
    { month: "Feb", ndvi: 0.52, moisture: 32 },
    { month: "Mar", ndvi: 0.61, moisture: 38 },
    { month: "Apr", ndvi: 0.68, moisture: 42 },
    { month: "May", ndvi: 0.72, moisture: 45 },
    { month: "Jun", ndvi: 0.78, moisture: 48 },
    { month: "Jul", ndvi: 0.75, moisture: 44 },
    { month: "Aug", ndvi: 0.71, moisture: 40 },
    { month: "Sep", ndvi: 0.66, moisture: 36 },
    { month: "Oct", ndvi: 0.58, moisture: 33 },
    { month: "Nov", ndvi: 0.50, moisture: 30 },
    { month: "Dec", ndvi: 0.47, moisture: 29 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Vegetation Health Trends (NDVI)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorNdvi" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
              }}
            />
            <Area
              type="monotone"
              dataKey="ndvi"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="url(#colorNdvi)"
              name="NDVI Score"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
