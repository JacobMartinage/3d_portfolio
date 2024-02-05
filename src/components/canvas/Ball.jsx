import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Decal, Float, Icosahedron, OrbitControls, Preload, useTexture,  
  } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Ball = ({imgUrl, name, onBallClick}) => {
  const[decal] = useTexture([imgUrl]);



  return (
    <Float speed = {1.75} rotationIntensity={1} floatIntensity={2} onClick={() => onBallClick(name)}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshNormalMaterial 
          color="#fff8eb" 
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          />
        <Decal       
          position={[0, 0, 1]}
          rotation = {[2*Math.PI, 0, 6.25]}
          map={decal}
          flatShading

        />
      </mesh>
      
    </Float>
  )
}

const BallCanvas = ({ icon, name }) => {
  const [selectedBall, setSelectedBall] = useState(null);

  const handleBallClick = (name) => {
    setSelectedBall(name);
  };

  return (
    
      <Canvas
        frameloop="always"
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} name={name} onBallClick={handleBallClick} />
        </Suspense>

      </Canvas>
  );
  }

export default BallCanvas