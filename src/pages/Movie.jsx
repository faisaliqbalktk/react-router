export const Movie = () => {
	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh', // Ensure full viewport height
			background: 'linear-gradient(135deg, #8a2be2, #4b0082)', // Gradient background for the movie page
			color: 'white',
			textAlign: 'center',
			padding: '20px',
			margin: '0'
		},
		header: {
			width: '100vw',
			height: '70vh', // Adjust header height to occupy most of the viewport
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'linear-gradient(135deg, #ff6347, #ff4500)', // Gradient background
			color: 'white',
			textAlign: 'center',
			padding: '20px'
		},
		heading: {
			fontSize: '52px',
			fontWeight: 'bold',
			marginBottom: '20px',
			textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Text shadow for depth
		},
		description: {
			fontSize: '22px',
			lineHeight: '1.6',
			maxWidth: '800px',
			margin: '0 auto', // Center align the description
			textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' // Subtle text shadow for readability
		},
		button: {
			padding: '12px 20px',
			fontSize: '18px',
			backgroundColor: '#ff6347', // Movie button color
			color: 'white',
			border: 'none',
			borderRadius: '4px',
			cursor: 'pointer',
			transition: 'background-color 0.3s ease',
			marginTop: '20px'
		},
		buttonHover: {
			backgroundColor: '#ff4500' // Hover effect color
		}
	};

	return (
		<div style={styles.container}>
			<header style={styles.header}>
				<h1 style={styles.heading}>Movie Title: Inception</h1>
				<p style={styles.description}>
					Inception is a 2010 science fiction action film directed by Christopher Nolan. The story follows a
					skilled thief who steals secrets by infiltrating the subconscious of his targets.{" It's"} a
					mind-bending journey through dreams within dreams.
				</p>
				<button style={styles.button}>Watch Trailer</button>
			</header>
		</div>
	);
};
