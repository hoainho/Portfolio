import React from "react";
import SkillWithType from "./SkillWithType";
import { SKILL_TYPE } from "../../constants";
const Skill = () => {
  return (
    <div className="py-10 flex flex-col">
      <h3 className="subhead-text">My Skills</h3>

      <div className="mt-16 flex flex-wrap gap-12">
        <SkillWithType type={SKILL_TYPE.FRONTEND}/>
        <SkillWithType type={SKILL_TYPE.BACKEND}/>
        <SkillWithType type={SKILL_TYPE.DATABASE}/>
        <SkillWithType type={SKILL_TYPE.DEVOPS}/>
        <SkillWithType type={SKILL_TYPE.SERVICE}/>
        <SkillWithType type={SKILL_TYPE.STATE_MANAGEMENT}/>
        <SkillWithType type={SKILL_TYPE.VERSION_CONTROL}/>
      </div>
    </div>
  );
};

export default Skill;
