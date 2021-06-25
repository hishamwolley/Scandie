import React, { useState, useEffect, useRef } from "react";
import Nav from "./Nav";

const Header = ({ windowWidth, setWindowWidth }) => {
	const [scrollPosition, setScrollPosition] = useState();
	const [scrollProgressPos, setScrollProgressPos] = useState(
		"scrollProgressContainer1"
	);
	const [mobileNavHeight, setMobileNavHeight] = useState("3.75rem");

	const [isMobile, setIsMobile] = useState(false);
	let progressRef = useRef(null);
	let headerRef = useRef(null);
	let mobileNavRef = useRef(null);

	const listenScrollEvent = (event) => {
		scrollProgress();

		if (progressRef.current.getBoundingClientRect().top < 0) {
			return setScrollProgressPos("scrollProgressContainer2");
		}
		if (headerRef.current.getBoundingClientRect().bottom >= 0) {
			return setScrollProgressPos("scrollProgressContainer1");
		}
	};

	const scrollProgress = () => {
		const scrollPx = document.documentElement.scrollTop;
		const winHeightPx =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
		setScrollPosition(scrolled);
	};

	const handleWindowResize = () => setWindowWidth(window.innerWidth);

	useEffect(() => {
		if (windowWidth <= 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
		window.addEventListener("resize", handleWindowResize);
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [windowWidth, mobileNavHeight]);

	return (
		<>
			<header ref={headerRef}>
				{isMobile ? (
					<Nav
						mobileNav={true}
						mobileNavFixed={scrollProgressPos}
						mobileNavHeight={mobileNavHeight}
						ref={mobileNavRef}
					/>
				) : (
					<Nav />
				)}
			</header>
			<div
				className={scrollProgressPos}
				ref={progressRef}
				style={{
					backgroundColor: "#dbdbe3",
					display: "flex",
					alignItems: "center",
					marginBottom: isMobile ? mobileNavHeight : null,
				}}
			>
				<div
					style={{
						backgroundColor: "#007cba",
						height: "5px",
						width: scrollPosition,
					}}
				></div>
			</div>
		</>
	);
};

export default Header;
