import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { gsap } from 'gsap';

const Contact = () => {
	useEffect(() => {
		// gsap animation for form
		gsap.from('.form1', { duration: 1, y: 200, opacity: 0, stagger: 0.25 });
	}, []);

	// send email using email.js
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_fd47sjc',
				'template_lwk910q',
				e.target,
				'user_sZObBCE5glj22TCmNR5tQ'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset(); // clear form input fields
	}

	return (
		<div className='contact'>
			<form className='form' onSubmit={sendEmail}>
				<h1 className='form1'>Let's keep in touch</h1>
				<input
					className='input names form1'
					type='text'
					placeholder='Your name'
					name='names'
				/>
				<input
					className='input email form1'
					type='email'
					placeholder='Your email'
					name='email'
				/>
				<textarea
					className='input message form1'
					name='message'
					cols='30'
					rows='10'
					placeholder='Your message'
				></textarea>
				<input className='submit-btn form1' type='submit' />
			</form>
		</div>
	);
};

export default Contact;
