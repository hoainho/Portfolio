import { Link } from "react-router-dom";

import { arrow, swipe } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 0)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Hoài Nhớ</span>
        👋
        <br />
        A Software Engineer from VietNam 🇻🇳
      </h1>
    );
  if (currentStage === 1)
    return (
      <h1 className='flex flex-col justify-center items-center sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        <div>Welcome to
        <span className='font-semibold mx-2 text-white '>My Portfolio</span>
        👋</div>
        <br />
        Let's swipe or drag left/right on the screen to explore my work 
        <img src={swipe} alt='swipe' className='animate-bounce w-10 h-10 object-contain' />
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Worked with many companies <br /> and picked up many skills along the way
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }
  if (currentStage === 5) {
    return (
      <div className='info-box'>
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        I'm a full stack developer
      </h1>
      </div>
    );

  }

  return null;
};

export default HomeInfo;
