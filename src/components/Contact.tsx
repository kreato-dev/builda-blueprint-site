import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import aboutImage from "@/assets/about-engineers.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success!",
      description: "Quote request sent successfully! We'll contact you soon.",
    });
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="Team consultation"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
          </div>

          {/* Right side - Form */}
          <div className="bg-background p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Book a consultation
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-card border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your Name*"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-card border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your Email*"
                />
              </div>

              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-card border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-muted-foreground"
                >
                  <option value="civil-structural">Real Estate</option>
                  <option value="steel-fabrication">Steel Fabrication</option>
                  <option value="bridge">Bridge Engineering</option>
                  <option value="consultation">Consultation</option>
                  <option value="renovation">Renovation</option>
                </select>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-card border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Type Your Message"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-lg font-semibold"
              >
                Submit Message 📧
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
