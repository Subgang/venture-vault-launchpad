
export type RiskLevel = "low" | "medium" | "high";

export interface Investment {
  id: string;
  name: string;
  description: string;
  industry: string;
  riskLevel: RiskLevel;
  targetAmount: number;
  currentAmount: number;
  minInvestment: number;
  annualReturn: number; // Percentage
  duration: number; // In months
  location: string;
  logoUrl: string;
}
