import React, { useState, useEffect } from "react";
import { RiCloseLine } from "react-icons/ri";

const Announcement = ({ windowWidth }) => {
	const [height, setHeight] = useState("2rem");

	useEffect(() => {
		if (height === 0) {
			return;
		} else if (windowWidth > 768) {
			setHeight("2rem");
		} else if (windowWidth <= 768) {
			setHeight("3.5rem");
		}
	}, [windowWidth]);
	return (
		<section
			style={{
				position: "relative",
				zIndex: 9999,
				backgroundColor: "#007cba",
				transition: "height 1s ease",
				height: height,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				textAlign: "center",
				padding: windowWidth <= 768 ? "0 2.5%" : "0 12.5%",
				boxShadow: "0px 1px 10px 1px rgba(0, 0, 0, 0.25)",
			}}
		>
			<div
				style={{
					width: "100%",
					justifyContent: "center",
					display: "flex",
					alignItems: "center",
				}}
			>
				<p
					style={{
						color: "#fff",
						display: height ? "block" : "none",
						minWidth: "280px",
						fontSize: "16px",
					}}
				>
					Applications in Beirut & Tripoli are now open &nbsp;
					<span
						style={{
							cursor: "pointer",
							color: "#ffbf0e",
							fontWeight: "700",
							textDecoration: "underline",
						}}
					>
						Apply Now!
					</span>
				</p>
			</div>
			<RiCloseLine
				display={height ? "block" : "none"}
				color="#fff"
				style={{ fontSize: "1.5rem", margin: "0, 1rem", cursor: "pointer" }}
				onClick={() => {
					setHeight(0);
				}}
			/>
		</section>
	);
};

export default Announcement;
