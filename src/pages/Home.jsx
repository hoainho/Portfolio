import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon, arrow } from "../assets/icons";
import { Bird, Plane, Sky, NightSky, IslandSea, Drone } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [checkInIsland, setCheckInIsland] = useState(false);
  const [moveX, setMoveX] = useState(0);
  const [scaleIsland, setScaleIsland] = useState(null);
  const [activeIsland, setActiveIsland] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [camera] = useState(1000);

  useEffect(() => {
    if (isPlayingMusic && audioRef.current) {
      audioRef.current.play().then(() => console.log('Play audio')).catch((e) => console.log(e));
    }
    return () => audioRef.current.pause();
  }, [isPlayingMusic]);

  useEffect(() => {
    if (moveX >= 13.9) {
      setActiveIsland(true);
      setMoveX(0);
    }
  }, [moveX]);

  useEffect(() => {
    if (checkInIsland) {
      setIsPlayingMusic(true);
      setCurrentStage(1);
      if (!localStorage.getItem("ignore")) {
        localStorage.setItem("ignore", true);
      }
    }
  }, [checkInIsland]);

  useEffect(() => {
    if (localStorage.getItem("ignore")) {
      setActiveIsland(true);
      setMoveX(0);
      setCurrentStage(-1);
        let timeout = setTimeout(() => {
          setCheckInIsland(true)
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, []);
  const adjustDroneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = 0.9;
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = 1;
      screenPosition = [0, -1.5, 0];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = (scale, position) => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = scale ?? -0.13;
      screenPosition = position ?? [0, -4.25, -55];
    } else {
      screenScale = scale ?? -0.09;
      screenPosition = position ?? [0, -10, -50];
    }

    return [screenScale, screenPosition];
  };

  const handleNextStep = () => {
    setCurrentStage(null);
    let i = 0;
    let interval = setInterval(function () {
      if (i >= 14) clearInterval(interval);
      setMoveX(i);
      i += 0.07;
    }, 1);
  };
  const [droneScale, dronePosition] = adjustDroneForScreenSize();
  const [seaScale, seaPosition] = adjustIslandForScreenSize(null, scaleIsland);

  return (
    <section className="w-full h-screen relative">
      <div
        className={`absolute left-0 right-0 z-10 flex items-center justify-center top-28`}
      >
        {currentStage !== null && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: camera }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          {!activeIsland && !localStorage.getItem("ignore") ? (
            <NightSky
              position={[moveX, seaPosition[1], seaPosition[2]]}
              rotation={[0.5, Math.PI, Math.PI]}
              scale={seaScale}
            />
          ) : (
            <Sky isRotating={isRotating} />
          )}
          {activeIsland && (
            <>
              {checkInIsland && (
                <>
                  <Bird setCurrentStage={setCurrentStage} />
                  <Plane />
                </>
              )}

              <IslandSea
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                position={seaPosition}
                rotation={[0.5, Math.PI, Math.PI]}
                scale={seaScale}
                setScaleIsland={setScaleIsland}
                activeIsland={activeIsland}
                setCheckInIsland={setCheckInIsland}
              />
            </>
          )}

          <Drone
            sRotating={isRotating}
            scale={droneScale}
            position={
              moveX > 0
                ? [moveX, dronePosition[1], dronePosition[2] - moveX * 2]
                : dronePosition
            }
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          id="sound-icon"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
      {!activeIsland && moveX === 0 && (
        <div className="absolute bottom-2 right-2 rounded-full bg-white">
          <img
            src={arrow}
            alt="jukebox"
            onClick={() => handleNextStep()}
            className="w-10 h-10 p-2 cursor-pointer object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Home;
