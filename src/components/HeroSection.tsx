import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-40 scale-110" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
              <img 
                src={profileImage} 
                alt="Krishna Kumar Sathyan"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-mono text-primary">Available</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <p className="font-mono text-primary mb-2 text-sm md:text-base">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                Krishna Kumar{" "}
                <span className="text-gradient-primary">Sathyan</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Full-Stack & Backend Engineer
              </p>
            </div>

            <p 
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              Results-driven engineer specializing in scalable, AI-powered cloud solutions. 
              Building intelligent systems that transform data into actionable insights.
            </p>

            {/* Location Badge */}
            <div 
              className="flex items-center justify-center lg:justify-start gap-2 mb-8 animate-fade-in"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Berlin, Germany</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-mono ml-2">
                EU Work Permit
              </span>
            </div>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              <a 
                href="mailto:krishsat9937@gmail.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all glow-primary hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <a 
                href="#experience"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-all border border-border hover:border-primary/50"
              >
                <Download className="w-4 h-4" />
                View Experience
              </a>
            </div>

            {/* Social Links */}
            <div 
              className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in"
              style={{ animationDelay: "0.7s", opacity: 0 }}
            >
              <a 
                href="https://github.com/krishsat9937" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/krishnasathyan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="tel:+4917677123545"
                className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all group"
              >
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;