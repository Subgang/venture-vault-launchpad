
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
        "gap-1 font-medium rounded-md",
        level === "low" && "bg-risk-low/20 text-risk-low border border-risk-low/30 hover:bg-risk-low/30",
        level === "medium" && "bg-risk-medium/20 text-risk-medium border border-risk-medium/30 hover:bg-risk-medium/30",
        level === "high" && "bg-risk-high/20 text-risk-high border border-risk-high/30 hover:bg-risk-high/30",
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {level.charAt(0).toUpperCase() + level.slice(1)} Risk
    </Badge>
  );
}
