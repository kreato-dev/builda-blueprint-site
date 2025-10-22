import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Example service images (replace with your own)
import img1 from "@/assets/property12-1.jpg";
import img2 from "@/assets/property12-4.jpg";
import img3 from "@/assets/property12-1.jpg";
import img4 from "@/assets/property12-4.jpg";
import img5 from "@/assets/property12-1.jpg";
import img6 from "@/assets/property12-4.jpg";

const Services = () => {
  const services = [
    {
      title: "Building Construction",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here.",
      image: img1,
    },
    {
      title: "Architecture Design",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here.",
      image: img2,
    },
    {
      title: "Building Renovation",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here.",
      image: img3,
    },
    {
      title: "Flooring & Roofing",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here.",
      image: img4,
    },
    {
      title: "General Contracting",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here.",
      image: img5,
    },
    {
      title: "Repair & Expand",
      description:
        "Our post-construction services gives you peace of mind knowing that we are still here.",
      image: img6,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#fbe5e7] relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-12 text-center md:text-left">
          <div className="text-center">
            <p className="text-[#bf1e2e] font-semibold mb-2 uppercase tracking-wide text-sm">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C]">
              Featured Services
            </h2>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center md:text-left">
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border border-gray-300 text-[#1C1C1C] rounded-full px-5 py-2 text-sm hover:bg-[#bf1e2e] hover:text-white transition duration-300"
                >
                  <Link to={`/service-details/${index}`}>
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements (optional for full Builda effect) */}
        <div className="absolute top-10 left-10 opacity-80 hidden md:block">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#bf1e2e"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5 5"
            />
          </svg>
        </div>

        <div className="absolute bottom-10 right-10 hidden md:block opacity-80">
          <svg width="100" height="50">
            <path
              d="M0 25 Q25 0 50 25 T100 25"
              stroke="#bf1e2e"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Services;
