import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import ciscoHuaweiImage from "@/assets/cisco-huawei-comparison.jpg";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Network Security Tips for Small Businesses",
      excerpt: "Protect your business with these fundamental security practices that every small business should implement to safeguard their network infrastructure.",
      category: "Tech Tips",
      author: "Solomon Tekle",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Wi-Fi 6: What Your Business Needs to Know",
      excerpt: "Discover how Wi-Fi 6 technology can revolutionize your business connectivity and why it's time to consider upgrading your wireless infrastructure.",
      category: "Industry News",
      author: "Dr. Meron Assefa",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Case Study: Transforming Education Through Network Modernization",
      excerpt: "Learn how we helped International School of Addis implement a campus-wide network solution that improved learning outcomes and operational efficiency.",
      category: "Case Studies",
      author: "Yohannes Haile",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 4,
      title: "Cisco vs Huawei: Choosing the Right Network Equipment",
      excerpt: "A comprehensive comparison of two leading network equipment manufacturers to help you make informed decisions for your infrastructure investments.",
      category: "Tech Tips",
      author: "Abraham Tesfaye",
      date: "2024-01-08",
      readTime: "6 min read",
      image: ciscoHuaweiImage,
      featured: false
    },
    {
      id: 5,
      title: "Setting Up VPN for Remote Work: A Complete Guide",
      excerpt: "Step-by-step instructions for implementing secure VPN solutions that enable productive and safe remote work for your team members.",
      category: "Tech Tips",
      author: "Rahel Mengistu",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "Network Monitoring: Preventing Problems Before They Happen",
      excerpt: "Explore proactive network monitoring strategies and tools that help identify potential issues before they impact your business operations.",
      category: "Industry News",
      author: "Dawit Alemayehu",
      date: "2024-01-03",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "Tech Tips", "Industry News", "Case Studies"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tech Tips":
        return "bg-primary/10 text-primary border border-primary/20";
      case "Industry News":
        return "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20";
      case "Case Studies":
        return "bg-purple-500/10 text-purple-600 border border-purple-500/20";
      default:
        return "bg-muted text-muted-foreground border border-border";
    }
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary font-medium">
            <BookOpen className="w-4 h-4" />
            <span>Knowledge Hub</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Latest{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and success stories in networking technology. 
            Learn from our experts and real-world implementations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-muted/50 rounded-lg p-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "ghost"}
                size="sm"
                className="rounded-md"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {blogPosts
            .filter(post => post.featured)
            .map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts
            .filter(post => !post.featured)
            .map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest networking insights, 
            tips, and industry updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background"
            />
            <Button variant="hero">
              Subscribe
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;