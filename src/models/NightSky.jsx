import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import nightSkyScene from "../assets/3d/night_sky.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function NightSky({ isRotating }, props) {
  const sky = useGLTF(nightSkyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.001; // Adjust the rotation speed as needed
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
