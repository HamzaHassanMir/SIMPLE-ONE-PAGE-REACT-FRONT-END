import React from "react";

const About = () => {
  return (
    <div
      className="relative h-[550px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="min-h-screen bg-black/70 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white space-y-6">
          <p className="uppercase tracking-widest text-sm opacity-80">
            We Make Smart Moves And Get Result Quickly
          </p>

          <h3 className="text-3xl md:text-5xl font-light leading-relaxed">
            First, solve the problem. Then, write the code.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
