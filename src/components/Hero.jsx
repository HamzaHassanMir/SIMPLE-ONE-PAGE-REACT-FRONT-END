import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="bg-[#eef1ec] py-12 md:py-24 px-6 md:px-12">
      <div className="mb-12 md:mb-16 flex items-center justify-center md:justify-start">
        <img src={logo} alt="logo" className="h-6 md:h-7 mx-2 md:mx-3" />
        <h1 className="text-xs md:text-sm tracking-[0.2em] font-semibold">
          Mir's Creative
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Marketing"
          className="w-full md:w-1/2 h-[300px] md:h-[420px] object-cover rounded-xl shadow-lg"
        />

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-light leading-tight">
            Next-level creative digital{" "}
            <span className="font-semibold">marketing solutions</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
