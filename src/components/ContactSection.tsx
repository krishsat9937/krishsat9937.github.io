import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-2 text-sm">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities in full-stack development, AI/ML engineering, and technical leadership roles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <a 
                href="mailto:krishsat9937@gmail.com"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">krishsat9937@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+4917677123545"
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">+49 176 77123545</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-card border border-border rounded-xl">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Berlin, Germany</p>
                </div>
              </div>
            </div>

            {/* Social Links & CTA */}
            <div className="bg-card border border-border rounded-xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6 text-center">Connect With Me</h3>
              
              <div className="flex justify-center gap-4 mb-8">
                <a 
                  href="https://github.com/krishnaKSatya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 rounded-xl transition-all group"
                >
                  <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com/in/krishna-kumar-sathyan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-secondary hover:bg-primary/10 border border-border hover:border-primary/50 rounded-xl transition-all group"
                >
                  <Linkedin className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>

              <a 
                href="mailto:krishsat9937@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-all glow-primary hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Send Me a Message
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm font-mono">
            © 2025 Krishna Kumar Sathyan. Built with React + Vite
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;