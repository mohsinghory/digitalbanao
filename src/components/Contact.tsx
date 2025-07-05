
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Github } from "lucide-react";


export default function Contact() {

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "First Floor, D-242, F-21,Sector-63, Noida, Gautam Buddha Nagar, U.P, 201301 India ",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "8750092628",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@digitalbanao.org",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday:", hours: "10:00 AM - 7:00 PM" },
    { day: "Saturday:", hours: "10:00 AM - 7:00 PM" },
    { day: "Sunday:", hours: "Closed" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", bgColor: "bg-blue-600 hover:bg-blue-700" },
    { icon: Twitter, href: "#", bgColor: "bg-blue-400 hover:bg-blue-500" },
    { icon: Linkedin, href: "#", bgColor: "bg-blue-700 hover:bg-blue-800" },
    { icon: Github, href: "#", bgColor: "bg-gray-800 hover:bg-gray-900" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your digital transformation? Contact us today for a free consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.title}</div>
                      <div className="text-gray-600 whitespace-pre-line">{info.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                {businessHours.map((hours, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{hours.day}</span>
                    <span>{hours.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.bgColor} text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
