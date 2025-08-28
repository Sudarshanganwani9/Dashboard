import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  color: "success" | "warning" | "info" | "primary";
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  color 
}: MetricCardProps) {
  const colorClasses = {
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground", 
    info: "bg-info text-info-foreground",
    primary: "bg-primary text-primary-foreground"
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <div className="flex items-center space-x-1">
              <span 
                className={cn(
                  "text-xs font-medium",
                  changeType === "positive" ? "text-success" : 
                  changeType === "negative" ? "text-destructive" : 
                  "text-muted-foreground"
                )}
              >
                {change}
              </span>
            </div>
          </div>
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full",
            colorClasses[color]
          )}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}