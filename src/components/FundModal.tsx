
import { useState } from "react";
import { Investment } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RiskBadge from "./RiskBadge";
import { useToast } from "@/hooks/use-toast";
import { DollarSign } from "lucide-react";

interface FundModalProps {
  investment: Investment | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function FundModal({ investment, isOpen, onClose }: FundModalProps) {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  if (!investment) return null;
  
  const handleInvest = () => {
    if (!amount) return;
    
    const investAmount = Number(amount);
    
    if (isNaN(investAmount) || investAmount < investment.minInvestment) {
      toast({
        title: "Invalid amount",
        description: `Minimum investment is $${investment.minInvestment.toLocaleString()}`,
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      
      toast({
        title: "Investment successful!",
        description: `You've invested $${investAmount.toLocaleString()} in ${investment.name}`,
      });
    }, 1500);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Invest in {investment.name}
            <RiskBadge level={investment.riskLevel} className="ml-2" />
          </DialogTitle>
          <DialogDescription>
            Complete your investment in this opportunity.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <Label className="text-xs text-muted-foreground">Annual Return</Label>
              <p className="font-medium text-highlight-green">{investment.annualReturn}% APR</p>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Duration</Label>
              <p className="font-medium">{investment.duration} months</p>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Min Investment</Label>
              <p className="font-medium">${investment.minInvestment.toLocaleString()}</p>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Remaining</Label>
              <p className="font-medium">${(investment.targetAmount - investment.currentAmount).toLocaleString()}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="amount">Investment Amount (USD)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                id="amount" 
                placeholder={investment.minInvestment.toString()}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-9"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Minimum: ${investment.minInvestment.toLocaleString()}
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleInvest} 
            disabled={isLoading}
            className="bg-highlight-purple hover:bg-highlight-purple/90"
          >
            {isLoading ? "Processing..." : "Confirm Investment"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
