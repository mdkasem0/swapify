import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.postimg.cc/130M7H8C/learn.jpg",
      title: "Learn. Teach. Connect.",
      subtitle:
        "Empower your growth by exchanging skills within your community.",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/NfHdmYBG/discover.jpg",
      title: "Discover Local Talent",
      subtitle: "Find passionate learners and skilled mentors near you.",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/MT9FPYrd/tech.jpg",
      title: "Grow Together, Locally",
      subtitle: "Share your expertise and gain new experiences — for free.",
    },
  ];

  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[calc(100vh*0.7)] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="hero-overlay bg-black/60 backdrop-blur-sm"></div>

              {/* Centered Content */}
              <div className="hero-content text-neutral-content text-center px-6">
                <div className="max-w-xl mx-auto">
                  <h1 className="mb-5 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="mb-8 text-sm sm:text-base md:text-lg text-gray-200">
                    {slide.subtitle}
                  </p>
                  <button
                    className="px-8 py-3 cursor-pointer rounded-full border border-white/40 bg-white/10 text-white font-semibold text-lg backdrop-blur-sm  hover:bg-white/20 hover:border-white/60 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SwiperComponent;
