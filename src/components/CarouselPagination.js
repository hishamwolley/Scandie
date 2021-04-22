import React from "react";

const CarouselPagination = ({ children, activeIndex, paginationClick }) => {
	return children.map((child, i) => {
		return (
			<div
				key={i}
				onClick={() => {
					paginationClick(i);
				}}
				className="paginationClick"
				style={{
					background: activeIndex == i ? "#000" : "#d3d3d3",
				}}
			></div>
		);
	});
};

export default CarouselPagination;
