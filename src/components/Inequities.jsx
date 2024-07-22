import React from "react";
import equality from "../assets/equity.png";

const Inequities = () => {
  const equities = [
    {
      head: "Fair Resource Allocation",
      content: "Invest in underserved healthcare areas",
    },
    {
      head: "Targeted Interventions",
      content: "Address social determinants of health.",
    },
    {
      head: "Community Engagement",
      content: "Involve local stakeholders and communities",
    },
    {
      head: "Policy and Advocacy",
      content: "Promote health equity through policies",
    },
  ];
  const inequities = [
    {
      head: "Unequal Resource Access",
      content: "Disparities in healthcare resource distribution",
    },
    {
      head: "Social Barriers",
      content: "Systemic issues affecting health access.",
    },
    {
      head: "Disparity in Outcomes",
      content: "Differences in health outcomes among groups",
    },
    {
      head: "Systemic Inequalities",
      content: "Factors creating health disparities",
    },
  ];

  return (
    <div className="bg-[#4c9e38] " id="Health Inequities">
      <div className="w-11/12 max-w-7xl mx-auto py-24 ">
        <div className="bg-white w-fit text-center mx-auto text-[#4c9e38] text-4xl mb-8 font-bold px-6 py-4 rounded-xl">
          Addressing Health Inequities
        </div>
        <div className="w-11/12 grid mx-auto md:grid-cols-2 text-white gap-4">
          {inequities.map((inequity, index) => (
            <div key={index}>
              <div className="">
                <b className="hover:text-shadow-md hover:text-lg transition-all duration-300">
                  ✓ {inequity.head}
                </b>{" "}
                : {inequity.content}
              </div>
            </div>
          ))}
        </div>
        <img src={equality} alt="" className="heart mx-auto w-2/5 pt-4" />
        <div className="mt-8">
          <div className="bg-white w-fit text-center mx-auto text-[#4c9e38] text-4xl mb-8 font-bold px-6 py-4 rounded-xl">
            Health Equities
          </div>
          <div className="w-11/12 grid mx-auto md:grid-cols-2 text-white gap-4">
            {equities.map((equity, index) => (
              <div key={index}>
                <div className="">
                  <b className="hover:text-shadow-md hover:text-lg transition-all duration-300">
                    ✓ {equity.head}
                  </b>{" "}
                  : {equity.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inequities;
