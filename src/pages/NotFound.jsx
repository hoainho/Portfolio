import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Fox } from "../models";
import { Loader } from "../components";

const NotFound = () => {
  return (
    <section className="relative flex flex-col justify-center items-center max-container">
      <div className="min-w-[50%] flex flex-col">
        <h1 className="head-text">Page Not Found</h1>
      </div>

      <div className="flex justify-center items-center lg:w-1/2 w-full lg:h-[550px] md:h-[450px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={"all"}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.7, 0.7, 0.7]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default NotFound;
