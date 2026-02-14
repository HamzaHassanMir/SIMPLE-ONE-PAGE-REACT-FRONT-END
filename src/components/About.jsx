import React from "react";

const About = () => {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="bg-black/70 flex items-center justify-center px-6 py-24 md:py-40">
        <div className="max-w-3xl text-center text-white space-y-6">
          <p className="uppercase tracking-widest text-xs md:text-sm opacity-80">
            We Make Smart Moves And Get Result Quickly
          </p>

          <h3 className="text-2xl md:text-5xl font-light leading-relaxed">
            First, solve the problem. <br className="hidden md:block" /> 
            Then, write the code.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
