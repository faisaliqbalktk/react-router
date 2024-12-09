export const About = () => {
	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh' // Ensure full viewport height
		},
		header: {
			position: 'relative',
			width: '100vw',
			height: '82vh', // Height of the header section
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'linear-gradient(135deg, #00c6ff, #1e90ff)', // Gradient background
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
			maxWidth: '700px',
			margin: '0 auto',
			textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' // Subtle text shadow for readability
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
				<h1 style={styles.heading}>About Me</h1>
				<p style={styles.paragraph}>
					I am Faisal Iqbal, a passionate MERN Stack Developer. With a strong foundation in building dynamic
					and responsive web applications, I specialize in MongoDB, Express.js, React, and Node.js. I enjoy
					solving challenging problems and creating scalable, user-friendly solutions. My focus is on
					delivering high-quality projects that make a difference. {"Let's"} collaborate and build something
					amazing together!
				</p>
			</header>
		</div>
	);
};
