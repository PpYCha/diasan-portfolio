import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const gradient = gradientRef.current;
      if (gradient) {
        const rect = gradient.getBoundingClientRect();
        const posX = (e.clientX - rect.left) / rect.width;
        const posY = (e.clientY - rect.top) / rect.height;

        gradient.style.background = `radial-gradient(600px at ${posX * 100}% ${
          posY * 100
        }%, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div
          ref={gradientRef}
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background:
              "radial-gradient(600px at 1894px 263px, rgba(29, 78, 216, 0.15), transparent 80%)",
          }}
        ></div>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
