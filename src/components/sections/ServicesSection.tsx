import { 
  RouteIcon, 
  Building2, 
  Dumbbell, 
  BookOpen, 
  Building, 
  Wrench 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: RouteIcon,
      title: "Roads & Roundabout Construction",
      description: "Complete highway networks, urban roads, and traffic roundabouts designed for optimal flow and safety.",
    },
    {
      icon: Dumbbell,
      title: "Public Sports & Futsal Facilities",
      description: "Modern recreational infrastructure including futsal courts, sports complexes, and community athletic facilities.",
    },
    {
      icon: Building2,
      title: "Government & Institutional Buildings",
      description: "Administrative buildings, municipal offices, and government facilities built to the highest standards.",
    },
    {
      icon: BookOpen,
      title: "Libraries & Educational Infrastructure",
      description: "Public libraries, schools, and educational facilities that inspire learning and community engagement.",
    },
    {
      icon: Building,
      title: "Urban Development & Civic Works",
      description: "Comprehensive urban planning projects including public spaces, utilities, and community infrastructure.",
    },
    {
      icon: Wrench,
      title: "Structural & Civil Engineering",
      description: "Expert engineering services for complex structural challenges and civil construction requirements.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-gov">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="divider-gov mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Core Public Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive infrastructure solutions for government and public-sector projects, 
            delivered with precision and regulatory compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-gov p-8 group hover:border-primary/30 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
