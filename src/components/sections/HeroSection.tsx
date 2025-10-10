import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-network.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Network Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Floating Network Elements */}
      <div className="absolute inset-0 z-10">
        <div className="animate-float absolute top-20 left-10 w-4 h-4 bg-secondary rounded-full opacity-60"></div>
        <div className="animate-float absolute top-40 right-20 w-3 h-3 bg-white rounded-full opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="animate-float absolute bottom-40 left-20 w-5 h-5 bg-secondary-light rounded-full opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="animate-float absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full opacity-30" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm">
                <Network className="w-4 h-4" />
                <span>Professional IT Networking Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Smart Networks,{" "}
                <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                  Seamless
                </span>{" "}
                Connections
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Professional networking solutions for businesses, schools, and homes. 
                We design, configure, and maintain robust network infrastructures 
                that keep you connected and secure.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="lg" className="group">
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-secondary" />
                <div className="text-sm">
                  <div className="font-semibold">Certified</div>
                  <div className="text-white/70">Professionals</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-6 h-6 text-secondary" />
                <div className="text-sm">
                  <div className="font-semibold">24/7</div>
                  <div className="text-white/70">Support</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Network className="w-6 h-6 text-secondary" />
                <div className="text-sm">
                  <div className="font-semibold">100+</div>
                  <div className="text-white/70">Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Network Diagram */}
          <div className="hidden lg:block relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30 flex items-center justify-center animate-pulse-glow">
                <Network className="w-8 h-8 text-white" />
              </div>
              
              {/* Connecting Nodes */}
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const x = Math.cos(angle) * 120;
                const y = Math.sin(angle) * 120;
                return (
                  <div
                    key={index}
                    className="absolute w-12 h-12 bg-secondary/80 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center animate-pulse-network"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                );
              })}
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  const angle = (index * 60) * (Math.PI / 180);
                  const x = Math.cos(angle) * 120 + 192;
                  const y = Math.sin(angle) * 120 + 192;
                  return (
                    <line
                      key={index}
                      x1="192"
                      y1="192"
                      x2={x}
                      y2={y}
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;