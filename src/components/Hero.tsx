import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in">
          Building Strong Foundations
          <br />
          for the Future
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
          Expert structural engineers delivering safe and innovative solutions
          for modern infrastructure
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("services")}
          >
            Our Services
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
