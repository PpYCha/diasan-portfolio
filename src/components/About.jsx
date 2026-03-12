import React, { useEffect, useRef, useState } from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Back in college, I discovered my passion for building digital
          solutions that make everyday work easier. What started as a simple
          curiosity about coding has grown into a fulfilling career in software
          development. Over the years, I’ve developed various systems and web
          applications that help improve government workflows and public
          services.
        </p>

        <p className="mb-4">
          Today, I work as a Computer Programmer at the{" "}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://northernsamar.gov.ph/"
            target="_blank"
            rel="noreferrer"
          >
            Provincial Government of Northern Samar
          </a>
          , where I focus on building efficient, secure, and user-friendly
          applications that support digital transformation. I enjoy solving
          real-world problems through code and collaborating with teams to
          deliver meaningful results.
        </p>

        <p>
          When I’m not coding, I’m usually learning new technologies, exploring
          UI/UX design trends, or enjoying a good cup of coffee while working on
          side projects.
        </p>
      </div>
    </section>
  );
};

export default About;
