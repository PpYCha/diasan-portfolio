import React, { useEffect, useRef, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    // Add refs for other sections if needed
  };
  useEffect(() => {
    const handleScroll = () => {
      for (const [key, ref] of Object.entries(sectionRefs)) {
        if (ref.current && ref.current.getBoundingClientRect().top <= 100) {
          setActiveSection(key);
        }
      }
    };

    console.log(sectionRefs);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "about" ? "active" : ""
            }`}
            href="#about"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "experience" ? "active" : ""
            }`}
            href="#experience"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Experience
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "projects" ? "active" : ""
            }`}
            href="#projects"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
