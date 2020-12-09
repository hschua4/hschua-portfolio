import React, { useEffect } from 'react';
import './Projects.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	useEffect(() => {
		//gsap animation (fade in) for project-container and project title
		const part0 = () => {
			let t1 = gsap.timeline();
			t1.from('.z1', { opacity: 0 });
			t1.from('.z2', { opacity: 0 });
			return t1;
		};

		//gsap animation for image nad title for hscook
		const part1 = () => {
			let t1 = gsap.timeline();
			t1.from('.a1', { y: 300, opacity: 0 }); //slide-up animation
			t1.from('.a2', { x: 300, opacity: 0, stagger: 0.25 }); //slide-left animation
			return t1;
		};

		//gsap animation for image nad title for hsphoto
		const part2 = () => {
			let t1 = gsap.timeline();
			t1.from('.b1', { y: 300, opacity: 0 });
			t1.from('.b2', { x: 300, opacity: 0, stagger: 0.25 });
			return t1;
		};

		//gsap animation for image and title for wywt
		const part3 = () => {
			let t1 = gsap.timeline();
			t1.from('.c1', { y: 300, opacity: 0 });
			t1.from('.c2', { x: 300, opacity: 0, stagger: 0.25 });
			return t1;
		};

		//combine all animation into a single master timeline
		let masterTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.project-container',
				start: '-100 80%', //trigger start at 100px above project-container
				end: 'bottom top',
				toggleActions: 'restart none none reverse',
			},
		});
		masterTimeline.add(part0());
		masterTimeline.add(part1()); //start after part0 ends
		masterTimeline.add(part2(), '-=1'); //start 1sec before part1 ends
		masterTimeline.add(part3(), '-=1'); //start 1sec before part2 ends
	}, []);

	return (
		<div className='project-container z1'>
			<h1 className='project-title z2'>Some of my works</h1>
			<div className='project-card'>
				<a target='blank' href='https://happycook.netlify.app/'>
					<div className='image a1'>
						<img src='./images/happycook.jpg' alt='' className='thumbnail' />
					</div>
				</a>
				<div className='description'>
					<h2>
						<a
							target='blank '
							href='https://happycook.netlify.app/'
							className='description-title a2'
						>
							Happy Cook
						</a>
					</h2>
					<p className='description-text a2'>
						A recipe site built with React. Edamam API was used to implement the
						recipe search function.
					</p>
				</div>
			</div>
			<div className='project-card'>
				<a target='blank' href='https://hsphoto.netlify.app'>
					<div className='image b1'>
						<img src='./images/hsphoto.jpg' alt='' className='thumbnail' />
					</div>
				</a>
				<div className='description'>
					<h2>
						<a
							target='blank'
							href='https://hsphoto.netlify.app'
							className='description-title b2'
						>
							HS Photo
						</a>
					</h2>

					<p className='description-text b2'>
						Photography portfolio site used to showcase a photographer's works.
					</p>
				</div>
			</div>
			<div className='project-card'>
				<a target='blank' href='https://wywt.netlify.app'>
					<div className='image c1'>
						<img src='./images/chart.jpg' alt='' className='thumbnail' />
					</div>
				</a>
				<div className='description'>
					<h2>
						<a
							target='blank'
							href='https://wywt.netlify.app'
							className='description-title c2'
						>
							WYWT
						</a>
					</h2>
					<p className='description-text c2'>
						A weight tracker web app created for health enthusiasts. Created
						using React.js with Chart.js.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Projects;
