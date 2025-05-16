
import { Investment } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RiskBadge from "./RiskBadge";
import InvestmentProgress from "./InvestmentProgress";
import { DollarSign } from "lucide-react";

interface InvestmentCardProps {
  investment: Investment;
  onInvest: (investment: Investment) => void;
}

export default function InvestmentCard({ investment, onInvest }: InvestmentCardProps) {
  const {
    name,
    description,
    industry,
    riskLevel,
    targetAmount,
    currentAmount,
    minInvestment,
    annualReturn,
    duration,
    location,
    logoUrl
  } = investment;
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
              <img 
                src={logoUrl} 
                alt={name} 
                className="h-8 w-8" 
              />
            </div>
            <div>
              <CardTitle className="text-lg">{name}</CardTitle>
              <CardDescription className="text-xs">{location}</CardDescription>
            </div>
          </div>
          <RiskBadge level={riskLevel} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">Industry</p>
            <p className="font-medium">{industry}</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">Return</p>
            <p className="font-medium text-highlight-green">{annualReturn}% APR</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs">Duration</p>
            <p className="font-medium">{duration} months</p>
          </div>
        </div>
        
        <InvestmentProgress 
          current={currentAmount} 
          target={targetAmount} 
        />
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/30 pt-3">
        <div className="text-xs text-muted-foreground">
          Min. Investment: <span className="font-medium text-foreground">${minInvestment.toLocaleString()}</span>
        </div>
        <Button 
          size="sm" 
          className="bg-highlight-purple hover:bg-highlight-purple/90"
          onClick={() => onInvest(investment)}
        >
          <DollarSign className="mr-1 h-3.5 w-3.5" /> Invest
        </Button>
      </CardFooter>
    </Card>
  );
}
