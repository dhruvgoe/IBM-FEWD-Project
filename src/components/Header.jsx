import React from "react";

const Header = () => {
  const headings = [
    "Introduction",
    "Importance",
    "Strategies",
    "Health Inequities",
    "Challenges",
    "Solutions",
  ];
  return (
    <div className="bg-[#4c9e38]">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 gap-6">
        {headings.map((heading, index) => (
          <>
            <div key={index} className="text-xl text-white font-semibold">
              <a
                href={`#${heading}`}
                className="hover:text-2xl duration-300 transition-all"
              >
                {heading}
              </a>
            </div>
            {index === headings.length - 1 ? (
              <></>
            ) : (
              <>
                <div className="w-screen h-0.5 bg-white md:hidden"></div>
                <div className="w-0.5 h-10 bg-white hidden md:block"></div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Header;
