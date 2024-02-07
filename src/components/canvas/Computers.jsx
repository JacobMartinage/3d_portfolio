import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';



import CanvasLoader from '../Loader';

const Computers = ( { isMobile } ) => {
  const computer = useGLTF('./heroModel.glb')
  return (
    <mesh rotation={[0, -Math.PI/1.5, 0]}>
      <hemisphereLight intensity={1.8}
      groundColor="black"/>
      <pointLight
      position={[-4,1,1]} 
      intensity={6}/>
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
        scale = {isMobile ? 0.75 : 1.1}
        position={isMobile ? [0,-3.25,-3.5] : [0,-4.25,-3.5]}
        
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    
    setIsMobile(mediaQuery.matches);


    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };

  }, []);

  return (
    <Canvas
      frameloop = "demand"
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
      <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;