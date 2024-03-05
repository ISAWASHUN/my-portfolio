// import React, { useRef } from 'react';
// import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';
// import { OrbitControls } from '@react-three/drei';
// import { Texture } from 'three';

// const Earth = () => {
//   const meshRef = useRef<THREE.Mesh>(null);
//   const earthTextureImg = '/soccer.jpeg';
//   const texture = useLoader(TextureLoader, earthTextureImg) as Texture;

//   const radius = 5.5;
//   const speed = 1.0;

//   useFrame(({ clock }) => {
//     const time = clock.getElapsedTime();
//     if (meshRef.current) {
//       meshRef.current.rotation.z += 0.01;
//       meshRef.current.position.x = Math.sin(time * speed) * radius;
//       meshRef.current.position.z = Math.cos(time * speed) * radius;
//     }
//   });

//   return (
//     <mesh ref={meshRef}>
//       <sphereGeometry args={[2, 512, 512]} />
//       <meshStandardMaterial map={texture} />
//     </mesh>
//   );
// };

// const Scene = () => {
//   const { camera } = useThree();
//   camera.position.z = 10; // カメラを地球の運動を見渡せるように後ろに設定

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[20, 10, 20]} />
//       <Earth />
//       <OrbitControls />
//     </>
//   );
// };

// export default function App() {
//   return (
//     <div className='canvas-container'>
//       <Canvas>
//         <Scene />
//       </Canvas>
//     </div>
//   );
// }

// import React from 'react'

// const Hero = () => {
//   return (
//     <div className="animated-text">
//         Welcome to Shun Code
//     </div>
//   )
// }

// export default Hero