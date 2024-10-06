import {
	Billboard,
	Capsule,
	Environment,
	Float,
	Lightformer,
	MeshTransmissionMaterial,
	OrbitControls,
	Sparkles,
	Text,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import Dna from "./Components/dna";
import PostProcessing from "./PostProcessing";

import CameraRig from "./CameraRig";
import CameraAnimation from "./CameraAnimation";
import EffectsManager from "./EffectsManager";

export default function Experience() {
	return (
		<>
			<Suspense>
				<CameraRig>
					<Float
						speed={1.75}
						floatIntensity={1.2}
						rotationIntensity={4}
						rotation={[-0.8, 0, -Math.PI / 2.5]}
					>
						<Capsule args={[0.9, 2.5, 4, 32]}>
							<MeshTransmissionMaterial
								thickness={0.15}
								anisotropy={0.1}
								ior={1.2}
								clearcoat={1}
								roughness={0.15}
								metalness={0}
								chromaticAberration={0.6}
								anisotropicBlur={4}
							/>
						</Capsule>
						<Dna scale={[0.14, 0.11, 0.14]} />
						<Environment preset="city" environmentIntensity={3}>
							<Lightformer
								form="rect"
								intensity={1}
								position={[2, 3, 3]}
								scale={5}
							/>
							<Lightformer
								form="rect"
								intensity={2}
								position={[-2, 2, -4]}
								scale={5}
							/>
						</Environment>
					</Float>
					<Billboard>
						<Text
							font="bebas-neue-v9-latin-regular.woff"
							position={[0, 0, -2]}
							rotation={[0, 0, 0]}
							fontSize={4}
							fillOpacity={0.2}
							letterSpacing={-0.01}
							color="#008468"
						>
							BYTEUTH
						</Text>
					</Billboard>
				</CameraRig>
				<Sparkles
					count={100}
					size={20}
					scale={[10, 10, 10]}
					position={[0, 0, 0]}
					speed={1}
					opacity={0.9}
					color="white"
					noise={2}
				/>
				<EffectsManager />
				<PostProcessing />
				{/* <CameraRig /> */}
				<CameraAnimation />
			</Suspense>
		</>
	);
}
