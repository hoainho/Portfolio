import React from "react";

const Introduce = () => {
  return (
    <>
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Hoai Nho
        </span>{" "}
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm a software engineer from Vietnam. With over 4 years of experience
          in the field. Throughout my career, I have demonstrated proficiency in
          utilizing technologies such as React and Vue for frontend development,
          while also adeptly handling backend tasks with Node.js. My deep
          understanding of JavaScript fundamentals, coupled with a comprehensive
          knowledge of its ecosystem, equips me to tackle complex challenges and
          deliver top-notch solutions.
        </p>
      </div>
    </>
  );
};

export default Introduce;
