import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Key() {
  const HolyKey = useGLTF("./3dKey/scene.gltf");
  return (
    <>
      <hemisphereLight />
      <ambientLight />
      <pointLight intensity={5} />
      <spotLight
        position={[28, 46, 10]}
        castShadow
        angle={1}
        penumbra={1}
        shadow-mapSize={1024}
      />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

      <mesh>
        <primitive
          object={HolyKey.scene}
          scale={1.2}
          // position={[0, -4.25, -1.5]}
          // rotation={[-0.01, -0.02, -0.01]}
        />
      </mesh>
    </>
  );
}

function App() {
  return (
    <>
      <div id="container">
        <Suspense fallback={null}>
          <Canvas>
            <Key />
          </Canvas>
        </Suspense>
      </div>
    </>
  );
}

export default App;
