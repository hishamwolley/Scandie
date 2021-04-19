import React, { useState, useEffect, useRef } from "react";
import CarouselItems from "./Carouseltems";
import CarouselPagination from "./CarouselPagination";
import { items } from "../items";

const Carousel = () => {
	const itemRef = useRef();
	const [positionX, setPositionX] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);
	const [grabbing, setGrabbing] = useState(false);
	const index = useRef(0);
	const startX = useRef(0);
	const endX = useRef(0);
	const animationId = useRef();
	const drag = useRef();

	const getX = (e) => {
		// RETRUNS TOUCH OR MOUSE EVENT COORDINATES
		return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
	};
	const animation = () => {
		// CONTROLS CAROUSELS ANIMATION
		if (drag.current) {
			if (endX.current != 0) {
				setPositionX(endX.current - startX.current + positionX);

				if (endX.current - startX.current > 0) {
					if (endX.current - startX.current > 40) {
						// CONTROL HOW MUCH A USER SCROLLS TILL AUTOMATIC LEFT SHIFT ( 40 )
						drag.current = false;
						index.current -= 1;
					}
				} else {
					if (endX.current - startX.current < -40) {
						// CONTROL HOW MUCH A USER SCROLLS TILL AUTOMATIC RIGHT SHIFT ( -40 )
						drag.current = false;
						index.current += 1;
					}
				}
			}
			animationId.current = requestAnimationFrame(animation);
		}
	};

	const rightClick = () => {
		if (index.current == items.length - 1) {
			// RESET CAROUSEL TO BEG USING BUTTON
			index.current = 0;
			setPositionX(0);
			setActiveIndex(0);
			drag.current = false;
		} else {
			// NEXT CAROUSEL ITEM USING BUTTON
			setActiveIndex(index.current + 1);
			index.current += 1;
			setPositionX(positionX - 100);
		}
	};

	const leftClick = () => {
		if (index.current - 1 < 0) {
			// RESET CAROUSEL TO END USING BUTTON
			index.current = items.length - 1;
			setPositionX((items.length - 1) * -100);
			drag.current = false;
			setActiveIndex(items.length - 1);
		} else {
			// PREVIOUS CAROUSEL ITEM USING BUTTON
			setActiveIndex(index.current - 1);
			index.current -= 1;
			setPositionX(positionX + 100);
		}
	};

	const paginationClick = (i) => {
		// CONTROL CAROUSEL POSITION
		setActiveIndex(i);
		index.current = i;
		setPositionX(i * -100);
	};

	useEffect(() => {
		const handeTouchStart = (e) => {
			// GET INITIAL TOUCH | MOUSE CLICK
			startX.current = getX(e);
			drag.current = true; //STARTS ANIMATION
			animationId.current = requestAnimationFrame(animation);
			endX.current = 0; //RESET ENDX VALUE AFTER END
			setGrabbing(true);
		};
		const handleTouchMove = (e) => {
			if (drag.current) {
				endX.current = getX(e); // GET LAST POSITION OF TOUCH | MOUSE BEFORE LETTING GO
			}
		};
		const handleTouchEnd = () => {
			drag.current = false; // STOPS requestAnimationFrame
			setGrabbing(false);
			if (endX.current != 0 && endX.current - startX.current < 0) {
				// RESET CAROUSEL ITEM TO BEG AFTER SCROLL PAST END
				if (index.current - 1 === items.length - 1) {
					index.current = 0;
					setPositionX(0);
					setActiveIndex(0);
				} else {
					// NEXT CAROUSEL ITEM MOUSE | TOUCH
					setActiveIndex(index.current);
					setPositionX(index.current * -100);
				}
			} else if (endX.current != 0 && endX.current - startX.current > 0) {
				if (index.current < 0) {
					// RESET CAROUSEL ITEM TO END AFTER SCROLL PAST BEG
					index.current = items.length - 1;
					setActiveIndex(items.length - 1);
					setPositionX((items.length - 1) * -100);
				} else {
					// PREVIOUS CAROUSEL ITEM MOUSE | TOUCH
					setActiveIndex(index.current);
					setPositionX(index.current * -100);
				}
			}
			// requestAnimationFrame cleanup
			cancelAnimationFrame(animationId.current);
		};

		if (itemRef.current) {
			itemRef.current.addEventListener("touchstart", handeTouchStart, {
				passive: true,
			});

			itemRef.current.addEventListener("touchmove", handleTouchMove, {
				passive: true,
			});
			itemRef.current.addEventListener("touchend", handleTouchEnd);
			itemRef.current.addEventListener("mousedown", handeTouchStart);
			itemRef.current.addEventListener("mouseup", handleTouchEnd);
			itemRef.current.addEventListener("mousemove", handleTouchMove);
			itemRef.current.addEventListener("mouseleave", handleTouchEnd);
		}

		return () => {
			itemRef.current.removeEventListener("touchstart", handeTouchStart);
			itemRef.current.removeEventListener("touchmove", handleTouchMove);
			itemRef.current.removeEventListener("touchend", handleTouchEnd);

			itemRef.current.removeEventListener("mousedown", handeTouchStart);
			itemRef.current.removeEventListener("mouseup", handleTouchEnd);
			itemRef.current.removeEventListener("mouseleave", handleTouchEnd);
			itemRef.current.removeEventListener("mousemove", handleTouchMove);
		};
	}, [positionX]);

	return (
		<>
			<div
				ref={itemRef}
				className="carouselContainer"
				style={{ cursor: grabbing ? "grabbing" : "grab" }}
			>
				<div className="rightClickContainer">
					<button onClick={rightClick}>→</button>
				</div>
				<div className="leftClickContainer">
					<button onClick={leftClick}>←</button>
				</div>
				<CarouselItems items={items} positionX={positionX} />
				<div className="paginationContainer">
					<CarouselPagination
						items={items}
						paginationClick={paginationClick}
						activeIndex={activeIndex}
					/>
				</div>
			</div>
		</>
	);
};

export default Carousel;
