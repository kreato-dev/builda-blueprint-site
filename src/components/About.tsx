import { Award, Clock, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/about-engineers.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Construction",
      description: "Premium materials and expert craftsmanship in every project",
    },
    {
      icon: Lightbulb,
      title: "Innovative Design",
      description: "Cutting-edge solutions that push engineering boundaries",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable project completion within agreed timelines",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src={aboutImage}
              alt="Structural engineers reviewing blueprints at construction site"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
              Trusted Structural Engineering Experts
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over a decade of experience in structural engineering, we
              specialize in delivering comprehensive solutions for complex
              infrastructure projects. Our team of certified engineers combines
              technical expertise with innovative thinking to ensure every
              structure we design meets the highest standards of safety,
              durability, and functionality.
            </p>

            {/* Features Grid */}
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-secondary rounded-lg hover-lift"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
