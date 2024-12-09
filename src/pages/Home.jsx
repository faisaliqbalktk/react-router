export const Home = () => {
	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh' // Ensure full viewport height
		},
		header: {
			position: 'relative',
			width: '100vw', // Full width
			height: '80vh', // Adjusted height of the header section
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'linear-gradient(135deg, #1e90ff, #00c6ff)', // Gradient background
			color: 'white',
			textAlign: 'center',
			padding: '20px',
			margin: '0' // No margin to prevent overflow
		},
		heading: {
			fontSize: '52px',
			fontWeight: 'bold',
			marginBottom: '20px',
			textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Text shadow for depth
		},
		paragraph: {
			fontSize: '20px',
			lineHeight: '1.6',
			maxWidth: '600px',
			textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' // Text shadow for readability
		},
		footer: {
			background: '#333', // Dark footer
			color: 'white',
			textAlign: 'center',
			padding: '20px',
			marginTop: 'auto' // Push footer to the bottom of the screen
		}
	};

	return (
		<div style={styles.container}>
			<header style={styles.header}>
				<h1 style={styles.heading}>{"Hello, I'm Faisal Iqbal"}</h1> {/* Correct JSX string */}
				<p style={styles.paragraph}>
					I am Faisal Iqbal, a passionate MERN Stack Developer with a strong foundation in building dynamic
					and responsive web applications. I specialize in MongoDB, Express.js, React, and Node.js to deliver
					scalable and user-friendly solutions. {"Let's"} create something amazing together!
				</p>
			</header>
			{/* Footer section */}
			<footer style={styles.footer}>
				<p>© 2024 Faisal Iqbal - All Rights Reserved</p>
			</footer>
		</div>
	);
};
