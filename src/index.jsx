import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Overlay from "./Interface/Overlay.jsx";
import { isMobile } from "react-device-detect"; // Import the device detection

console.log(isMobile);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	isMobile ? (
	
		<div className="wrapper-mobile">
			<h2>soon on mobile! :)</h2>
		</div>
	
	) : (
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
	)
);
