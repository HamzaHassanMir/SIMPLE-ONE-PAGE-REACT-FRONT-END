import React from "react";

const Services = () => {
  return (
    <div className="py-16 md:py-24 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <h3 className="text-4xl md:text-6xl font-bold">
            <span className="text-6xl md:text-8xl font-bold text-blue-400 block md:inline">
              Solutions
            </span>{" "}
            designed for you
          </h3>
          <p className="text-gray-600 leading-relaxed text-xl md:text-4xl">
            We study your business so we can apply the right strategies.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
          alt="services"
          className="w-full xl:w-auto h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-gray-700 pt-12 font-bold text-center md:text-left">
        <ul className="space-y-3">
          <li>Web Design</li>
          <li>Web Development</li>
          <li>Code Debugging</li>
        </ul>

        <ul className="space-y-3">
          <li>Canva Designs</li>
          <li>Figma Designs</li>
          <li>Adobe Suit</li>
        </ul>
      </div>
    </div>
  );
};

export default Services;

