import { Server, Shield, BarChart3, Users, MessageSquare, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Digital Identity & Authentication",
    description: "Secure, blockchain-powered digital IDs with biometric verification",
    icon: Shield,
  },
  {
    title: "Public Finance Tracking",
    description: "Real-time tracking of government expenditures with public dashboards",
    icon: BarChart3,
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered resource needs identification and prioritization",
    icon: Activity,
  },
  {
    title: "Cross-Agency Interoperability",
    description: "Secure APIs for seamless data sharing between departments",
    icon: Server,
  },
  {
    title: "e-Citizen Engagement",
    description: "Accessible portals for government services and feedback",
    icon: Users,
  },
  {
    title: "IoT Infrastructure Monitoring",
    description: "Real-time monitoring and predictive maintenance",
    icon: MessageSquare,
  },
];

export const Features = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how i-GOFP is revolutionizing government operations and public service delivery
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <feature.icon className="h-6 w-6 text-secondary group-hover:text-primary transition-colors" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};