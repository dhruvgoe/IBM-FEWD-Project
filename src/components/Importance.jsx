import React from "react";
import imp from "../assets/importance-pic.jpg";

const Importance = () => {
  return (
    <div className="bg-[#4c9e38] py-6 " id="Importance">
      <div
        className="text-center text-5xl md:text-7xl mb-6 font-bold pt-6 bg-white w-fit 
      mx-auto text-[#4c9e38] px-6 py-4 mt-10 rounded-xl"
      >
        IMPORTANCE
      </div>
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-4 py-6">
        <div className="w-full lg:w-1/2">
          <img src={imp} alt="" className="w-full" />
        </div>
        <div className="text-white text-center py-24 text-2xl w-full lg:w-1/2 flex flex-col gap-y-8">
          <div>
            <b className="hover:text-shadow-md transition-all duration-300">
              Productivity and Fulfillment
            </b>{" "}
            : Good health allows individuals to pursue education, work, and
            social activities, helping them reach their full potential and
            improve their quality of life.
          </div>
          <div>
            <b className="hover:text-shadow-md transition-all duration-300">
              Economic Growth{" "}
            </b>{" "}
            : Healthy populations are more productive, driving innovation and
            economic development, and reducing the burden on healthcare systems.
          </div>
          <div>
            <b className="hover:text-shadow-md transition-all duration-300">
              Healthcare Efficiency
            </b>{" "}
            : Healthy individuals reduce strain on healthcare systems, leading
            to more effective and affordable care for everyone.
          </div>
          <div>
            <b className="hover:text-shadow-md transition-all duration-300">
              Quality of Life
            </b>
            : Good health enhances overall happiness and social stability,
            enabling individuals to fully participate in their communities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Importance;
