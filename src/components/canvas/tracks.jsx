import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Tracks = () => {
    const track = useGLTF('src/assets/oneCarandTrack.glb')
    return (
      <mesh>
        <hemisphereLight intensity={3}
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
          position= {[15,-2,4]}
          angle= {.25}
          
          />
      </mesh>
    )
  }
  
  const TrackCanvas = () => {
    return (
      <Canvas
        frameLoop = "demand"
        shadows
        camera= {{ position: [20,3, 5], fov: 15, angle: 2 }}
        gl = {{ preserveDrawingBufferf: true}}
      >
        <Suspense fallback={ <CanvasLoader/>}>
          
        <Tracks/>
        </Suspense>
        <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
          />
        <Preload all />
      </Canvas>
    )
  }
  
  export default TrackCanvas