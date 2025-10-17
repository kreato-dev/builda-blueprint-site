import { Shield, HardHat, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const features = [
    {
      icon: Shield,
      title: "Health & Safety",
      description: "Simple actions make a difference. It starts & end with each employees striving to work safer."
    },
    {
      icon: HardHat,
      title: "Professional Ethics",
      description: "Integrity is one of Graydon core values we are committed to acting beyond reproach in all matters."
    },
    {
      icon: Wrench,
      title: "Experience & Quality",
      description: "We has a reputation for delivering quality products & services. That's because our employees."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wide text-sm">
            OUR FEATURES
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Precision. Strength. Durability.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-primary text-primary-foreground p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 border-2 border-accent rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/80 text-center leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="text-center">
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full">
                    Read More →
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
