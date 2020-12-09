import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { gsap, Power3 } from 'gsap';

const Navbar = () => {
	const [displayMenu, setDisplayMenu] = useState(false);

	const handleMenuClick = () => {
		setDisplayMenu(!displayMenu);
	};

	useEffect(() => {
		gsap.from('.nav1', {
			duration: 2,
			opacity: 0,
			ease: Power3.easeOut,
		});
	}, []);

	return (
		<div className='navbar nav1'>
			<div className='navbar-container'>
				<NavLink to='/' className='logo'>
					hschua
				</NavLink>
				{/* <div className='nav'> */}
				<div className='menu-icon' onClick={handleMenuClick}>
					{/* toggle menu icon on click */}
					<div className={displayMenu ? 'menu-btn open' : 'menu-btn'}>
						<div className='menu-btn-burger'></div>
					</div>
				</div>
				<ul className={displayMenu ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<NavLink
							exact={true}
							activeClassName='link-active'
							to='/about'
							className='link'
							onClick={handleMenuClick}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							exact={true}
							activeClassName='link-active'
							to='/contact'
							className='link'
							onClick={handleMenuClick}
						>
							Contact
						</NavLink>
					</li>
					<li>
						<a target='blank' href='https://github.com/hschua4'>
							<i
								className='fab fa-github icon link'
								onClick={handleMenuClick}
							></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
		// </div>
	);
};

export default Navbar;
