import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Mailbox = () => {
    const Mailbox = useGLTF('src/assets/Mailbox.glb')
    return (
      <mesh rotation={[0, 0, 0]}>
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
          object={Mailbox.scene}
          position= {[0,-.5,0]}
          
          />
      </mesh>
      
    )
  }
  
  const MailboxCanvas = () => {
    return (
      <Canvas
        frameLoop = "on demand"
        shadows
        camera= {{position: [0,-4, 0], fov: 16, rotateX: -Math.PI/8, rotateY: Math.PI/2.25 }}
      >
        <Suspense fallback={ <CanvasLoader/>}>
          
        <Mailbox/>
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
  
  export default MailboxCanvas