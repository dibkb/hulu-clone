import React from "react";

const Icons = ({ title, ICON }) => {
  return (
    <div className="cursor-pointer group w-12 sm:w-24 flex flex-col justify-between items-center hover:text-white">
      <ICON className="h-9 mb-1 group-hover:animate-bounce" />
      <p className="uppercase tracking-wide opacity-0 group-hover:opacity-100 ">
        {title}
      </p>
    </div>
  );
};

export default Icons;
