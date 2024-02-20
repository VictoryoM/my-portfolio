import React from "react";

const ProjectTag = ({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}) => {
  const buttonStyles = isSelected
    ? "text-white border-violet-700"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:shadow-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xs sm:text-sm md:text-lg lg:text-xl cursor-pointer shadow-violet-600 shadow-md transition-all duration-300 ease-in-out hover:border-violet-500 hover:shadow-violet-700 hover:scale-110`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
