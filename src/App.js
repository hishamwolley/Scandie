import React, { useState, Suspense } from "react";
import Announcement from "./components/Announcement";
import Header from "./components/Header";
import Model from "./components/Model";

const App = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const newWindowWidth = (newWidth) => {
		setWindowWidth(newWidth);
	};
	return (
		<>
			<Announcement windowWidth={windowWidth} />
			<Header windowWidth={windowWidth} setWindowWidth={newWindowWidth} />
			{/* <Suspense fallback={null}> */}
			<Model />
			{/* </Suspense> */}
		</>
	);
};

export default App;
