
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface ConnectWalletProps {
  className?: string;
}

export default function ConnectWallet({ className }: ConnectWalletProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  
  const connectWallet = () => {
    // In a real implementation, this would use a web3 library like ethers.js
    // For now, we'll simulate a connection with a mock address
    const mockAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";
    const shortAddress = `${mockAddress.substring(0, 6)}...${mockAddress.substring(mockAddress.length - 4)}`;
    setWalletAddress(shortAddress);
    setIsConnected(true);
  };
  
  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
  };
  
  return (
    <div className={className}>
      {isConnected ? (
        <div className="flex items-center gap-2">
          <span className="bg-highlight-green/10 text-highlight-green py-1 px-3 rounded-full text-sm font-medium">
            {walletAddress}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={disconnectWallet}
          >
            Disconnect
          </Button>
        </div>
      ) : (
        <Button 
          variant="default"
          onClick={connectWallet}
          className="bg-highlight-green hover:bg-highlight-green/90"
        >
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      )}
    </div>
  );
}
