import "../App.css"
import { useRef, Suspense } from "react";
import {
  Text3D,
  Center,
  Stars,
  Float,
  Sparkles,
  useMatcapTexture
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Mesh } from "three";

function Hero() {
    const [matcapTexture] = useMatcapTexture("161B1F_C7E0EC_90A5B3_7B8C9B");
    const ref = useRef<Mesh>(null);

    const { width: w} = useThree((state) => state.viewport);

    return (
    <>
        <Center scale={[-1, 1, 1]}>
            <Physics gravity={[0, -10, 0]}>
                <Float speed={1}>
                    <Text3D
                        position={[0, 3, -10]}
                        scale={[1, 1, 1]}
                        ref={ref}
                        size={w / 20}
                        font={"/gt.json"}
                        curveSegments={24}
                        bevelEnabled
                        bevelSize={0.08}
                        bevelThickness={0.03}
                        height={0.5}
                        lineHeight={1}
                        letterSpacing={0.3}
                    >
                        {`Welcome to \n my Portfolio!`}
                        <meshMatcapMaterial color="white" matcap={matcapTexture} />
                    </Text3D>
                </Float>
            </Physics>
        </Center>
    </>
    );
}

export default function App() {
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0, -10], fov: 60 }}>
        <Suspense fallback={"Loading"}>
          <Stars
            radius={100}
            depth={100}
            count={4000}
            factor={4}
            saturation={0}
            fade
            speed={0.2}
          />
          <Sparkles
            count={300}
            size={3}
            speed={0.02}
            opacity={1}
            scale={10}
            color="#fff3b0"
          />
          <Hero />
        </Suspense>
        <ambientLight intensity={0.6} color={"#dee2ff"} />
      </Canvas>
    </div>
  );
}
