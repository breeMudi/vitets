import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About";


const App: React.FC = () => {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/vitets/' element={<Home />}/>
          <Route path='/vitets/about' element={<About />}/>
          <Route path='/vitets/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App




{/* <Alert>
      <h1>How about Now!</h1>
    </Alert> */}
    {/* <Canvas>
      <mesh scale={2}>
        <boxGeometry />
        <OrbitControls />
      </mesh>
    </Canvas> */}
      {/* <div>
        <p>WHAT IS THE POINT OF ALL THIS<br/><span>How about we take it a step further</span></p>
        
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}