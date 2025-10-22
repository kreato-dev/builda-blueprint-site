import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import service images
import img1 from "@/assets/property12-1.jpg";
import img2 from "@/assets/property12-4.jpg";

const ServiceDetails = () => {
  const { id } = useParams();
  
  const services = [
    {
      title: "Building Construction",
      description: "Our post-construction services gives you peace of mind knowing that we are still here.",
      fullDescription: "We provide comprehensive building construction services from foundation to finishing. Our experienced team ensures quality workmanship, adherence to safety standards, and timely project completion. We handle residential, commercial, and industrial construction projects of all sizes.",
      image: img1,
      features: [
        "Foundation & Structural Work",
        "Complete Building Construction",
        "Quality Material Selection",
        "Safety Compliance",
        "Timely Project Delivery",
        "Post-Construction Support"
      ]
    },
    {
      title: "Architecture Design",
      description: "Our post-construction services gives you peace of mind knowing that we are still here.",
      fullDescription: "Our architectural design services combine creativity with functionality. We create innovative designs that meet your vision while ensuring structural integrity and compliance with local building codes.",
      image: img2,
      features: [
        "Conceptual Design",
        "3D Visualization",
        "Structural Planning",
        "Building Code Compliance",
        "Sustainable Design Solutions",
        "Interior Space Planning"
      ]
    },
    {
      title: "Building Renovation",
      description: "Our post-construction services gives you peace of mind knowing that we are still here.",
      fullDescription: "Transform your existing space with our renovation services. We specialize in modernizing old structures while maintaining their character and improving functionality.",
      image: img1,
      features: [
        "Complete Renovation",
        "Modern Upgrades",
        "Structural Repairs",
        "Energy Efficiency Improvements",
        "Space Optimization",
        "Heritage Restoration"
      ]
    },
    {
      title: "Flooring & Roofing",
      description: "Our post-construction services gives you peace of mind knowing that we are still here.",
      fullDescription: "Expert flooring and roofing solutions that combine durability with aesthetics. We use premium materials and proven installation techniques.",
      image: img2,
      features: [
        "Flooring Installation",
        "Roof Construction",
        "Waterproofing",
        "Thermal Insulation",
        "Material Selection",
        "Warranty & Maintenance"
      ]
    },
    {
      title: "General Contracting",
      description: "Our post-construction services gives you peace of mind knowing that we are still here.",
      fullDescription: "Complete project management from start to finish. We coordinate all aspects of construction to ensure seamless execution and quality results.",
      image: img1,
      features: [
        "Project Management",
        "Subcontractor Coordination",
        "Budget Management",
        "Timeline Adherence",
        "Quality Control",
        "Client Communication"
      ]
    },
    {
      title: "Repair & Expand",
      description: "Our post-construction services gives you peace of mind knowing that we are still here.",
      fullDescription: "Whether you need repairs or want to expand your property, we provide expert services to enhance your space while maintaining structural integrity.",
      image: img2,
      features: [
        "Structural Repairs",
        "Building Extensions",
        "Foundation Work",
        "Load-Bearing Analysis",
        "Compliance Certification",
        "Future-Proof Design"
      ]
    }
  ];

  const serviceIndex = parseInt(id || "0");
  const service = services[serviceIndex] || services[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-primary overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image */}
              <div className="space-y-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="bg-accent/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Need This Service?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get in touch with us for a free consultation and quote.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/#contact">Request a Quote</Link>
                  </Button>
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    About This Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    What We Offer
                  </h3>
                  <div className="grid gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 bg-accent/20 rounded-full p-1">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild variant="outline" className="gap-2">
                  <Link to="/#services">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
