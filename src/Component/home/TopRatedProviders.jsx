import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";

Aos.init({ duration: 800, once: true });

const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/providers.json")
      .then((res) => res.json())
      .then((data) => setProviders(data))
      .catch((err) => console.error("Failed to load providers:", err));
  }, []);

  return (
    <section className="my-5">
      <div className="text-center mb-12">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-3"
        >
          Top Rated <span className="text-blue-600">Providers</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-500 max-w-md mx-auto"
        >
          Meet our highly-rated skill providers trusted by the community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {providers.map((provider, index) => (
          <div
            key={provider.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* Image */}
            <div className="w-full flex justify-center bg-gray-100">
              <img
                src={provider.photo}
                alt={provider.name}
                className="w-full h-56 object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between text-center flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {provider.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{provider.skills}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-700 font-medium">
                  {provider.rating.toFixed(1)}
                </span>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all duration-300">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;
