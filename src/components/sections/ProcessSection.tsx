import { ClipboardList, FileCheck, HardHat, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: ClipboardList,
      title: "Government Planning & Design Review",
      description: "Comprehensive project planning in collaboration with government stakeholders, including feasibility studies, budget analysis, and detailed design review.",
    },
    {
      step: "02",
      icon: FileCheck,
      title: "Regulatory Approvals & Site Preparation",
      description: "Securing all necessary permits, conducting environmental assessments, and preparing the construction site according to safety protocols.",
    },
    {
      step: "03",
      icon: HardHat,
      title: "Construction, Supervision & Quality Control",
      description: "Expert construction management with continuous on-site supervision, regular quality inspections, and strict adherence to project specifications.",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Inspection, Handover & Documentation",
      description: "Final inspections by regulatory authorities, comprehensive documentation, and formal handover to government stakeholders with ongoing support.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-gov">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="divider-gov mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Project Execution Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to public infrastructure projects, ensuring 
            transparency, compliance, and excellence at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Number */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto lg:mx-0">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 lg:left-12 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
