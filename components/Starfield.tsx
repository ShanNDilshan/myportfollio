import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Stars(){
  const points = useMemo(()=>{
    const temp = []
    for(let i=0;i<600;i++){
      const x = (Math.random()-0.5)*200
      const y = (Math.random()-0.5)*200
      const z = -Math.random()*200
      temp.push(x,y,z)
    }
    return new Float32Array(temp)
  },[])

  const ref = useRef<THREE.Points>(null!)
  useFrame(({clock})=>{
    if(ref.current) ref.current.rotation.y = clock.getElapsedTime()*0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={points.length/3} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.6} color={0xffffff} sizeAttenuation depthWrite={false} transparent opacity={0.9} />
    </points>
  )
}

export default function Starfield(){
  return (
    <div style={{position:'fixed', inset:0, zIndex:0}} aria-hidden>
      <Canvas camera={{position:[0,0,10], fov:60}} style={{width:'100%',height:'100%'}}>
        <ambientLight intensity={0.2} />
        <Stars />
      </Canvas>
    </div>
  )
}
