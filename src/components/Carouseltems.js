import React from "react";
import ScandiWeb from "../Images/download.png";

const CarouselItems = ({ items, positionX }) => {
	return items.map((item, index) => {
		return (
			<div
				key={index}
				className="carouselItem"
				style={{
					transform: `translateX(${positionX}%)`,
					backgroundImage: `url(${item.img})`,
				}}
			>
				<section>
					<img src={ScandiWeb} alt="Scandi-Logo" draggable={false} />
					<div
						style={{
							height: "2rem",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<p style={{ color: "#fff" }}>{item.title}</p>
					</div>
				</section>
			</div>
		);
	});
};

export default CarouselItems;
