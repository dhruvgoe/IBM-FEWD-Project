import React from "react";

const Stratergies = () => {
  const strats = [
    {
      head: "Access to Quality Healthcare",
      content:
        "Ensure healthcare systems are accessible and affordable, providing comprehensive care that addresses physical, mental, and social health needs.",
    },
    {
      head: "Public Health Campaigns",
      content:
        " Implement educational campaigns to promote preventive care, proper nutrition, regular exercise, and mental health awareness.",
    },
    {
      head: "Supportive Environments",
      content:
        "Create healthy environments in schools, workplaces, and communities that encourage healthy behaviors and provide resources for mental and physical well-being.",
    },
    {
      head: "Integration of Mental Health",
      content:
        "Include mental health services in overall health strategies to address issues such as depression, anxiety, and stress, ensuring holistic care.",
    },
    {
      head: "Community-Based Programs",
      content:
        "Develop local programs involving stakeholders to reach underserved populations and address specific health challenges within communities.",
    },
  ];

  return (
    <div className="w-11/12 max-w-7xl mx-auto py-24 " id="Strategies">
      <div className="text-center text-4xl mb-6 font-bold bg-[#4c9e38] w-fit py-4 px-6 mx-auto text-white rounded-xl">
        STRATEGIES
      </div>
      <div className="flex flex-col text-2xl gap-y-5">
        {strats.map((strat, index) => (
          <div key={index} className="">
            <div className="">
              ✅
              <b className="hover:text-shadow-md transition-all duration-300">
                {strat.head}
              </b>{" "}
              : {strat.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stratergies;
