import React, { useEffect } from "react";
import gif from "../assets/Man Running.gif";

const Loader = () => {
  return (
    <div
      className="w-full h-screen absolute inset-0 bg-white z-[100] flex flex-col justify-center items-center"
      id="load"
    >
      <img src={gif} alt="Loading" width={200} className="mb-12" />
      <div className="text-3xl absolute top-[60%] font-bold tracking-wider">
        Loading ...
      </div>
    </div>
  );
};

export default Loader;
