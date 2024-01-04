import React from "react";
import CardExperience from "./CardExperience";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol>
          <CardExperience
            inclusiveDates="2020 - Present"
            role="Programmer"
            employer="Province of Northern Samar"
            jobDescription="As a Programmer within government settings, adeptly designing, coding, and implementing software solutions. Collaborated across departments to optimize administrative processes and enhance public service delivery. Key responsibilities included developing applications to streamline operations, improve data management, and support governmental initiatives. Proficient in multiple programming languages and committed to adhering to stringent security protocols. Played a pivotal role in creating efficient and secure software systems, directly impacting the efficiency and effectiveness of governmental services."
            technologies={[
              "React",
              "Tailwind CSS",
              "Material UI",
              "Laravel",
              "NodeJs",
              "C#",
              "MySql",
              "MsSql",
              "Firebase",
              "Git",
              "Github",
            ]}
            link="https://www.facebook.com/NorthernSamarPIO"
          />
          <CardExperience
            inclusiveDates="2019 - 2019"
            role="Graphic Artist"
            employer="Ink for Care Enterprises"
            jobDescription="Creating visually appealing designs for various items such as
            tarpaulins, T-shirts, lanyards, invitations, plaques, and more. My
            expertise lies in crafting creative and eye-catching visuals that
            cater to a diverse range of needs and purposes."
            technologies={["Adobe Photoshop"]}
            link="https://www.facebook.com/ink4care"
          />
          <CardExperience
            inclusiveDates="2018 - 2019"
            role="Co-Owner"
            employer="EDG Gaming"
            jobDescription="As a co-owner of an Internet Shop, I take a hands-on approach in
            computer maintenance. I actively oversee day-to-day operations,
            leveraging my technical expertise to ensure the reliability and
            optimal performance of our computer"
            technologies={[""]}
            link="https://www.facebook.com/edggaminghub"
          />
        </ol>
        <div className="mt-12">
          <Link
            className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
            aria-label="View Full Résumé"
            to={"arhcive"}
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Résumé
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

export default Experience;
