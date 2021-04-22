import React from "react";

const CarouselItems = ({ children, positionX }) => {
	return children.map((child, index) => {
		return (
			<div
				key={index}
				className="carouselItem"
				style={{
					transform: `translateX(${positionX}%)`,
				}}
			>
				{child}
			</div>
		);
	});
};

export default CarouselItems;
