import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Clock,
  CheckCircle2
} from "lucide-react";
import teamImage from "@/assets/team-working.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide reliable, scalable networking solutions that empower businesses to thrive in the digital age."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be Ethiopia's leading networking solutions provider, connecting communities and businesses seamlessly."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, excellence, innovation, and customer-centricity drive everything we do."
    }
  ];

  const stats = [
    { icon: Users, value: "150+", label: "Happy Clients" },
    { icon: Award, value: "200+", label: "Projects Completed" },
    { icon: Clock, value: "5+", label: "Years Experience" },
    { icon: CheckCircle2, value: "99%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium">
            <Users className="w-4 h-4" />
            <span>About Sofitech</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Building{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital Bridges
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since our founding, we've been dedicated to creating robust, secure, 
            and efficient network infrastructures that connect people and possibilities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a passion for connecting communities, Sofitech has grown 
                from a small local service provider to a trusted partner for businesses 
                across Ethiopia. Our journey began with a simple belief: every organization 
                deserves reliable, secure, and efficient network infrastructure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we serve clients ranging from small home offices to large 
                educational institutions, providing comprehensive networking solutions 
                that enable growth, productivity, and innovation.
              </p>
            </div>

            {/* Values Cards */}
            <div className="space-y-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="p-6 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team Image & Stats */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={teamImage} 
                alt="Sofitech Team" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Expert Team</h4>
                <p className="text-white/90">Certified professionals with years of experience</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="p-6 text-center group hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications & Partnerships */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-muted/50 to-muted/30">
            <h3 className="text-2xl font-bold mb-6">Certifications & Partnerships</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold">Cisco Certified</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold">Huawei Partner</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold">CompTIA Certified</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold">ISO Compliant</div>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="hero" size="lg">
                Join Our Growing Family
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;