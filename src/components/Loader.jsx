import { Html } from "@react-three/drei";
import { HN_logo } from "../assets/icons";
const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin overflow-hidden'>
          <img src={HN_logo} alt="loading-spinner" className="object-cover w-full h-full"/>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
