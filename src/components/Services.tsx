import { Building2, Cog, Construction, MessageSquare, Wrench, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Civil & Structural Design",
      description:
        "Comprehensive design services for residential, commercial, and industrial structures with precision engineering.",
    },
    {
      icon: Cog,
      title: "Steel Structure Fabrication",
      description:
        "Custom steel fabrication and installation for durable, high-strength structural frameworks.",
    },
    {
      icon: Construction,
      title: "Bridge Engineering",
      description:
        "Specialized bridge design and construction services ensuring safety and longevity for critical infrastructure.",
    },
    {
      icon: MessageSquare,
      title: "Project Consultation",
      description:
        "Expert guidance throughout your project lifecycle, from planning to completion and maintenance.",
    },
    {
      icon: Wrench,
      title: "Building Renovation",
      description:
        "Professional renovation and retrofitting services to modernize and strengthen existing structures.",
    },
    {
      icon: Shield,
      title: "Earthquake Resistant Solutions",
      description:
        "Advanced seismic design and reinforcement to protect structures in earthquake-prone regions.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive structural engineering solutions tailored to your
            project needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
