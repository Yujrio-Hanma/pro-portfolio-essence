import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 text-center px-4 py-20 md:py-0">
        <p className="animate-fade-up text-primary font-medium tracking-wider uppercase text-sm mb-4">
          Amazon E-Commerce Specialist
        </p>
        
        <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
          Turning Amazon Stores<br />
          <span className="text-gradient">Into Revenue Machines</span>
        </h1>

        <p className="animate-fade-up-delay-2 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          I help brands scale their Amazon presence through data-driven optimization, 
          strategic advertising, and conversion-focused content that delivers measurable results.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#portfolio">
              View My Work
              <ArrowRight size={20} />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
