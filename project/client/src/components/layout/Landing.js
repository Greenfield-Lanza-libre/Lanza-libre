import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from './Footer'
import '../../App.css'
//import Services from '../Services/index'


export const Landing = ({ isAuthenticated }) => {
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<>
		<section className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
				<video  src='assets/videos/video-2.mp4'  type="video/mp4" autoPlay loop muted ></video>
					<h1 className='x-large'>Meet Our Freelancers !</h1>
					<p className='lead'>
						Create a freelancer account, add projects and posts, and meet other
						freelancers
					</p>
					<div className='buttons'>
						<Link to='/register' className='btn btn-primary'>
							Sign Up
						</Link>
						<Link to='/login' className='btn btn-light'>
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>

		{/* <section>
		<Services />
		</section> */}

		<section>
		<Footer />
		</section>
		</>
	
	);
};

Landing.propTypes = {
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
