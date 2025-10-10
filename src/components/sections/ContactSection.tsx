import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+251-911-123456",
      link: "tel:+251911123456"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@sofitech.et",
      link: "mailto:info@sofitech.et"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Addis Ababa, Ethiopia\nBole Subcity, Woreda 03",
      link: ""
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM",
      link: ""
    }
  ];

  const quickServices = [
    "Home Wi-Fi Setup",
    "Office Network",
    "VPN Configuration",
    "Firewall Setup",
    "Network Consultation",
    "Emergency Support"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your network? Get in touch with our experts 
            for a free consultation and customized solution proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Service Selection */}
            <Card className="p-6">
              <h4 className="font-bold mb-4">Quick Service Request</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickServices.map((service) => (
                  <Button
                    key={service}
                    variant="outline"
                    size="sm"
                    className="justify-start text-left h-auto py-2 px-3"
                    onClick={() => setFormData(prev => ({ ...prev, service }))}
                  >
                    {service}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <div className="flex items-center space-x-3 mb-3">
                <Phone className="w-5 h-5 text-red-600" />
                <h4 className="font-bold text-red-900">Emergency Support</h4>
              </div>
              <p className="text-red-700 text-sm mb-3">
                Network down? Need immediate assistance?
              </p>
              <Button variant="destructive" size="sm" className="w-full">
                Call Emergency Line
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251-911-123456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-3 rounded-lg border border-input bg-background"
                    >
                      <option value="">Select a service</option>
                      {quickServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your networking needs, current setup, or any specific requirements..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>We'll respond within 24 hours</span>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="p-8 text-center bg-gradient-to-r from-muted/50 to-muted/30">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
            <p className="text-muted-foreground mb-4">
              Schedule an appointment to visit our office and discuss your networking needs in person.
            </p>
            <Button variant="outline">
              Schedule Office Visit
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;