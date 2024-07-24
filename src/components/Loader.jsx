// Loader.jsx
import React, { useEffect } from "react";
import gif from "../assets/Man Running.gif";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const loader = document.getElementById("load");
    window.addEventListener("load", () => {
      setTimeout(() => {
        loader.classList.add("opacity-0", "invisible");
        document.body.classList.remove("overflow-hidden");
        setLoading(false);
      }, 2000);
    });
  }, [setLoading]);

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
