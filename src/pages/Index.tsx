
import { useState } from "react";
import { investments } from "@/data/mockData";
import { Investment } from "@/types";
import HeroSection from "@/components/HeroSection";
import InvestmentGrid from "@/components/InvestmentGrid";
import Navbar from "@/components/Navbar";
import FundModal from "@/components/FundModal";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleInvest = (investment: Investment) => {
    setSelectedInvestment(investment);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="opportunities" className="container mx-auto px-4 py-16">
          <InvestmentGrid 
            investments={investments} 
            onInvest={handleInvest} 
          />
        </section>
        
        <Separator />
        
        <section id="how-it-works" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Connect Your Wallet",
                description: "Link your digital wallet to enable secure transactions and investments.",
              },
              {
                step: "2",
                title: "Choose an SME",
                description: "Browse opportunities and select SMEs that align with your investment goals and risk comfort.",
              },
              {
                step: "3",
                title: "Fund & Track",
                description: "Invest your desired amount and monitor your returns through our dashboard.",
              }
            ].map((item, i) => (
              <div key={i} className="relative bg-muted/50 p-6 rounded-lg border">
                <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-highlight-purple text-white flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section id="about" className="bg-deep-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">About InvestSME</h2>
              <p className="text-gray-300">
                We're bridging the gap between investors seeking meaningful returns and small to medium enterprises 
                that need capital to grow. Our platform enables direct investment into vetted businesses, 
                providing transparent risk assessments and clear return expectations.
              </p>
              <p className="text-gray-300">
                By cutting out traditional financial intermediaries, we ensure more of your investment goes 
                directly to the businesses you want to support, while securing competitive returns for your portfolio.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-deep-blue text-white mt-auto">
        <div className="container mx-auto p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="font-bold text-xl mb-4">
                <span className="text-highlight-purple">Invest</span>
                <span className="text-white">SME</span>
              </h3>
              <p className="text-sm text-gray-300 max-w-xs">
                Empowering SMEs through innovative funding solutions while providing investors with transparent, impactful opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-3">Platform</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">Browse Opportunities</a></li>
                  <li><a href="#" className="hover:text-white">How It Works</a></li>
                  <li><a href="#" className="hover:text-white">Risk Assessment</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white">Investment Disclaimer</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between gap-4">
            <p>© 2025 InvestSME. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
      
      <FundModal 
        investment={selectedInvestment}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Index;
