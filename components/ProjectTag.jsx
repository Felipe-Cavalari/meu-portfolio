import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-blue-700 dark:text-slate-200 dark:border-slate-200 border-blue-700 "
    : "text-slate-500 dark:text-[#ADB7BE] dark:hover:border-white dark:hover:text-white border-slate-500 hover:border-blue-700 hover:text-blue-700";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;