import React from "react";

const Solutions = () => {
  const solutions = [
    {
      head: "Strengthen Healthcare Systems",
      content: "Invest in and expand healthcare infrastructure.",
    },
    {
      head: "Preventive Care Focus",
      content: "Emphasize early detection and prevention of diseases.",
    },
    {
      head: "Address Health Disparities",
      content: "Implement targeted programs to reduce health inequalities.",
    },
    {
      head: "Promote Sustainable Practices",
      content:
        "Adopt environmentally friendly and sustainable health practices.",
    },
    {
      head: "Encourage Global Collaboration",
      content:
        "Foster international cooperation to tackle global health challenges.",
    },
  ];

  return (
    <div>
      <div className="bg-[#4c9e38] Solutions" id="Solutions">
        <div className="w-11/12 max-w-7xl mx-auto py-24 ">
          <div className="bg-white w-fit text-center mx-auto text-[#4c9e38] text-4xl mb-8 font-bold px-6 py-4 rounded-xl">
            SOLUTIONS
          </div>
          <div className="w-11/12 grid mx-auto md:grid-cols-2 text-white gap-4">
            {solutions.map((solution, index) => (
              <div key={index}>
                <div className="">
                  <b className="hover:text-shadow-md hover:text-lg transition-all duration-300">
                    ✓ {solution.head}
                  </b>{" "}
                  : {solution.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-2 bg-white w-full"></div>
      </div>
    </div>
  );
};

export default Solutions;
