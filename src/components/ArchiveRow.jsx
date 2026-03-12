import React from "react";
import { Link } from "react-router-dom";

const ArchiveRow = ({
  year,
  project,
  madeAt,
  builtWith,
  link,
  linkName,
  about,
}) => {
  const isExternal = !!link?.startsWith("http");

  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{year}</div>
      </td>

      <td className="py-4 pr-8 text-sm text-slate-200">
        <div className="font-medium">{project}</div>
        {about && <div className="mt-1 text-xs text-slate-400">{about}</div>}
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
        <div className="translate-y-px whitespace-nowrap">{madeAt}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {builtWith.map((item, index) => {
            const colors = {
              React: "bg-[#58c4dc]/10 text-[#58c4dc]",
              MUI: "bg-[#0073e6]/10 text-[#0073e6]",
              Laravel: "bg-[#f53003]/10 text-[#f53003]",
              "Tailwind CSS": "bg-[#00bcff]/10 text-[#00bcff]",
              "C#": "bg-[#af4796]/10 text-[#af4796]",
              HTML: "bg-[#f2672e]/10 text-[#f2672e]",
              CSS: "bg-[#30aadd]/10 text-[#30aadd]",
              JavaScript: "bg-[#f2bf26]/10 text-[#f2bf26]",
              PHP: "bg-[#7377ad]/10 text-[#7377ad]",
              MsSQL: "bg-[#b01b1b]/10 text-[#b01b1b]",

              Firebase: "bg-[#d62b00]/10 text-[#d62b00]",
              "Vb.net": "bg-[#029ecd]/10 text-[#029ecd]",
              MySQL: "bg-[#00758f]/10 text-[#00758f]",
            };

            const colorClass = colors[item] || "bg-slate-400/10 text-slate-300"; // fallback

            return (
              <li key={index} className="my-1 mr-1.5">
                <div
                  className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${colorClass}`}
                >
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
            {linkName &&
              (isExternal ? (
                <a
                  className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-200 hover:text-teal-300"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {linkName}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ) : (
                <Link
                  to={link}
                  className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-200 hover:text-teal-300"
                >
                  {linkName}
                </Link>
              ))}
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default ArchiveRow;
