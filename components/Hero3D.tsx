"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import * as THREE from 'three';

function FloatingKnot() {
  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1, 0.35, 220, 32, 2, 3), []);
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.6}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <MeshDistortMaterial
          color="#4ba8ff"
          envMapIntensity={0.8}
          roughness={0.1}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-[60vh] md:h-[70vh]">
      <Canvas shadows camera={{ position: [2.8, 1.8, 3.6], fov: 50 }}>
        <color attach="background" args={[0x0a0f1c]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
        <Suspense fallback={null}>
          <FloatingKnot />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1ce6]" />
    </div>
  );
}
