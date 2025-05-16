
import { useState } from "react";
import { Investment } from "@/types";
import InvestmentCard from "./InvestmentCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface InvestmentGridProps {
  investments: Investment[];
  onInvest: (investment: Investment) => void;
}

export default function InvestmentGrid({ investments, onInvest }: InvestmentGridProps) {
  const [sortBy, setSortBy] = useState<string>("default");
  const [filterRisk, setFilterRisk] = useState<string>("all");
  
  const filteredInvestments = investments.filter(investment => {
    if (filterRisk === "all") return true;
    return investment.riskLevel === filterRisk;
  });
  
  const sortedInvestments = [...filteredInvestments].sort((a, b) => {
    switch (sortBy) {
      case "riskLow":
        return ["low", "medium", "high"].indexOf(a.riskLevel) - ["low", "medium", "high"].indexOf(b.riskLevel);
      case "riskHigh":
        return ["high", "medium", "low"].indexOf(a.riskLevel) - ["high", "medium", "low"].indexOf(b.riskLevel);
      case "fundedHigh":
        return (b.currentAmount / b.targetAmount) - (a.currentAmount / a.targetAmount);
      case "fundedLow":
        return (a.currentAmount / a.targetAmount) - (b.currentAmount / b.targetAmount);
      case "returnHigh":
        return b.annualReturn - a.annualReturn;
      case "returnLow":
        return a.annualReturn - b.annualReturn;
      default:
        return 0;
    }
  });
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-3">
        <h2 className="text-2xl font-semibold">Investment Opportunities</h2>
        <div className="flex gap-3">
          <Select value={filterRisk} onValueChange={setFilterRisk}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Risk Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Risks</SelectItem>
              <SelectItem value="low">Low Risk</SelectItem>
              <SelectItem value="medium">Medium Risk</SelectItem>
              <SelectItem value="high">High Risk</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="riskLow">Risk: Low to High</SelectItem>
              <SelectItem value="riskHigh">Risk: High to Low</SelectItem>
              <SelectItem value="fundedHigh">Most Funded</SelectItem>
              <SelectItem value="fundedLow">Least Funded</SelectItem>
              <SelectItem value="returnHigh">Return: High to Low</SelectItem>
              <SelectItem value="returnLow">Return: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedInvestments.map((investment) => (
          <InvestmentCard 
            key={investment.id}
            investment={investment}
            onInvest={onInvest}
          />
        ))}
      </div>
      
      {sortedInvestments.length === 0 && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No investments match your filters.</p>
        </div>
      )}
    </div>
  );
}
