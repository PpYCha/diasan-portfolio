import React from "react";
import { Link } from "react-router-dom";

const ArchiveRow = ({ year, project, madeAt, builtWith, link, linkName }) => {
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
        <div>
          <div className="block sm:hidden">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base"
              href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
              target="_blank"
              rel="noreferrer"
              aria-label="Integrating Algolia Search with WordPress Multisite"
            >
              <span>
                {project}{" "}
                <span className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
          <div className="hidden sm:block">{project}</div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
        <div className="translate-y-px whitespace-nowrap">{madeAt}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {builtWith.map((item, index) => {
            return (
              <li className="my-1 mr-1.5">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            {linkName !== "" && (
              <Link
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                to={link}
                target="_blank"
                rel="noreferrer"
                aria-label="medium.com"
              >
                <span>
                  {" "}
                  <span className="inline-block">
                    {linkName}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </Link>
            )}
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default ArchiveRow;
