import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Services", href: "services" },
    { label: "About", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Contact", href: "contact" },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/digital_banao_logo.jpeg"
                alt="DigitalBanao Logo"
                className="w-12 h-12 rounded-full border-2 border-primary object-cover mr-3"
              />
              <span className="text-2xl font-bold text-gray-900">DigitalBanao</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative group font-medium text-gray-800 transition-colors duration-300 text-lg"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="relative group text-left px-3 py-2 text-gray-800 font-medium text-lg transition-colors duration-300 hover:text-cyan-300"
                    >
                      {item.label}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
