import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Code2,
  Globe,
  ArrowRight,
  Monitor
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Corporate Website",
      description: "Modern corporate website with CMS integration, SEO optimization, and responsive design for multi-device support.",
      image: "/placeholder.svg",
      tags: ["WordPress", "PHP", "MySQL", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      id: 3,
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search filters, virtual tours, and agent management system.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Laravel", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Creative portfolio showcase with smooth animations, project galleries, and contact integration.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with course management, student tracking, and interactive learning modules.",
      image: "/placeholder.svg",
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Restaurant Booking System",
      description: "Online reservation platform with real-time availability, menu management, and customer reviews.",
      image: "/placeholder.svg",
      tags: ["Angular", "Firebase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium">
            <Code2 className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful web projects. Each website is crafted 
            with attention to detail, modern design principles, and optimal performance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-muted to-muted-dark">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="w-24 h-24 text-muted-foreground/20" />
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 gap-3">
                  <Button 
                    variant="glass" 
                    size="sm"
                    className="hover-scale"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Site
                  </Button>
                  <Button 
                    variant="glass" 
                    size="sm"
                    className="hover-scale"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Have a website project in mind? Let's discuss your requirements and 
              create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Globe className="w-5 h-5" />
                Start a Project
              </Button>
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;