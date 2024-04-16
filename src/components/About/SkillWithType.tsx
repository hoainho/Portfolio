import React from "react";
import { SKILL_TYPE, skills } from "../../constants";

const SkillWithType = ({type = SKILL_TYPE.BACKEND}) => {
  return (
    <>
      {skills
        .filter((skill) => skill.type === type)
        .sort((a, b) => b.yoe - a.yoe)
        .map((skill) => (
          <div
            className="group relative block-container w-20 h-20"
            key={skill.name}
          >
            <div className="btn-back rounded-xl" />
            <span
              className="
          transition-all group-hover:-bottom-[40px] group-hover:opacity-100
          absolute bottom-0 right-1/2 translate-x-1/2 opacity-0
          rounded-xl btn
          flex justify-center items-center
          w-[max-content] h-[max-content]
          inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 whitespace-nowrap"
            >
              {skill.yoe} year
            </span>
            <div
              className="transition-all	group-hover:-top-[50px] group-hover:opacity-100
                      absolute top-0 right-1/2 translate-x-1/2 opacity-0
                      rounded-xl btn
                      flex justify-center items-center
                      w-[max-content] h-[max-content]"
            >
              <p className="text-white font-semibold drop-shadow whitespace-nowrap">
                {skill.name}
              </p>
            </div>
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      <hr className="w-full border-slate-200" />
    </>
  );
};

export default SkillWithType;
