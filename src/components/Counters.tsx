import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, Calendar, ThumbsUp } from "lucide-react";

const Counters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const counters = [
    { icon: Briefcase, value: 250, suffix: "+", label: "Projects Completed" },
    { icon: Users, value: 50, suffix: "+", label: "Expert Engineers" },
    { icon: Calendar, value: 12, suffix: "+", label: "Years Experience" },
    { icon: ThumbsUp, value: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end]);

    return (
      <span className="text-4xl md:text-5xl font-heading font-bold text-primary">
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => {
            const Icon = counter.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-accent" />
                </div>
                <AnimatedCounter end={counter.value} suffix={counter.suffix} />
                <p className="mt-2 text-white/80 font-medium">{counter.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Counters;
