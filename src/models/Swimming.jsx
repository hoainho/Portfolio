import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import swimScene from "../assets/3d/swimming_dude.glb";
//https://sketchfab.com/3d-models/wip-swimming-dude-5562c2217f8e467785c654f97d232879
export function Swimming({ isRotating, ...props }) {
  const ref = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(swimScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    console.log('actions', actions);
      actions["Take 01"].play();
  }, [isRotating])

  return (
    <mesh {...props} ref={ref} position={[0, Math.PI * -3, -Math.PI * 24]} scale={0.8}>
      <primitive object={scene} />
    </mesh>
  );
}
