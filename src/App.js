import React from "react";
import Carousel from "./components/Carousel";

const App = () => {
	return (
		<Carousel>
			<div style={{ background: "yellow", height: "100%" }}>
				<h1>ScandieWeb is</h1>
			</div>
			<div style={{ color: "red", height: "50%", background: "gray" }}>
				<h2>Awesome</h2>
			</div>
		</Carousel>
	);
};

export default App;
