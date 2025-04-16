import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Fonction qui charge le modèle 3D avec animation flottante
const Computer = () => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");
  const modelRef = useRef(); // 🔁 Référence pour l'animation

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = false;
        child.material.transparent = false;
      }
    });
  }, [scene]);

  // 🔄 Animation : léger flottement vertical
  useFrame((state) => {
    if (modelRef.current) {
      const t = state.clock.getElapsedTime();
      modelRef.current.position.y = -0.4 + Math.sin(t * 2) * 0.1;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.5}
      rotation={[0, Math.PI / 11, 0]}
    />
  );
};

// Canvas qui affiche le modèle
export const ComputersCanvas = () => {
  return (
    <Canvas
      camera={{ position: [1.5, 2.8, 2.5], fov: 24 }}
      className="w-full h-full"
    >
      {/* 🌞 Lumières */}
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <pointLight position={[-5, 5, 5]} intensity={2} />
      <spotLight position={[0, 5, 10]} intensity={4} angle={0.3} penumbra={1} />

      <OrbitControls enableZoom={true} />
      <Computer />
    </Canvas>
  );
};

