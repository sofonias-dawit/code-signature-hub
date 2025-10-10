import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Network, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send,
  Globe
} from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Wi-Fi Setup", href: "#services" },
    { name: "Network Configuration", href: "#services" },
    { name: "VPN & Security", href: "#services" },
    { name: "Tech Support", href: "#services" },
    { name: "Consultation", href: "#services" },
    { name: "Training", href: "#services" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xl font-bold">Sofitech</span>
                <div className="text-xs text-white/70">Smart Networks, Seamless Connections</div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Professional networking solutions for businesses, schools, and homes. 
              We connect communities and enable digital transformation across Ethiopia.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+251-911-123456</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@sofitech.et</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest tech tips and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button 
                type="submit" 
                variant="secondary" 
                className="w-full"
              >
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>

            {/* Language Switcher */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Language</h4>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <select className="bg-white/10 border border-white/20 rounded px-2 py-1 text-sm">
                  <option value="en">English</option>
                  <option value="am">አማርኛ (Amharic)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © 2024 Sofitech. All rights reserved. Built with ❤️ in Ethiopia.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;