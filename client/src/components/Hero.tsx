import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="home" className="relative gradient-bg py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with{" "}
            <span className="text-yellow-300">Digital Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            DigitalBanao delivers cutting-edge IT consulting services, web development, and digital solutions to accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-white text-primary px-8 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Explore Our Services
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
  );
}
