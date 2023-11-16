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
      <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          Loosely designed in{" "}
          <a
            href="https://www.figma.com/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Visual Studio Code
          </a>{" "}
          by yours truly. Built with{" "}
          <a
            href="https://nextjs.org/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
          . All text is set in the{" "}
          <a
            href="https://rsms.me/inter/"
            class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            Inter
          </a>{" "}
          typeface.
        </p>
      </footer>
    </main>
  );
};

export default Main;
