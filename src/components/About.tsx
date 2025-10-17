import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-engineers.jpg";

const About = () => {
  const features = [
    "Site analysis and feasibility studies.",
    "100% Satisfaction guarantee",
    "Architectural design tailored to business needs."
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Structural engineers reviewing blueprints"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-accent font-semibold mb-2 uppercase tracking-wide text-sm">
                ABOUT ME
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Structural Solutions<br />That Stand Tall.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Structural engineering is a crucial branch of civil engineering that focuses on designing, analyzing, and constructing safe, durable, and efficient structures. It ensures that buildings, bridges, towers, and other infrastructures.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>

            <Button className="mt-6 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8">
              More About Builda →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
