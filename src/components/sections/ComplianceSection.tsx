import { CheckCircle, Shield, Leaf, FileCheck, HardHat, Award } from "lucide-react";

const ComplianceSection = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent project delivery.",
    },
    {
      icon: HardHat,
      title: "OHSAS 18001",
      description: "Occupational health and safety management for worker protection.",
    },
    {
      icon: Leaf,
      title: "ISO 14001",
      description: "Environmental management system for sustainable construction practices.",
    },
    {
      icon: FileCheck,
      title: "Government Procurement",
      description: "Certified for public-sector tender processes and procurement standards.",
    },
  ];

  const standards = [
    "National Building Code Compliance",
    "Municipal Zoning Regulations",
    "Labor Law & Worker Safety",
    "Environmental Impact Assessment",
    "Structural Engineering Standards",
    "Quality Assurance Protocols",
    "Material Testing & Certification",
    "Project Documentation Standards",
  ];

  return (
    <section id="compliance" className="section-padding bg-muted">
      <div className="container-gov">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="divider-gov mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Compliance & Standards
          </h2>
          <p className="text-lg text-muted-foreground">
            We maintain the highest standards of regulatory compliance and quality 
            assurance across all government and public-sector projects.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="text-center p-6 bg-card rounded-lg border border-border"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-4">
                <cert.icon className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Standards List */}
        <div className="bg-card rounded-lg border border-border p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="font-heading text-xl font-semibold text-foreground">
              Engineering & Safety Standards
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((standard) => (
              <div key={standard} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
