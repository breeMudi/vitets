import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Contact() {
    return (
      <div>
        <h1>Contact Page</h1>
        <Canvas>
          <mesh>
            <boxGeometry />
            <OrbitControls />
          </mesh>
        </Canvas>
      </div>
    )
  }
  