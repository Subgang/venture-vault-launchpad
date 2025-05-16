
import { RiskLevel } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, Percent } from "lucide-react";

interface RiskBadgeProps {
  level: RiskLevel;
  className?: string;
}

export default function RiskBadge({ level, className }: RiskBadgeProps) {
  const iconMap = {
    low: TrendingUp,
    medium: Percent,
    high: TrendingDown,
  };
  
  const Icon = iconMap[level];
  
  return (
    <Badge
      className={cn(
        "gap-1 font-medium",
        level === "low" && "bg-risk-low hover:bg-risk-low/80",
        level === "medium" && "bg-risk-medium hover:bg-risk-medium/80",
        level === "high" && "bg-risk-high hover:bg-risk-high/80",
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {level.charAt(0).toUpperCase() + level.slice(1)} Risk
    </Badge>
  );
}
