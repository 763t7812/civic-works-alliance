import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Building,
      label: "Registered Office",
      value: "CivicBuild Infrastructure Ltd.\n1234 Government District\nMetropolitan City, MC 10001",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (234) 567-890\n+1 (234) 567-891",
    },
    {
      icon: Mail,
      label: "Email",
      value: "tenders@civicbuild.gov\ninfo@civicbuild.gov",
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-gov">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="divider-gov mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact & Official Communication
          </h2>
          <p className="text-lg text-muted-foreground">
            Submit tender inquiries or contact our public works team for project consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg border border-border p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Official Inquiry Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization / Department
                  </label>
                  <Input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Government department or organization"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="official@example.gov"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Select project type</option>
                  <option value="roads">Roads & Infrastructure</option>
                  <option value="buildings">Government Buildings</option>
                  <option value="sports">Sports Facilities</option>
                  <option value="education">Educational Infrastructure</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details / Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project requirements, timeline, and any relevant tender information..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="gov" size="lg" className="w-full">
                Submit Official Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex gap-4 p-6 bg-card rounded-lg border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {info.label}
                  </p>
                  <p className="text-foreground whitespace-pre-line">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Legal Info */}
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">
                Registration & Compliance
              </h4>
              <p className="text-sm text-muted-foreground">
                Company Registration: CB-2001-45678<br />
                Tax ID: 12-3456789<br />
                Government Contractor License: GCL-2025-001234
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
