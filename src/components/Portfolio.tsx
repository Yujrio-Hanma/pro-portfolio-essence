import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Health & Wellness Brand",
    category: "Full Account Management",
    description: "Scaled a supplement brand from $50K to $400K monthly revenue through strategic PPC restructuring and listing optimization.",
    results: "+700% Revenue Growth",
    tags: ["PPC", "Listing Optimization", "A+ Content"],
  },
  {
    title: "Home & Kitchen Launch",
    category: "Product Launch",
    description: "Launched 12 SKUs in a competitive niche, achieving page 1 rankings within 60 days using strategic launch tactics.",
    results: "Page 1 in 60 Days",
    tags: ["Launch Strategy", "SEO", "Review Generation"],
  },
  {
    title: "Beauty Brand Expansion",
    category: "International Expansion",
    description: "Expanded a US-based beauty brand to 5 EU marketplaces with localized content and market-specific strategies.",
    results: "5 Markets Launched",
    tags: ["EU Expansion", "Localization", "Brand Registry"],
  },
  {
    title: "Electronics Portfolio",
    category: "Advertising Optimization",
    description: "Reduced ACoS from 45% to 18% while increasing revenue by 150% through advanced PPC segmentation and bid automation.",
    results: "60% ACoS Reduction",
    tags: ["PPC", "DSP", "Automation"],
  },
  {
    title: "Sports & Outdoors Brand",
    category: "Brand Building",
    description: "Built a premium brand presence with A+ Content, Storefront design, and Brand Story that increased conversion by 35%.",
    results: "+35% Conversion Rate",
    tags: ["A+ Content", "Storefront", "Branding"],
  },
  {
    title: "Pet Products Company",
    category: "Account Recovery",
    description: "Recovered a suspended account within 48 hours and implemented compliance systems to prevent future issues.",
    results: "48hr Recovery",
    tags: ["Account Health", "Compliance", "Appeals"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Recent <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing measurable results 
            and strategic problem-solving across diverse categories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border/50 hover-lift hover:border-primary/30 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-border/50">
                <p className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="flex items-center gap-2 mb-4 text-primary font-semibold">
                  <TrendingUp size={18} />
                  <span>{project.results}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
