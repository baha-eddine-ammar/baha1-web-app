import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "../components/Book";
import { BookUI } from "../components/BookUI";

const Contact = () => {
  return (
    <section className="relative flex items-center c-space section-spacing min-h-screen">
      <div className="w-full h-screen relative">
        <BookUI />
        <Canvas
          shadows
          camera={{
            position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
            fov: 45,
          }}
        >
          <Suspense fallback={null}>
            <Float
              rotation-x={-Math.PI / 4}
              floatIntensity={1}
              speed={2}
              rotationIntensity={2}
            >
              <Book />
            </Float>
            <OrbitControls />
            <Environment preset="studio"></Environment>
            <directionalLight
              position={[2, 5, 2]}
              intensity={2.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0001}
            />
            <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </section>
  );
};

export default Contact;
