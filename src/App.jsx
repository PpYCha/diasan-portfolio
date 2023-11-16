import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ArchiveProjects from "./components/ArchiveProjects";

function App() {
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            "radial-gradient(600px at 1894px 263px, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
    // <ArchiveProjects />
  );
}

export default App;
