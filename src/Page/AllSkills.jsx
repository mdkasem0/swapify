import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaStar, FaStarHalfAlt, FaRegStar, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router";
import Wrapper from "../Component/Common/Wraper";

const AllSkills = () => {
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
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

  // Filter skills based on search
  const filteredSkills = skills.filter((skill) =>
    skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <section className="  min-h-screen mb-5">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-3"
          >
            All <span className="text-blue-600">Skills</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-500 max-w-md mx-auto"
          >
            Explore all the skills available for learning and teaching.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-12 relative">
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        {/* Skill Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <div
                key={skill.skillId}
                data-aos="fade-up"
                data-aos-delay={index * 50}
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

                  {/* Spacer */}
                  <div className="flex-1"></div>

                  {/* Price & Button */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-blue-600 font-bold text-lg">
                      ${skill.price}
                    </span>
                    <NavLink
                      to={`/skills-details/${skill.skillId}`}
                      className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No skills found.
            </p>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

export default AllSkills;
