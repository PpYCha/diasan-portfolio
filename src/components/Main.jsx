import React from "react";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";

const Main = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Project />
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          The design, inspired by{" "}
          <a
            href="https://brittanychiang.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Britanny Chiang
          </a>{" "}
          work, was replicated by me using{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Visual Studio Code
          </a>
          . It was crafted using{" "}
          <a
            href="https://react.dev/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
        </p>
      </footer>
    </main>
  );
};

export default Main;
