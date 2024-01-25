import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('src/assets/heroModel.glb')
  return (
    <mesh>
      <hemisphereLight intensity={1.5}
      groundColor="black"/>
      <pointLight
      position={[-1,1,1]} 
      intensity={10}/>
      <spotLight
        position={[-20,50,10]}
        angle ={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        position={[0,-3,-3.5]}
        
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop = "demand"
      shadows
      camera= {{ position: [20,3, 5], fov: 35}}
      gl = {{ preserveDrawingBufferf: true}}
    >
      <Suspense fallback={ <CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI /2 }
          minPolarAngle={Math.PI / 2}
        />
      <Computers/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas