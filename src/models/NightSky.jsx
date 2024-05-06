import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { a } from "@react-spring/three";

import nightSkyScene from "../assets/3d/night_sky.glb";

import { Globals } from "@react-spring/shared";

Globals.assign({
  frameLoop: "demand",
});
// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function NightSky({ isRotating }, props) {
  const skyRef = useRef();
  const { nodes, materials } = useGLTF(nightSkyScene);

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.001; // Adjust the rotation speed as needed
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <group {...props} ref={skyRef}>
      <group
        position={[-1.007, -6.611, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.003}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material}
            position={[-0.511, -3.321, -0.134]}
            rotation={[0.354, -0.348, -3.024]}
            scale={0.999}
          />
        </group>
      </group>
    </group>
  );
}
