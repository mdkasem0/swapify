import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../Context/useAuth";

const SkillDetails = () => {
  const { user } = useAuth();
  const { id } = useParams(); // skillId from URL
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Protect Route
  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: `/skill/${id}` } });
    } else {
      setName(user.displayName || "");
      setEmail(user.email || "");
    }
  }, [user, navigate, id]);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  // Fetch skill data from public JSON
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const foundSkill = data.find((s) => s.skillId.toString() === id);
        setSkill(foundSkill || null);
      })
      .catch((err) => console.error("Failed to load skill:", err));
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success(`Session booked successfully for ${skill.skillName}!`);
    setName( "");
    setEmail( "");
  };

  if (!skill) return <p className="text-center py-20">Loading Skill...</p>;

  return (
    <section className="min-h-screen py-16 px-4 md:px-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Skill Image */}
        <div data-aos="fade-right">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="rounded-2xl w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Skill Info */}
        <div data-aos="fade-left" className="flex flex-col justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {skill.skillName}
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Provider:</span> {skill.providerName} ({skill.providerEmail})
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Category:</span> {skill.category}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Rating:</span> {skill.rating} ⭐
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Slots Available:</span> {skill.slotsAvailable}
          </p>
          <p className="text-gray-700 mb-6">{skill.description}</p>

          {/* Booking Form */}
          <form onSubmit={handleBooking} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Book Session</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SkillDetails;
