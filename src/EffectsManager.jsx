import { useState } from "react";
import Overlay from "./Interface/Overlay";

export default function EffectsManager() {
	const [effects, setEffects] = useState({
		bloom: false,
		depthOfField: false,
		hue: false,
		vignette: false,
	});

	const toggleEffect = (effect) => {
		setEffects((prevEffects) => ({
			...prevEffects,
			[effect]: !prevEffects[effect],
		}));
	};
    console.log(effects)

	return (<></>
 
		// <div>
			// <Overlay toggleEffect={toggleEffect} />
		// 	{effects.bloom && <div>Bloom effect active</div>}
		// 	{effects.depthOfField && <div>Depth of Field active</div>}
		// 	{effects.hue && <div>Hue effect active</div>}
		// 	{effects.vignette && <div>Vignette effect active</div>}
		// </div>
	);
}
