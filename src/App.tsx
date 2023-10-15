import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
// import Message from './Message'
import Alert from './Alert'
import { Color } from 'three'

function App() {
  return (
    <>
    <Alert>
      <h1>How about Now!</h1>
    </Alert>
    <Canvas>
      <mesh scale={2}>
        <boxGeometry />
        <OrbitControls />
      </mesh>
    </Canvas>
      {/* <div>
        <p>WHAT IS THE POINT OF ALL THIS<br/><span>How about we take it a step further</span></p>
        
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
