import CardProject from "./CardProject";
import { Link } from "react-router-dom";
import cimsImage from "../assets/cims.png";
import ploImage from "../assets/plo.png";
import misoImage from "../assets/miso.png";
const Project = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul>
          <CardProject
            title="Provincial Legal Office System"
            description="Developed a workflow and task management system for the Provincial Legal Office to streamline case tracking, task assignments, and document management. Built as a modern web application to improve operational efficiency and collaboration among staff."
            image={ploImage}
            link="https://plo.northern-samar.com/"
          />

          <CardProject
            title="Centralized Indexing Management System"
            description="A centralized system for indexing and managing financial, enabling efficient document retrieval, tracking, and organization across departments."
            image={cimsImage}
            link="https://cims.northern-samar.com/"
          />

          <CardProject
            title="IT Services Online Request System"
            description="Built an online service request and ticketing system that allows employees to submit IT support requests, track ticket status, and manage issue resolution through a centralized dashboard."
            image={misoImage}
            link="https://pgnsmisoservice.northern-samar.com/"
          />
        </ul>

        <div className="mt-12">
          <Link
            className="group inline-flex items-center font-medium leading-tight  text-slate-200"
            aria-label="View Full Project Archive"
            to={"/archive"}
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Archive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
