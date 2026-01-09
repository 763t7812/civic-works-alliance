import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "CivicBuild delivered our regional highway project ahead of schedule and within budget. Their attention to safety standards and regulatory compliance was exemplary.",
      author: "Robert Chen",
      role: "Director, Department of Transport",
      organization: "Metropolitan Authority",
    },
    {
      quote: "The new municipal library has become a cornerstone of our community. The quality of construction and the seamless project execution exceeded our expectations.",
      author: "Dr. Sarah Mitchell",
      role: "City Councilor",
      organization: "Downtown District Council",
    },
    {
      quote: "Working with CivicBuild on the sports complex was a model of public-private collaboration. They demonstrated professionalism and technical expertise throughout.",
      author: "James Okonkwo",
      role: "Project Supervisor",
      organization: "Parks & Recreation Dept.",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-gov">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="divider-gov mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Testimonials & Endorsements
          </h2>
          <p className="text-lg text-muted-foreground">
            What government officials and project partners say about working with CivicBuild.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-primary font-medium">
                  {testimonial.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
