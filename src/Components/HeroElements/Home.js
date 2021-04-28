import React from "react";

export default function Home() {
  return (
    <div className="py-32 px-28 space-y-6 h-full bg-navy">
      <div className=" font-mono text-green">Hi, my name is</div>
      <h1 className=" font-sans text-7xl font-bold  text-slate-lightest">
        Ayushi Srivastava.
      </h1>
      <div className=" font-sans text-7xl font-bold text-slate">
        I build things for the web.
      </div>
      <p className=" leading-relaxed max-w-lg text-slate">
        I'm a Boston-based software engineer who specializes in building (and
        occasionally designing) exceptional digital experiences. Currently, I'm
        an engineer at Upstatement focused on building accessible,
        human-centered products.
      </p>
      <button className="border-2 border-green text-green rounded-lg p-4">
        Get In Touch
      </button>
    </div>
  );
}
