import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				
			<b><Link to='/profiles'>Freelancers</Link></b>
			</li>
			<li>
			<b><Link to='/posts'>Posts</Link></b>
			</li>
			<li>
			<b><Link to='/dashboard'>
					<i className='fas fa-user'></i>
					<span className='hide-sm'>Dashboard</span>
				</Link></b>
			</li>
			<li>
				<a onClick={logout} href='#!'>
					<i className='fas fa-sign-out-alt'></i>
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
			<b><Link to='/profiles'>Freelancers</Link></b>
				
			</li>
			<li>
				<b><Link to='/sponsors'>Sponsors</Link></b>
				
			</li>
			<li>
			<b><Link to='/register'>Register</Link></b>
			</li>
			<li>
			<b><Link to='/login'>Login</Link></b>
			</li>
		</ul>
	);
	//if user is not loading anymore, show authLinks or guestLinks depending on login status
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-code'></i> LANZA LIBRE
				</Link>
			</h1>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
