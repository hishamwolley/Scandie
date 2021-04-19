import React from "react";

const CarouselPagination = ({ items, activeIndex, paginationClick }) => {
	return items.map((item, i) => {
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
