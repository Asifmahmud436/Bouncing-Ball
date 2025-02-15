/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from 'react';


const JumpingBall = () =>{
  const ballRef = useRef();
  useFrame(()=>{
    if(ballRef.current){
      ballRef.current.rotation.y += 0.01
      ballRef.current.rotation.x += 0.01
    }
  })
  return(
    <mesh ref={ballRef}>
      <sphereGeometry args={[0.7, 20, 10]}/>
      <meshLambertMaterial color='#468585' emissive='#468585'/>
    </mesh>
  )
}

const App = () =>{
  return(
    <Canvas style={{height:'100vh',width: '100vw',display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
      <OrbitControls enablePan enableZoom={false} enableRotate rotateSpeed={2}/>
      <directionalLight position={[3,5,1]} color={0xF0F0F0} intensity={10}/>
      <ambientLight  color='#869525' intensity={10}/>
      
      <JumpingBall/>
    </Canvas>
  )
}

export default App;