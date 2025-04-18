// src/components/ComputerCanvas.jsx
import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const Computer = () => {
    // ✅ Correction du chemin GLTF pour GitHub Pages
    const { scene } = useGLTF(import.meta.env.BASE_URL + "desktop_pc/scene.gltf");

    useEffect(() => {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.wireframe = false;
          child.material.transparent = false;
        }
      });
    }, [scene]);

    return (
      <primitive
        object={scene}
        scale={isMobile ? 0.8 : 1}
        position={isMobile ? [0, -2.2, -1.2] : [0, -2.5, 0]}
        rotation={[0, Math.PI, 0]}
      />
    );
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [2, 1.5, 5], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Lumières PBR-friendly */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} castShadow />
        <pointLight position={[-5, 5, 5]} intensity={1.5} />
        <spotLight
          position={[0, 10, 15]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />

        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />

        <Computer />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
