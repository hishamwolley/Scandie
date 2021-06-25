import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as CodiTypless } from "../CodiLogo-notype.svg";
import { ReactComponent as CodiLogo } from "../logo.svg";
import { RiCloseLine } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";

const Nav = React.forwardRef(
	({ mobileNav, mobileNavFixed, mobileNavHeight }, ref) => {
		const [navToggle, setNavToggle] = useState(false);
		return (
			<>
				{mobileNav ? (
					<nav
						ref={ref}
						style={{
							height: mobileNavHeight,
							background: "#fff",
							borderBottom: "1px solid #dbdbe3",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							padding: "0 2.5%",
						}}
						className={mobileNavFixed}
					>
						<CgMenuGridO
							onClick={() => {
								setNavToggle(true);
							}}
							style={{
								visibility: mobileNav ? "visible" : "hidden",
								fontSize: "2.375rem",
								color: "#444444",
								cursor: "pointer",
							}}
						/>
						<CodiTypless style={{ width: "45px" }} />
					</nav>
				) : null}
				<nav
					className="headerNav"
					style={{
						width: mobileNav ? (navToggle ? 240 : 0) : null,
						transition: mobileNav ? "width 0.4s ease-out" : null,
					}}
				>
					{mobileNav && navToggle ? (
						<RiCloseLine
							style={{
								visibility: mobileNav && navToggle ? "visible" : "hidden",
								alignSelf: "flex-end",
								marginRight: "1rem",
								marginBottom: "2rem",
								fontSize: "1.5rem",
								cursor: "pointer",
								color: "#444444",

								minWidth: mobileNav ? "1.25rem" : null,
								minHeight: mobileNav ? "1.25rem" : null,
							}}
							onClick={() => {
								setNavToggle(false);
							}}
						/>
					) : null}
					<ul
						style={{
							visibility: !mobileNav
								? "visible"
								: mobileNav && navToggle
								? "visible"
								: "hidden",
						}}
					>
						<li>
							{mobileNav ? (
								<CodiLogo />
							) : (
								<CodiTypless style={{ width: "60px", marginRight: "0.5rem" }} />
							)}
						</li>
						<li>
							<a href="#" className="headerText">
								About
							</a>
						</li>
						<li>
							<a
								style={
									{
										// minWidth: mobileNav ? "120px" : null,
									}
								}
								href="#"
								className="headerText"
							>
								Our Alumni
							</a>
						</li>
						<li>
							<a href="#" className="headerText">
								Blog
							</a>
						</li>
					</ul>
					<ul
						style={{
							visibility: !mobileNav
								? "visible"
								: mobileNav && navToggle
								? "visible"
								: "hidden",
						}}
					>
						<li>
							<a href="#" className="headerText">
								How it Works?
							</a>
						</li>
						<li style={{ marginTop: mobileNav ? "1rem" : null }}>
							<a href="#" className="headerText">
								Login
							</a>
						</li>
					</ul>
				</nav>
				{mobileNav && navToggle ? (
					<div
						onClick={() => {
							setNavToggle(false);
						}}
						style={{
							width: "100%",
							height: "100%",
							position: "fixed",
							top: 0,
							left: 0,
							background: navToggle ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
							zIndex: 9998,
						}}
					></div>
				) : null}
			</>
		);
	}
);

export default Nav;
