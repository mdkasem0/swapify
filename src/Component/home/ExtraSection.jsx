import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Users, Award, Globe, Heart } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: <Users className="w-10 h-10 text-blue-600" />,
    title: "Community Driven",
    description: "Connect with local learners and mentors in your area.",
  },
  {
    id: 2,
    icon: <Award className="w-10 h-10 text-blue-600" />,
    title: "Trusted Providers",
    description: "Highly-rated skill providers you can rely on.",
  },
  {
    id: 3,
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: "Local & Global Skills",
    description: "Learn practical skills locally while gaining global knowledge.",
  },
  {
    id: 4,
    icon: <Heart className="w-10 h-10 text-blue-600" />,
    title: "Flexible & Fun",
    description: "Learn at your own pace and enjoy the process.",
  },
];

const ExtraSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 ">
      <div className="text-center mb-12">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-3"
        >
          Why <span className="text-blue-600">Swapify?</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-500 max-w-md mx-auto"
        >
          Swapify helps you learn, teach, and grow with people in your community.
          Here’s why users love our platform:
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-5">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-500 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraSection;
