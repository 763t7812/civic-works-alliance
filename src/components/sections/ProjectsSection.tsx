import { ArrowRight, MapPin, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectLibrary from "@/assets/project-library.jpg";
import projectFutsal from "@/assets/project-futsal.jpg";
import projectGovernment from "@/assets/project-government.jpg";
import projectRoundabout from "@/assets/project-roundabout.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      image: projectRoundabout,
      title: "Central District Roundabout Network",
      authority: "Department of Transport",
      location: "Metropolitan Area",
      year: "2024",
      category: "Roads & Infrastructure",
    },
    {
      image: projectGovernment,
      title: "Regional Administrative Complex",
      authority: "Ministry of Public Works",
      location: "Eastern Province",
      year: "2023",
      category: "Government Buildings",
    },
    {
      image: projectLibrary,
      title: "Municipal Public Library",
      authority: "City Council",
      location: "Downtown District",
      year: "2023",
      category: "Educational Infrastructure",
    },
    {
      image: projectFutsal,
      title: "Community Sports Complex",
      authority: "Parks & Recreation Dept.",
      location: "Northern Suburbs",
      year: "2024",
      category: "Sports Facilities",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-gov">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="divider-gov mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Government Projects Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of completed public infrastructure projects demonstrating 
              our commitment to quality and compliance.
            </p>
          </div>
          <Button variant="gov-outline" className="flex-shrink-0">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-gov overflow-hidden group"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {project.category}
                </span>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Details */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>{project.authority}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Completed {project.year}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
