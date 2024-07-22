import React from "react";
import heart from "../assets/heart-foot.png";

const Footer = () => {
  const general = [
    {
      name: "Sustainable Development",
      link: "https://sdgs.un.org/goals",
    },
    {
      name: "Good Health & Well Being",
      link: "https://sdgs.un.org/goals/goal3",
    },
    {
      name: "UN Sustainable Development",
      link: "https://www.undp.org/sustainable-development-goals",
    },
    {
      name: "United Nation : SDG",
      link: "https://www.un.org/sustainabledevelopment/",
    },
  ];

  const quick = [
    {
      name: "Introduction",
      link: "#Introduction",
    },
    {
      name: "Importance",
      link: "#Importance",
    },
    {
      name: "Strategies",
      link: "#Strategies",
    },
    {
      name: "Health Inequities",
      link: "#Health Inequities",
    },
    {
      name: "Challenges",
      link: "#Challenges",
    },
    {
      name: "Solutions",
      link: "#Solutions",
    },
  ];

  const ibm = [
    {
      name: "IBM",
      link: "https://www.ibm.com/in-en/about",
    },
    {
      name: "IBM-India",
      link: "https://www.ibm.com/in-en",
    },
    {
      name: "IBM-World Economic Forum",
      link: "https://www.weforum.org/organizations/ibm-corporation/",
    },
    {
      name: "IBM-Skillsbuild",
      link: "https://skillsbuild.org/",
    },
  ];

  return (
    <div className="w-full bg-[#4c9e38] p-8">
      <div className="w-11/12 mx-auto max-w-7xl flex flex-col md:flex-row items-start justify-around gap-6">
        <div className="pr-8">
          <div className="text-white font-bold text-2xl pb-4">
            General Links
          </div>
          <div className="flex flex-col justify-center gap-y-4">
            {general.map((gen, index) => (
              <div
                key={index}
                className="text-white text-lg font-semibold
              flex flex-col gap-2 hover:underline decoration-white"
              >
                <a href={gen.link}>{gen.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="pr-8">
          <div className="text-white font-bold text-2xl pb-4">Quick Links</div>
          <div className="flex flex-col justify-center gap-y-4">
            {quick.map((gen, index) => (
              <div
                key={index}
                className="text-white text-lg font-semibold
              flex flex-col gap-2 hover:underline decoration-white"
              >
                <a href={gen.link}>{gen.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="pr-8">
          <div className="text-white font-bold text-2xl pb-4">IBM Links</div>
          <div className="flex flex-col justify-center gap-y-4">
            {ibm.map((gen, index) => (
              <div
                key={index}
                className="text-white text-lg font-semibold
              flex flex-col gap-2 hover:underline decoration-white"
              >
                <a href={gen.link}>{gen.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <img src={heart} alt="" width="300" className="heart" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
