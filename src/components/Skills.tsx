import { Search, BarChart3, FileText, Shield, Globe, Zap } from "lucide-react";

const skills = [
  {
    icon: Search,
    title: "Listing Optimization",
    description: "Keyword research, SEO-optimized titles, bullet points, and backend search terms that rank and convert.",
  },
  {
    icon: BarChart3,
    title: "PPC & Advertising",
    description: "Strategic campaign management across Sponsored Products, Brands, and Display with proven ROAS improvement.",
  },
  {
    icon: FileText,
    title: "A+ Content & CRO",
    description: "Premium brand content and conversion rate optimization that turns browsers into buyers.",
  },
  {
    icon: Shield,
    title: "Account Health",
    description: "Proactive account management, policy compliance, and issue resolution to protect your business.",
  },
  {
    icon: Globe,
    title: "Marketplace Strategy",
    description: "Multi-marketplace expansion and localization for US, EU, and international Amazon markets.",
  },
  {
    icon: Zap,
    title: "Launch Strategy",
    description: "New product launches with velocity-building tactics, review generation, and ranking strategies.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive skill set built through years of hands-on experience 
            across hundreds of successful Amazon campaigns.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover-lift hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
