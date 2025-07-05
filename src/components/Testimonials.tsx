// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       content: "DigitalBanao transformed our business with their exceptional web development services. The team's professionalism and technical expertise exceeded our expectations.",
//       name: "John Smith",
//       position: "CEO, TechCorp",
//       initials: "JS",
//       bgColor: "bg-primary",
//     },
//     {
//       content: "The React application they built for us is incredibly fast and user-friendly. DigitalBanao's attention to detail and commitment to quality is outstanding.",
//       name: "Maria Johnson",
//       position: "CTO, InnovateCo",
//       initials: "MJ",
//       bgColor: "bg-emerald-600",
//     },
//     {
//       content: "Working with DigitalBanao was a game-changer for our digital transformation. Their expertise in Node.js and database optimization improved our performance significantly.",
//       name: "Robert Wilson",
//       position: "Founder, StartupX",
//       initials: "RW",
//       bgColor: "bg-purple-600",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Don't just take our word for it - hear from our satisfied clients
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <Card key={index} className="testimonial-card shadow-lg border-0">
//               <CardContent className="p-8">
//                 <div className="flex items-center mb-4">
//                   <div className="flex text-yellow-400">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mb-6">{testimonial.content}</p>
//                 <div className="flex items-center">
//                   <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
//                     <span>{testimonial.initials}</span>
//                   </div>
//                   <div className="ml-4">
//                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
//                     <div className="text-gray-600 text-sm">{testimonial.position}</div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
