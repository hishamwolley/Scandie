import React from "react";
import Carousel from "./components/Carousel";

const App = () => {
	return (
		<Carousel>
			<div style={{ background: "yellow", height: "100%" }}>ScandieWeb is</div>
			<div style={{ color: "red" }}>Awesome</div>
		</Carousel>
	);
};

export default App;
