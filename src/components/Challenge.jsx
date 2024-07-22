import React from "react";

const Challenge = () => {
  const challenges = [
    {
      head: "Emerging Health Threats",
      content: "New diseases and pandemics pose risks",
    },
    {
      head: "Rising Non-Communicable Diseases",
      content: "Increasing cases of chronic conditions like diabetes",
    },
    {
      head: "Resource Limitations",
      content: "Inadequate healthcare infrastructure and funding",
    },
    {
      head: "Health Disparities",
      content: "Persistent inequalities in health access and outcomes",
    },
    {
      head: "Sustainability Issues",
      content: "Need for sustainable health practices and innovation",
    },
  ];

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-24 " id="Challenges">
      <div className="text-center text-4xl mb-6 font-bold bg-[#4c9e38] w-fit py-4 px-6 mx-auto text-white rounded-xl">
        CHALLENGES
      </div>
      <div className="flex flex-col text-2xl gap-y-5">
        {challenges.map((challenge, index) => (
          <div key={index} className="">
            <div className="">
              ✅
              <b className="hover:text-shadow-md transition-all duration-300">
                {challenge.head}
              </b>{" "}
              : {challenge.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenge;
