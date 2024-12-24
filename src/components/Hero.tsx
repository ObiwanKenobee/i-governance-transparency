import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="gradient-bg text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to i-GOFP
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100">
            Powered by DOGE: Streamlining Governance for a Transparent and Efficient Future
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};