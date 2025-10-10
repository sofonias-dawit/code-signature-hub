import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "IT Manager",
      company: "TechCorp Ethiopia",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      content: "Sofitech transformed our network infrastructure completely. The team's expertise in Cisco configuration and their proactive approach to security made all the difference. Our productivity has increased by 40% since the upgrade.",
      rating: 5
    },
    {
      id: 2,
      name: "Dr. Michael Tadesse",
      role: "Principal",
      company: "International School of Addis",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      content: "The Wi-Fi setup across our entire campus was seamless. Students and staff now enjoy reliable internet access in every classroom and common area. The ongoing support has been exceptional.",
      rating: 5
    },
    {
      id: 3,
      name: "Almaz Bekele",
      role: "Business Owner",
      company: "Bekele Trading",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      content: "As a small business, we needed a cost-effective yet reliable network solution. Sofitech delivered exactly what we needed within our budget. Their training helped our staff manage the system independently.",
      rating: 5
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Homeowner",
      company: "Residential Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      content: "Working from home became so much easier after Sofitech set up our home network. The mesh system covers our entire house perfectly, and the VPN setup allows me to work securely from anywhere.",
      rating: 5
    },
    {
      id: 5,
      name: "Hanan Mohammed",
      role: "Operations Manager",
      company: "LogiFlow Solutions",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      content: "The firewall and security setup gave us peace of mind. Sofitech's 24/7 monitoring service has prevented several potential security threats. Their response time is incredibly fast.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium">
            <Star className="w-4 h-4" />
            <span>Client Stories</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experience with Sofitech.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="p-8 lg:p-12 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <div className="flex items-start space-x-6">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary scale-125" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">150+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">5★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the same level of professional service and exceptional results. 
              Let's discuss how we can transform your network infrastructure.
            </p>
            <Button variant="hero" size="lg">
              Start Your Success Story
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;