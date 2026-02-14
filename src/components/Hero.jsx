import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="bg-[#eef1ec] py-24 px-6 md:px-12">
      <div className="mb-16 flex">
        <img src={logo} alt="logo" className="h-7 mx-3" />

        <h1 className="text-sm tracking-[0.2em] font-semibold">
          Mir's Creative
        </h1>
      </div>

      <div className="flex gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Marketing"
          className="w-full h-[420px] object-cover rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            Next-level creative digital
            <span className="font-semibold">marketing solutions</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
