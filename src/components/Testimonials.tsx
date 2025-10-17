import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Anderson",
      role: "CEO, Metro Construction",
      content:
        "Builda's structural engineering team exceeded our expectations on the Metropolitan Bridge project. Their attention to detail and innovative solutions were instrumental to our success.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Project Manager, Urban Developers",
      content:
        "Working with Builda was a seamless experience. Their expertise in steel structure fabrication helped us complete our commercial tower ahead of schedule.",
      rating: 5,
    },
    {
      name: "Michael Roberts",
      role: "Director, Infrastructure Corp",
      content:
        "The earthquake-resistant design solutions provided by Builda have given us confidence in the long-term safety of our facilities. Truly professional service.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working
            with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative animate-scale-in">
            <Quote className="w-16 h-16 text-accent/20 absolute top-8 left-8" />

            <div className="relative z-10 pt-8">
              <p className="text-lg md:text-xl text-foreground mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {Array.from({ length: testimonials[currentIndex].rating }).map(
                      (_, i) => (
                        <span key={i} className="text-accent">
                          ★
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={prev}>
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={next}>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
