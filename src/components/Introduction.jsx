import React from 'react'
import man from '../assets/hero-man.jpg'

const Introduction = () => {
  return (
    <div
      className="w-11/12 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-4 "
      id="Introduction"
    >
      <div className=" text-center py-24 text-2xl w-full lg:w-1/2">
        Good health and well-being are fundamental to human happiness and
        societal progress. They form the bedrock upon which individuals can
        build productive and fulfilling lives, contributing not only to personal
        success but also to the collective prosperity of communities and
        nations. Recognizing their importance, the United Nations has included
        <b>"Good Health and Well-Being"</b> as the third goal in its Sustainable
        Development Goals (SDGs). This goal aims to ensure healthy lives and
        promote well-being for all people at all ages, highlighting the
        necessity of a holistic approach to health that encompasses physical,
        mental, and social well-being.
      </div>
      <div className="w-full lg:w-1/2">
        <img src={man} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Introduction