import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router";
Aos.init({ duration: 800 });

const PopularSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.slice(0, 8))) // first 8 skills
      .catch((err) => console.error("Failed to load skills:", err));
  }, []);

  // Helper to render rating stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400 inline" />);
      } else if (i - rating < 1) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-400 inline" />
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 inline" />);
      }
    }
    return stars;
  };

  return (
    <section className="py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold  mb-3">
          Popular <span className="text-blue-600">Skills</span>
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Explore trending skills people are learning and teaching today.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {skills.map((skill, index) => (
          <div
            key={skill.skillId}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden rounded-t-2xl">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              {/* Skill Name */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {skill.skillName}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                {renderStars(skill.rating)}
                <span className="ml-2 text-gray-500 text-sm">
                  {skill.rating.toFixed(1)}
                </span>
              </div>

              {/* Spacer to push price/button to bottom */}
              <div className="flex-1"></div>

              {/* Price & Button */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-600 font-bold text-lg">
                  ${skill.price}
                </span>
                <NavLink to={`/skills-details/${skill.skillId}`} className="px-4 py-2 cursor-pointer text-blue-600 border border-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional "View All" button */}
      <div className="text-center mt-12">
        <NavLink
          to="/allSkills"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-sm"
        >
          View All Skills
        </NavLink>
      </div>
    </section>
  );
};

export default PopularSkills;
