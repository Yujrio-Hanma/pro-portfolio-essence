const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "Deep dive into your current Amazon presence, identifying opportunities and pain points through comprehensive data analysis.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Create a customized roadmap with clear priorities, timelines, and KPIs aligned with your business objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Execute the strategy with precision—from listing optimization and PPC setup to content creation and account improvements.",
  },
  {
    number: "04",
    title: "Optimization & Scaling",
    description: "Continuous monitoring, testing, and refinement to maximize performance and scale what works.",
  },
  {
    number: "05",
    title: "Reporting & Insights",
    description: "Regular performance reports with actionable insights and strategic recommendations for continued growth.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            How I Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            My <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured approach that ensures consistent results 
            and clear communication at every stage.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div
                className={`pl-8 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}
              >
                <div className="bg-card rounded-2xl p-6 border border-border/50 hover-lift">
                  <span className="text-5xl font-bold text-primary/20 mb-2 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
