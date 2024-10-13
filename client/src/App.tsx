import { Canvas } from "@react-three/fiber";
import "./App.css";
import Cube from "./components/Cube";

function App() {
  return (
    <>
      <Canvas className="canvas1">
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} /> {/*W, L, D */}
        <Cube />
      </Canvas>
    </>
  );
}

export default App;
