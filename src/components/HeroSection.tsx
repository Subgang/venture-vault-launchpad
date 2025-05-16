
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#f9f5f2] text-deep-blue">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f5f2] via-[#f3e7dd]/20 to-[#f9f5f2] z-0" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Empower SMEs, <span className="text-deep-purple">Grow Your Wealth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            Invest directly in promising small and medium enterprises in Germany. 
            Lower barriers, higher impact, transparent returns.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-highlight-green hover:bg-highlight-green/90"
              onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Opportunities
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-deep-blue border-deep-blue hover:bg-deep-blue/10"
            >
              How It Works
            </Button>
          </div>
          
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-[#fef7cd]/30 p-8 rounded-lg border border-[#fef7cd]">
              <p className="text-5xl font-extrabold mb-3">54%</p>
              <h3 className="text-xl font-bold mb-2">Employment Contribution</h3>
              <p className="text-sm text-gray-700">They employ 54.4% of the workforce subject to social security contributions.</p>
            </div>
            <div className="bg-[#e5deff]/30 p-8 rounded-lg border border-[#e5deff]">
              <p className="text-5xl font-extrabold mb-3">37%</p>
              <h3 className="text-xl font-bold mb-2">Turnover Generation</h3>
              <p className="text-sm text-gray-700">SMEs account for 33.7% of the total turnover in Germany.</p>
            </div>
            <div className="bg-[#fde1d3]/30 p-8 rounded-lg border border-[#fde1d3]">
              <p className="text-5xl font-extrabold mb-3">50%</p>
              <h3 className="text-xl font-bold mb-2">Owners over 55</h3>
              <p className="text-sm text-gray-700">As of recent data (KFW) 50% of SME owners are aged 55 or older, indicating a significant portion approaching retirement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
