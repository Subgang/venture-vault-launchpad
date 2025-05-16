
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ConnectWallet from "./ConnectWallet";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-sm" 
        : "bg-deep-brown text-white"
    }`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="text-highlight-green">Invest</span>
            <span className={scrolled ? "text-deep-brown" : "text-white"}>SME</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#opportunities" 
              className={`text-sm font-medium ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-beige-light/80 hover:text-beige-light"
              }`}
            >
              Opportunities
            </a>
            <a 
              href="#about" 
              className={`text-sm font-medium ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-beige-light/80 hover:text-beige-light"
              }`}
            >
              About
            </a>
            <a 
              href="#how-it-works" 
              className={`text-sm font-medium ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-beige-light/80 hover:text-beige-light"
              }`}
            >
              How It Works
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={scrolled ? "" : "text-beige-light hover:bg-beige-light/10"}
          >
            Sign In
          </Button>
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
