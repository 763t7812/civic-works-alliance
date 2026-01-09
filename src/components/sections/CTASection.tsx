import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-gov">
        <div className="bg-gradient-to-br from-primary to-gov-blue rounded-2xl p-8 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Supporting National and Municipal Development Through Infrastructure
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Partner with CivicBuild for your next public infrastructure project. 
            We deliver quality, compliance, and lasting value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="xl"
              className="bg-accent hover:bg-accent/90"
            >
              <FileText className="w-5 h-5" />
              Submit Tender Inquiry
            </Button>
            <Button 
              variant="hero-secondary" 
              size="xl"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Contact Public Works Team
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
