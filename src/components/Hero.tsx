import { ArrowRight, Globe, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="gradient-bg text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text">
              Welcome to i-GOFP
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Powered by DOGE: Streamlining Governance for a Transparent and Efficient Future
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { icon: Globe, text: "Global Reach" },
              { icon: Shield, text: "Secure Platform" },
              { icon: Users, text: "Community Driven" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <item.icon className="h-6 w-6" />
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};