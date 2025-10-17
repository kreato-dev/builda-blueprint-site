import { useState } from "react";
import projectBridge from "@/assets/project-bridge.jpg";
import projectBuilding from "@/assets/project-building.jpg";
import projectWarehouse from "@/assets/project-warehouse.jpg";
import projectStadium from "@/assets/project-stadium.jpg";

const Projects = () => {
  const projects = [
    {
      image: projectBridge,
      title: "Metropolitan Highway Bridge",
      location: "Downtown District",
      category: "Bridge Engineering",
    },
    {
      image: projectBuilding,
      title: "Corporate Tower Complex",
      location: "Business Park",
      category: "Commercial Building",
    },
    {
      image: projectWarehouse,
      title: "Industrial Warehouse Facility",
      location: "Manufacturing Zone",
      category: "Industrial Structure",
    },
    {
      image: projectStadium,
      title: "Modern Sports Arena",
      location: "Sports Complex",
      category: "Stadium Design",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Our Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successfully completed structural
            engineering projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.location}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-90" : "opacity-0"
                }`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 ${
                  hoveredIndex === index
                    ? "translate-y-0"
                    : "translate-y-full"
                }`}
              >
                <h3 className="font-heading font-bold text-2xl mb-2">
                  {project.title}
                </h3>
                <p className="text-sm mb-1">{project.location}</p>
                <p className="text-sm font-medium text-accent">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
