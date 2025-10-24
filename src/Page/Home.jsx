import React from "react";
import Wrapper from "../Component/Common/Wraper";
import Aos from "aos";
import "aos/dist/aos.css";
import SwiperComponent from "../Component/Swiper.jsx/Swiper";
import PopularSkills from "../Component/home/PopularSkills";
import TopRatedProviders from "../Component/home/TopRatedProviders";
import HowItWorks from "../Component/home/HowItWorks";
import ExtraSection from "../Component/home/ExtraSection";

Aos.init({ duration: 1000, easing: "ease-in-out" });

const Home = () => {
  return (
    <>
      <div>
        <Wrapper>
            <SwiperComponent/>
        </Wrapper>
      </div>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <Wrapper>
            <PopularSkills/>
        </Wrapper>
      </div>
      <div>
        <Wrapper>
            <TopRatedProviders/>
        </Wrapper>
      </div>
      <div className="bg-gradient-to-b from-white to-blue-50">
        <Wrapper>
            <HowItWorks/>
        </Wrapper>
      </div>
      <div >
        <Wrapper>
            <ExtraSection/>
        </Wrapper>
      </div>
    </>
  );
};

export default Home;
