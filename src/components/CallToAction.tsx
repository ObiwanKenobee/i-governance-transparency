import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Enhanced transparency and accountability",
  "Streamlined government operations",
  "Improved citizen engagement",
  "Data-driven decision making"
];

export const CallToAction = () => {
  return (
    <div className="bg-primary py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your Governance?
            </h2>
            <p className="text-lg text-gray-200">
              Join the growing number of governments embracing digital transformation with i-GOFP.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-200"
                >
                  <CheckCircle className="h-5 w-5 text-accent" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Get Started Today</h3>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
              >
                Contact Sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-600 text-center">
              No credit card required. Start your free trial today.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};