import { Building2 } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    "Ministry of Public Works",
    "Department of Transport",
    "Municipal Council",
    "Housing Authority",
    "Education Department",
    "Parks & Recreation",
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-gov">
        <div className="text-center mb-12">
          <p className="text-primary-foreground/70 text-sm font-medium tracking-wider uppercase mb-4">
            Trusted By
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Public Sector Partnerships
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Long-term collaboration with government authorities and public institutions, 
            delivering infrastructure that serves communities.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex flex-col items-center justify-center p-6 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <Building2 className="w-10 h-10 text-primary-foreground/60 mb-3" />
              <p className="text-xs text-center text-primary-foreground/80 font-medium">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
