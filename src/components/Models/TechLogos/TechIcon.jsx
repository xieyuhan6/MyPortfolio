import React, { useEffect } from 'react'
import { Float, Environment, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three"

const TechIcon = ({model}) => {
    const { scene }=useGLTF(model.modelPath);
    useEffect(()=>{
      if(model.name==="interactive developer")
      scene.scene.traverse((child)=>{
        if(child.isMesh && child.name==="object_5"){
          child.material=new THREE.MeshStandardMaterial({color:"white"})
        }
      })
    },[scene])

  return (
    <Canvas>
    <ambientLight intensity={0.3}/>
    <directionalLight position={[5,5,5]} intensity={1}/>
    <Environment preset='city'/>
    <OrbitControls enableZoom={false}/>
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene}/>
        </group>
    </Float>
    </Canvas>
  )
}

export default TechIcon