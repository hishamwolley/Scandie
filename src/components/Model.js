import React, { Suspense, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import {
	OrbitControls,
	useGLTF,
	useAnimations,
	Html,
	Box,
} from "@react-three/drei";

const Model = () => {
	return (
		<Suspense fallback={null}>
			<Canvas
				style={{ width: "50vw", height: "100vh", margin: "0 auto" }}
				camera={{ position: [0, 4, 5] }}
			>
				{/* <ambientLight /> */}
				{/* <pointLight position={[0, 10, 0]} intensity={1} /> */}
				<directionalLight />
				<Scene />
			</Canvas>
		</Suspense>
	);
};

function Scene() {
	return (
		<>
			<Globe />
			<OrbitControls />
		</>
	);
}

function Globe() {
	useEffect(() => {
		// actions[names[0]].play();
		console.log(actions, names);
	}, []);
	const gltf = useGLTF("/scene.gltf");
	const { nodes, materials, animations } = useGLTF("/scene.gltf");
	const { ref, names, actions, clips, mixer } = useAnimations(animations);
	return (
		<primitive
			rotation={[0, 4.5, 0]}
			object={gltf.scene}
			position={[0, 0, -7]}
		/>
	);
}

export default Model;
