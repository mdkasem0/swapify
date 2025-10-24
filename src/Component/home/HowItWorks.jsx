import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { User, Book, DollarSign, MessageSquare } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <User className="w-10 h-10 text-blue-600" />,
    title: "Create Profile",
    description: "Sign up and set up your profile with skills you can teach or learn.",
  },
  {
    id: 2,
    icon: <Book className="w-10 h-10 text-blue-600" />,
    title: "Browse Skills",
    description: "Explore a wide range of skills offered by local providers.",
  },
  {
    id: 3,
    icon: <DollarSign className="w-10 h-10 text-blue-600" />,
    title: "Book a Session",
    description: "Select a skill, check availability, and book your session.",
  },
  {
    id: 4,
    icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
    title: "Connect & Learn",
    description: "Communicate with your provider and start learning or teaching.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 ">
      <div className="text-center mb-12">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-3"
        >
          How <span className="text-blue-600">It Works</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-500 max-w-md mx-auto"
        >
          Learn, teach, and exchange skills in your community in just a few simple steps.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-5">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
