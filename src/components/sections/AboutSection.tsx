import { Building, Shield, Users, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Public Safety First",
      description: "Every project prioritizes community safety with rigorous standards and protocols.",
    },
    {
      icon: Building,
      title: "Infrastructure Durability",
      description: "Built to last with materials and methods that ensure decades of reliable service.",
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Full adherence to national and municipal construction standards and codes.",
    },
    {
      icon: Users,
      title: "Government Experience",
      description: "Proven track record with public-sector procurement and tender processes.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-gov">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="divider-gov mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Our Organization
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CivicBuild is a mission-driven civil construction company dedicated to national 
            and municipal infrastructure development. For over two decades, we have partnered 
            with government authorities to deliver projects that strengthen communities and 
            drive economic growth.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card-gov p-6 group hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 p-8 md:p-12 bg-primary rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground/80 text-sm font-medium tracking-wider uppercase mb-4">
              Our Mission
            </p>
            <blockquote className="font-heading text-xl md:text-2xl text-primary-foreground leading-relaxed">
              "To build infrastructure that empowers communities, supports sustainable 
              development, and delivers lasting value to the public sector through 
              engineering excellence and unwavering commitment to quality."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
