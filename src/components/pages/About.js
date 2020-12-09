import React, { useEffect } from 'react';
import './About.css';
// npm install --save-dev @iconify/react @iconify-icons/ant-design
import { Icon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';
// npm install --save-dev @iconify/react @iconify-icons/logos
import netlifyIcon from '@iconify-icons/logos/netlify';
// npm install --save-dev @iconify/react @iconify-icons/vscode-icons
import fileTypeVscode2 from '@iconify-icons/vscode-icons/file-type-vscode2';
import { gsap } from 'gsap';

const About = () => {
	useEffect(() => {
		//gsap animation (fade in) for profile
		const part1 = () => {
			let t1 = gsap.timeline();
			t1.from('.profile1', {
				duration: 1,
				opacity: 0,
				stagger: 0.25,
			});
			return t1;
		};

		//gsap animation (slide left) for "Skils", "Languages", "Tools"
		const part2 = () => {
			let t1 = gsap.timeline();
			t1.from('.skill1', {
				duration: 0.5,
				opacity: 0,
				stagger: 0.05,
			});
			return t1;
		};

		//gsap animation (slide left) for "HTML", "CSS", "JS", ...
		const part3 = () => {
			let t1 = gsap.timeline();
			t1.from('.item1', {
				duration: 0.8,
				opacity: 0,
				stagger: 0.2,
			});
			return t1;
		};

		//gsap animation (grow) for skill bars
		const part4 = () => {
			let t1 = gsap.timeline();
			t1.from('.bar1', {
				duration: 0.8,
				scaleX: 0,
				transformOrigin: '0px 0px',
				stagger: 0.2,
			});
			return t1;
		};

		//gsap animation (fade in) for percentages
		const part5 = () => {
			let t1 = gsap.timeline();
			t1.from('.percent1', {
				duration: 0.8,
				opacity: 0,
				stagger: 0.2,
			});
			return t1;
		};

		//combine all animations into a single master timeline
		let masterTimeline = gsap.timeline();
		masterTimeline
			.add(part1())
			.add(part2())
			.add(part3())
			.add(part4(), '-=2.3') //starts 2.3sec begore part4 ends
			.add(part5(), '-=1.7'); //starts 1.7sec begore part4 ends
	}, []);

	return (
		<div className='about'>
			<div className='about-container'>
				<div className='profile'>
					<div className='profile-container'>
						<div className='profile-picture'>
							<img src='./images/hs.jpg' alt='' className='profile1' />
						</div>
						<div className='name'>
							<h1 className='profile1'>Chua Hai Siang</h1>
							<p className='profile1'>A firm believer of form and function</p>
						</div>
					</div>
				</div>
				<div className='skillset'>
					<div className='skill'>
						<h2 className='skill1'>Skills</h2>
						<div className='skill-description'>
							<ul className='skill-item'>
								<li className='item1'>HTML</li>
								<li className='item1'>CSS</li>
								<li className='item1'>Javascript</li>
								<li className='item1'>React</li>
							</ul>
							<ul className='skill-level'>
								<li>
									<span className='bar bar1' id='html'></span>
									<span className='percent percent1'>85%</span>
								</li>
								<li>
									<span className='bar bar1' id='css'></span>
									<span className='percent percent1'>85%</span>
								</li>
								<li>
									<span className='bar bar1' id='js'></span>
									<span className='percent percent1'>70%</span>
								</li>
								<li>
									<span className='bar bar1' id='react'></span>
									<span className='percent percent1'>65%</span>
								</li>
							</ul>
						</div>
					</div>
					<div className='skill'>
						<h2 className='skill1'>Languages</h2>
						<div className='skill-description'>
							<ul className='skill-item'>
								<li className='item1'>English</li>
								<li className='item1'>Malay</li>
								<li className='item1'>Chinese</li>
							</ul>
							<ul className='skill-level'>
								<li>
									<span className='bar bar1' id='english'></span>
									<span className='percent percent1'>90%</span>
								</li>
								<li>
									<span className='bar bar1' id='malay'></span>
									<span className='percent percent1'>90%</span>
								</li>
								<li>
									<span className='bar bar1' id='chinese'></span>
									<span className='percent percent1'>70%</span>
								</li>
							</ul>
						</div>
					</div>
					<div className='skill'>
						<h2 className='skill1'>Tools</h2>
						<ul className='tools'>
							<li className='item1'>
								<Icon icon={fileTypeVscode2} width='50' height='50' />
								<p>Visual Studio Code</p>
							</li>
							<li className='item1'>
								<Icon icon={githubFilled} color='#fff' width='50' height='50' />
								<p>GitHub</p>
							</li>
							<li className='item1'>
								<Icon icon={netlifyIcon} width='50' height='50' />
								<p>Netlify</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
