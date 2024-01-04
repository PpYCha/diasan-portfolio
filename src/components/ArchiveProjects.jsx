import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ArchiveRow from "./ArchiveRow";

const ArchiveProjects = () => {
  const navigate = useNavigate();
  return (
    <div className=" relative">
      {/* <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            "radial-gradient(600px at 1894px 263px, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      ></div> */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <div className="lg:py-24">
          <Link
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              ></path>
            </svg>
            Diasan Diaz
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            All Projects
          </h1>
          <table
            id="content"
            className="mt-12 w-full border-collapse text-left"
          >
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Made at
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              <ArchiveRow
                year="2023"
                project="Pageant Scoring System"
                madeAt="Province of Northern Samar"
                builtWith={["React", "Mui", "Laravel"]}
                link=""
                linkName=""
              />
              <ArchiveRow
                year="2023"
                project="Provincial Engineering Office Information System"
                madeAt="Province of Northern Samar"
                builtWith={["React", "Mui", "Laravel"]}
                link=""
                linkName=""
              />
              <ArchiveRow
                year="2022"
                project="Faculty Workload Equivalent"
                madeAt=""
                builtWith={["React", "Mui", "Laravel"]}
                link=""
                linkName=""
              />
              <ArchiveRow
                year="2022"
                project="Point of Sale and Inventory for a Water Station"
                madeAt=""
                builtWith={["React", "Mui", "Firebase"]}
                link=""
                linkName="https://pos-inventory-water-station.vercel.app/"
              />
              <ArchiveRow
                year="2021"
                project="Returning Residents of Northern Samar"
                madeAt="Province of Northern Samar"
                builtWith={["HTML", "CSS", "PHP", "MySql"]}
                link=""
                linkName=""
              />
              <ArchiveRow
                year="2020"
                project="Service Request Information System"
                madeAt="Province of Northern Samar"
                builtWith={["C#", "MsSql"]}
                link=""
                linkName=""
              />
              <ArchiveRow
                year="2020"
                project="Sangguniang Panlalawigan Legislative Information System"
                madeAt="Province of Northern Samar"
                builtWith={["C#", "MsSql"]}
                link=""
                linkName=""
              />
              <ArchiveRow
                year="2018"
                project="Research Recording System"
                madeAt=""
                builtWith={["C#", "MsSql"]}
                link=""
                linkName=""
              />
              <ArchiveRow
                year="2017"
                project="Air Quality Index Measurement Using Drone, Database Management And Reporting System"
                madeAt="Univeristy of Eastern Philippines"
                builtWith={["Vb.net", "MsSql"]}
                link=""
                linkName=""
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArchiveProjects;
