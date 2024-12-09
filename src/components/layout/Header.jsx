import { NavLink } from 'react-router-dom';

const styles = {
	navbar: {
		position: 'fixed', // Fixes the navbar at the top
		top: '0', // Keeps the navbar at the top of the page
		left: '0', // Ensures it stretches across the full width
		width: '100%', // Full width of the viewport
		backgroundColor: '#333', // Dark background color for the navbar
		padding: '10px 0', // Padding inside the navbar
		zIndex: '1000', // Ensure it stays on top of other content
		boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' // Subtle shadow for a floating effect
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		listStyle: 'none',
		margin: '0',
		padding: '0'
	},
	navItem: {
		margin: '0 20px' // Space between links
	},
	link: {
		textDecoration: 'none',
		color: '#fff', // White text color
		fontSize: '18px',
		fontWeight: '500',
		padding: '10px 20px', // Padding inside links
		borderRadius: '5px', // Rounded corners
		transition: 'all 0.3s ease' // Smooth transition effect
	},
	activeLink: {
		backgroundColor: '#008CBA', // Active link background color
		color: '#fff' // Text color for active link
	},
	hoverLink: {
		backgroundColor: '#555', // Link background on hover
		color: '#fff' // Text color on hover
	}
};

export const Header = () => {
	return (
		<nav style={styles.navbar}>
			<ul style={styles.container}>
				<li style={styles.navItem}>
					<NavLink
						to="/"
						end
						style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
						onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
						onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
					>
						Home
					</NavLink>
				</li>
				<li style={styles.navItem}>
					<NavLink
						to="/about"
						style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
						onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
						onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
					>
						About
					</NavLink>
				</li>
				<li style={styles.navItem}>
					<NavLink
						to="/movie"
						style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
						onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
						onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
					>
						Movie
					</NavLink>
				</li>
				<li style={styles.navItem}>
					<NavLink
						to="/contact"
						style={({ isActive }) => (isActive ? { ...styles.link, ...styles.activeLink } : styles.link)}
						onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
						onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
