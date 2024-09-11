import React from "react";

function Banner() {
  return (
    <div className="py-2  text-center bg-[#003380]">
      <div className="">
        <p className="font-sans text-[#F0F0F0]">
          <span className="text-base font-normal ">Welcome to </span>
          <span className=" text-[0.9rem]">
            {" "}
            <span className=" decoration-gray-400 font-medium text-[#f0f0f2]">
              GLOBAL INDUSTRIAL SERVICES
            </span>
          </span>{" "}
          <span className="hidden sm:inline">- Notes From The Future.</span>
        </p>
      </div>
    </div>
  );
}

export default Banner;
