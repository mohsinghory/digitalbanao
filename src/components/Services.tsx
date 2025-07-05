import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code,Settings,TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
     {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Complete digital marketing services to modernize your business operations.",
      technologies: ["Automation", "Integration", "Growth"],
      gradient: "from-pink-50 to-rose-50",
      iconColor: "bg-pink-600",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications using React, Node.js, Express, and modern JavaScript frameworks.",
      technologies: ["React", "Node.js", "Express"],
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "bg-primary",
    },
   
  
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic IT consulting to optimize your technology infrastructure and processes.",
      technologies: ["Strategy", "Optimization", "Planning"],
      gradient: "from-orange-50 to-red-50",
      iconColor: "bg-orange-600",
    },
    
   
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive Digital Marketing and IT services tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`service-card bg-gradient-to-br ${service.gradient} border-0`}>
              <CardHeader>
                <div className={`${service.iconColor} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-white/50 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
