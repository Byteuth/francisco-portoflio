import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Overlay from "./Interface/Overlay.jsx";


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<>
		<Canvas
			shadows
			camera={{
				position: [0, 0, 7],
			}}
			gl={{ antialias: false, alpha: false }}
			dpr={1}
		>
			<color args={["#cee7ff"]} attach="background" />
			<Experience />
		</Canvas>
		<Overlay />
	</>
);
