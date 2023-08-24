import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button onClick={toggleMenu} className="hamburger">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</button>

			<div className={isOpen ? 'menu open' : 'menu'}>
				<ul>
					<li><button>Home</button></li> {/* Changed from <a> to <button> */}
					<li><button>Facilities</button></li> {/* Changed from <a> to <button> */}
					<li><button>Staff</button></li> {/* Changed from <a> to <button> */}
					<li><button>Contact</button></li> {/* Changed from <a> to <button> */}
				</ul>
			</div>
		</div>
	);
};

export default HamburgerMenu;
