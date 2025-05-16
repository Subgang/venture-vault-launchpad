
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-deep-blue text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-highlight-purple/20 to-deep-blue z-0" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empower SMEs, <span className="text-highlight-purple">Grow Your Wealth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Invest directly in promising small and medium enterprises. 
            Lower barriers, higher impact, transparent returns.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-highlight-purple hover:bg-highlight-purple/90"
              onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Opportunities
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              How It Works
            </Button>
          </div>
          
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "$12.4M", label: "Total Invested" },
              { value: "127", label: "Funded SMEs" },
              { value: "11.2%", label: "Avg. Annual Return" },
              { value: "4500+", label: "Investors" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-bold text-highlight-purple">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
