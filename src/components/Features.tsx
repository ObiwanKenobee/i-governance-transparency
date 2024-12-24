import { Server, Shield, BarChart3, Users, MessageSquare, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-secondary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};