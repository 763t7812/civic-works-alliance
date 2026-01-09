import { Building2, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      "Roads & Roundabouts",
      "Government Buildings",
      "Sports Facilities",
      "Libraries & Education",
      "Urban Development",
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Compliance", href: "#compliance" },
      { label: "Careers", href: "#" },
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Procurement Standards",
      "Safety Policy",
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-gov py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground rounded flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-lg">CI</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-lg">CivicBuild</p>
                <p className="text-xs text-primary-foreground/70">Infrastructure Solutions</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Building sustainable public infrastructure that serves communities 
              and drives national development.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Government Contractor License: GCL-2025-001234
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold mb-6">Legal & Compliance</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} CivicBuild Infrastructure Ltd. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
