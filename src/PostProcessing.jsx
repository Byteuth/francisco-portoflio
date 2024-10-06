import {
	Bloom,
	DepthOfField,
	EffectComposer,
	HueSaturation,
	SMAA,
    Vignette,
} from "@react-three/postprocessing";

const effects = {
	bloom: false,
	depthOfField: false,
	hue: false,
	vignette: false,
}

export function updateEffectList(effect) {
	
}

export default function PostProcessing() {
	

	
	return (
		<EffectComposer multisampling={2}>
			<SMAA />
			<Bloom
				mipmapBlur
				intensity={0.8}
				levels={9}
				opacity={0.4}
				luminanceSmoothing={0.1}
				luminanceThreshold={0.7}
			/>
			<DepthOfField
				focusDistance={0.0005}
				focalLength={0.15}
				// bokehScale={4}
			
			/>
            <HueSaturation saturation={0.3} hue={0.15} />
            <Vignette offset={0.65} opacity={0.7} />
		</EffectComposer>
	);
}
