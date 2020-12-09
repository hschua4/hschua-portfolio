import React, { useRef, useEffect } from 'react';
import './Main.css';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
	//reference to each story-container
	let body1 = useRef([]);
	body1.current = [];

	const addToBody1 = (el) => {
		if (el && !body1.current.includes(el)) {
			body1.current.push(el);
		}
	};

	useEffect(() => {
		let t1 = gsap.timeline();

		//gsap animation for first story-container
		t1.from('.h1', {
			duration: 1,
			x: -100,
			opacity: 0,
			ease: Power3.easeOut,
		}).from('.h2', {
			duration: 1,
			y: -100,
			opacity: 0,
			ease: Power3.easeOut,
		});

		//gsap animation for other story-container
		body1.current.forEach((el) => {
			gsap.from(el, {
				scrollTrigger: {
					trigger: el,
					start: 'top 75px',
					pin: true,
					scrub: true,
				},
				x: 200,
				opacity: 0,
				ease: Power3.easeOut,
			});
		});
	}, []);

	return (
		<div className='main-container'>
			<div className='story-container'>
				<h1 className='story-text'>
					<span className='h1'>Hi,&nbsp;</span>
					<span className='h2'>
						I'm <span className='highlight'>Hai Siang</span>
					</span>
				</h1>
			</div>
			<div ref={addToBody1} className='story-container'>
				<h1 className='story-text'>
					I'm a self-taught&nbsp;
					<span className='highlight'>Front-end&nbsp;</span>
					Web Developer
				</h1>
			</div>
			<div ref={addToBody1} className='story-container'>
				<h1 className='story-text'>
					For the past 3 years, I was a&nbsp;
					<span className='highlight'>Project Engineer&nbsp;</span>in the
					construction industry
				</h1>
			</div>
			<div ref={addToBody1} className='story-container'>
				<h1 className='story-text'>
					But I never forgot my passion in&nbsp;
					<span className='highlight'>coding</span>
				</h1>
			</div>
			<div ref={addToBody1} className='story-container'>
				<h1 className='story-text'>
					<span className='highlight'>One day,&nbsp;</span>I finally decided to
					quit my job and pursue
					<span className='highlight'> my passion....</span>
				</h1>
			</div>
		</div>
	);
};

export default Main;
