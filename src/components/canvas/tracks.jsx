import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Tracks = () => {
    const track = useGLTF('src/assets/oneCarandTrack5.glb')
    return (
      <mesh rotation={[Math.PI / 12, 0, 0]}>
        <hemisphereLight intensity={4.5}
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
          object={track.scene}
          position= {[0.6,0,0]}
          
          />
      </mesh>
      
    )
  }
  
  const TrackCanvas = () => {
    return (
      <Canvas
        frameLoop = "on demand"
        shadows
        camera= {{position: [1,1, -3], fov: 3, rotateX: -Math.PI/8, rotateY: Math.PI/2.25 }}
      >
        <Suspense fallback={ <CanvasLoader/>}>
          
        <Tracks/>
        </Suspense>
        <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
            minAzimuthAngle={-Math.PI/3}
            maxAzimuthAngle={Math.PI/2}
          />
        <Preload all />
      </Canvas>
    )
  }
  
  export default TrackCanvas