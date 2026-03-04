import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Stars() {
  const COUNT = 800

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const colors = new Float32Array(COUNT * 3)

    const palette = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#a78bfa'),
      new THREE.Color('#06e5d4'),
      new THREE.Color('#c4b5fd'),
      new THREE.Color('#67e8f9'),
    ]

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 220
      positions[i * 3 + 1] = (Math.random() - 0.5) * 220
      positions[i * 3 + 2] = -Math.random() * 220

      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, colors }
  }, [])

  const ref = useRef<THREE.Points>(null!)
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.015
      ref.current.rotation.x = clock.getElapsedTime() * 0.006
    }
  })

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return g
  }, [positions, colors])

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.55}
        vertexColors
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.85}
      />
    </points>
  )
}

export default function Starfield() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.15} />
        <Stars />
      </Canvas>
    </div>
  )
}
