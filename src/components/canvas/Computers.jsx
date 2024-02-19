import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Html } from '@react-three/drei';



import CanvasLoader from '../Loader';

const Computers = ( { isMobile } ) => {
  const computer = useGLTF('./heroModel8.glb')
  return (
    <mesh rotation={[0, -.30, 0]}>
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
      <mesh position={[0.54, -0.1, -.64]} rotation={[0,Math.PI,0]}> {/* Adjust position within screen */}
                <planeGeometry args={[3.5, 3.2]} /> {/* Adjust size to fit screen */}
                <Html 
                    transform 
                    occlude 
                    scale={[0.45,0.78,1]}
                    position={[0,0,0.125]}
                    style = {{ width: '100%', height: '100%', objectFit: 'contain' }}
                    className= "unselectable"
                >
                  <iframe src="./2d.html" style={{ width: '100%', height: '100%' }} className='unselectable'/>
                </Html>
      </mesh>
      <primitive
        object={computer.scene}
        scale = {isMobile ? 0.9 : 1.3}
        position={isMobile ? [0,-1.25,0] : [0, -2.1, 0]}
        
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
      camera= {{ position: [.3,-8, -2], fov: 40}}
      gl = {{ preserveDrawingBuffer: true}}
  
    >
      <Suspense fallback={ <CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
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