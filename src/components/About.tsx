import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "15+", label: "Team Members" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About DigitalBanao</h2>
            <p className="text-lg text-gray-600 mb-6">
              DigitalBanao is a leading IT consulting firm specializing in modern digital marketing and  
              web development. Our team of expert developers and consultants brings years of experience 
              in React, Node.js, and cutting-edge technologies.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in creating digital solutions that not only meet your current needs but also 
              scale with your business growth. Our commitment to excellence and innovation drives 
              everything we do.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern office workspace with team collaboration" 
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
