import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer looking to build a more
					intuitive user experience on the web. 
				</p>
				<p>
					I applied aspects of UX and agile development in a
					recent project. I worked on a team of five to{' '}
					<a
						href=""
						target="_blank"
					>
						develop
					</a>{' '}
					a{' '}
					<a
						href=""
						target="_blank"
					>
						single-page MERN app
					</a>{' '}
					that helps property owners advertise their properties,
					manage their tenants and manage their real estate all
					in one place. I’m excited to leverage my skills as part
					of a fast-paced, quality-driven team to build better
					experiences on the web.
				</p>
			</div>
		</section>
	);
}

export default About;