import React from 'react';
import Main from '../Main';
import Projects from '../Projects';
import './Home.css';

const Home = () => {
	return (
		<>
			<div className='home-container'>
				<Main />
				<Projects />
			</div>
		</>
	);
};
export default Home;
