
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface InvestmentProgressProps {
  current: number;
  target: number;
  className?: string;
}

export default function InvestmentProgress({ current, target, className }: InvestmentProgressProps) {
  const percentage = Math.min(Math.round((current / target) * 100), 100);
  
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Funded</span>
        <span className="font-medium">{percentage}%</span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2" 
      />
      <div className="flex justify-between text-sm">
        <span className="font-medium">
          ${current.toLocaleString()}
          <span className="text-muted-foreground font-normal"> raised</span>
        </span>
        <span className="text-muted-foreground">
          Goal: ${target.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
