/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from 'react';


const JumpingBall = () =>{
  const ballRef = useRef();
  
  useFrame(({clock})=>{
    if(ballRef.current){
      ballRef.current.rotation.y += 0.01
      ballRef.current.rotation.x += 0.01
      ballRef.current.rotation.z += 0.01
      ballRef.current.position.y += Math.sin(clock.getElapsedTime()) * 0.009

    }
  })
  return(
    <mesh ref={ballRef} >
      <sphereGeometry args={[0.3, 20, 10]}/>
      <meshStandardMaterial color='#468585' emissive='#468585' emissiveIntensity={2}/>
    </mesh>
  )
}

const App = () =>{
  return(
    <Canvas style={{height:'100vh',width: '100vw',display: 'flex', justifyContent: 'center',alignItems: 'center',background:'black'}} camera={{position:[0,2,5]}}>
      <OrbitControls enablePan enableZoom={false} enableRotate rotateSpeed={2}/>
      
      <ambientLight  color='#404040' intensity={0.5}/>
      <directionalLight position={[5,5,5]} color={'white'} intensity={1} castShadow/>
      <directionalLight position={[-5,-5,-5]} color={'blue'} intensity={0.5} />
      <pointLight position={[0,2,0]} color='red' intensity={5} distance={5}/>
      
      <JumpingBall/>
    </Canvas>
  )
}

export default App;