import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield } from "lucide-react";
import heroImage from "@/assets/hero-infrastructure.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Highway infrastructure project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-gov py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-6">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Government-Certified Contractor
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Delivering Sustainable Public Infrastructure
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Trusted partners for government and civic construction projects. Building roads, 
            public facilities, and institutional infrastructure that serves communities for generations.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero-primary" size="xl" className="bg-accent hover:bg-accent/90">
              View Government Projects
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-secondary" size="xl" className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Request Official Proposal
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">25+</p>
              <p className="text-sm text-primary-foreground/70">Years of Operation</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">150+</p>
              <p className="text-sm text-primary-foreground/70">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">12</p>
              <p className="text-sm text-primary-foreground/70">Regions Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
