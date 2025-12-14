import { TrendingUp, Target, Award } from "lucide-react";

const stats = [
  { value: "50+", label: "Brands Scaled" },
  { value: "$2M+", label: "Revenue Generated" },
  { value: "8+", label: "Years Experience" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Results-Driven<br />
              <span className="text-gradient">Amazon Expert</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm Alex, an Amazon e-commerce specialist with over 8 years of experience 
              helping brands dominate their categories. I don't believe in vanity metrics—I 
              focus on what actually moves the needle: revenue, profitability, and sustainable growth.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              My approach combines deep platform expertise with strategic thinking. Whether 
              you're launching a new product or scaling an existing catalog, I bring the 
              analytical mindset and hands-on execution needed to win on Amazon.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <span className="text-foreground font-medium">Data-Driven</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="text-primary" size={24} />
                </div>
                <span className="text-foreground font-medium">Results-Focused</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <span className="text-foreground font-medium">Proven Track Record</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-6 text-center hover-lift border border-border/50"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
