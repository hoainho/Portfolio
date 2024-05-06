import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import planeScene from "../assets/3d/plane.glb";

import { Globals } from "@react-spring/shared";

Globals.assign({
  frameLoop: "demand",
});
// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export function Plane() {
  const birdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(planeScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Check if the plane reached a certain endpoint relative to the camera
    if (birdRef.current.position.x <= -5) {
      birdRef.current.position.z += 0.2;
      birdRef.current.position.x += 0.2;
    }
    if (birdRef.current.position.x <= -4 && birdRef.current.position.z <= -4) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = 7;
      birdRef.current.rotation.x = 0;
    } else if (birdRef.current.position.z <= -4) {
      birdRef.current.rotation.y = -Math.PI / 2;
    } else if (
      birdRef.current.position.x >= 3 &&
      birdRef.current.position.z >= 3
    ) {
      birdRef.current.rotation.y = -3.2;
      birdRef.current.rotation.x = 0.2;
      birdRef.current.rotation.z = 0.2;
    }
    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === -Math.PI / 2) {
      //   // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.rotation.x -= 0.0025;
    } else if (birdRef.current.rotation.y === 7) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z += 0.01;
    } else {
      // Moving forward
      birdRef.current.position.z -= 0.01;
      birdRef.current.position.x -= 0.001;
      birdRef.current.rotation.y += 0.0025;
      birdRef.current.rotation.x += 0.0022;
    }
  });

  return (
    <mesh ref={birdRef} rotation={[0.2, -3.2, 0.2]} position={[5, 2, 1]}>
      <primitive object={scene} />
    </mesh>
  );
}
