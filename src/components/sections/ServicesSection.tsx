import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Wifi, 
  Network, 
  Shield, 
  Server, 
  Users, 
  Headphones,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Wifi,
      title: "Home & Office Wi-Fi Setup",
      description: "Professional wireless network installation and optimization for maximum coverage and speed.",
      features: ["High-speed Wi-Fi 6", "Mesh network systems", "Security configuration", "Performance optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "LAN/WAN Configuration",
      description: "Complete network infrastructure design and implementation for businesses of all sizes.",
      features: ["Network topology design", "Cable management", "Switch configuration", "VLAN setup"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "VPN & Firewall Setup",
      description: "Secure your network with enterprise-grade security solutions and remote access capabilities.",
      features: ["VPN configuration", "Firewall management", "Intrusion detection", "Security monitoring"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Server,
      title: "Cisco & Huawei Device Configuration",
      description: "Expert configuration and management of enterprise networking equipment and infrastructure.",
      features: ["Router configuration", "Switch management", "Firmware updates", "Performance tuning"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      icon: Users,
      title: "Network Consultation & Training",
      description: "Professional guidance and training to help your team manage and maintain network systems.",
      features: ["Network assessment", "Best practices training", "Documentation", "Strategic planning"],
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Headphones,
      title: "Ongoing Tech Support",
      description: "24/7 technical support and maintenance to ensure your network runs smoothly and efficiently.",
      features: ["24/7 monitoring", "Preventive maintenance", "Rapid response", "Remote support"],
      color: "from-pink-600 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium">
            <Network className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Complete Network{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to ongoing support, we provide comprehensive 
            networking solutions tailored to your specific needs and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group p-8 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              We design tailored networking solutions for unique requirements. 
              Let's discuss your specific needs and create the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;