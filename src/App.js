import logo from './logo.svg';
import { Canvas } from "@react-three/fiber";
import {CubeCamera, OrbitControls} from "@react-three/drei";
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls/>
        <ambientLight/>
        <directionalLight/>
        <mesh scale={[1,1,1]} position={[0,-1.4,2]} rotation={[0,Math.PI/4,0]}>
          <boxGeometry/>
          <meshStandardMaterial></meshStandardMaterial>
        </mesh>

        <CubeCamera>
          {(texture) => <mesh>
            <sphereGeometry/>
            <meshStandardMaterial metalness={1} envMap={texture}/>
          </mesh>}
        </CubeCamera>
      </Canvas>
    </div>
  );
}

export default App;
