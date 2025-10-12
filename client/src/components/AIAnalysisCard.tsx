import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, CheckCircle2, AlertCircle } from "lucide-react";

export function AIAnalysisCard() {
  const analysis = {
    confidence: 92,
    findings: [
      { type: "success", text: "Soil nitrogen levels within optimal range" },
      { type: "warning", text: "Slight phosphorus deficiency detected in Zone 3" },
      { type: "success", text: "Organic matter content increased by 12%" },
      { type: "warning", text: "Early signs of erosion in hillside areas" },
    ],
    recommendations: [
      "Apply phosphate fertilizer to Zone 3 (estimated 200kg)",
      "Implement contour plowing in hillside sections",
      "Continue current organic matter management practices",
    ],
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Brain className="h-5 w-5 text-primary" />
          AI Soil Analysis
        </CardTitle>
        <Badge variant="outline" className="gap-1">
          <span className="text-xs">Confidence:</span>
          <span className="font-semibold text-primary">{analysis.confidence}%</span>
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="mb-3 text-sm font-semibold">Key Findings</h4>
          <div className="space-y-2">
            {analysis.findings.map((finding, index) => (
              <div key={index} className="flex items-start gap-2">
                {finding.type === "success" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-chart-3" />
                )}
                <span className="text-sm text-muted-foreground">{finding.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Recommended Actions</h4>
          <ol className="space-y-2">
            {analysis.recommendations.map((rec, index) => (
              <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <span>{rec}</span>
              </li>
            ))}
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}
