export const Contact = () => {
	const styles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh' // Ensure full viewport height
		},
		header: {
			width: '100vw',
			height: '70vh', // Height of the header section
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'linear-gradient(135deg, #ff6f61, #ff9a8b)', // Gradient background
			color: 'white',
			textAlign: 'center',
			padding: '20px',
			margin: '0'
		},
		heading: {
			fontSize: '52px',
			fontWeight: 'bold',
			marginBottom: '20px',
			textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Text shadow for depth
		},
		formContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			width: '100%',
			padding: '20px',
			textAlign: 'center',
			margin: '20px auto 50px auto'
		},
		form: {
			maxWidth: '600px',
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			gap: '15px',
			backgroundColor: 'white',
			padding: '20px',
			borderRadius: '8px',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Add subtle shadow to the form
		},
		input: {
			padding: '10px',
			fontSize: '16px',
			borderRadius: '4px',
			border: '1px solid #ddd',
			outline: 'none'
		},
		textarea: {
			padding: '10px',
			fontSize: '16px',
			borderRadius: '4px',
			border: '1px solid #ddd',
			outline: 'none',
			height: '150px',
			resize: 'none'
		},
		button: {
			padding: '12px 20px',
			fontSize: '18px',
			backgroundColor: '#ff6f61', // Button color matching header
			color: 'white',
			border: 'none',
			borderRadius: '4px',
			cursor: 'pointer',
			transition: 'background-color 0.3s ease'
		},
		buttonHover: {
			backgroundColor: '#ff9a8b' // Lightened button color on hover
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
				<h1 style={styles.heading}>Contact Me</h1>
				<p>Feel free to reach out. {"I'd"} love to hear from you!</p>
			</header>

			{/* Contact Form Section */}
			<div style={styles.formContainer}>
				<form style={styles.form}>
					<input style={styles.input} type="text" placeholder="Your Name" required />
					<input style={styles.input} type="email" placeholder="Your Email" required />
					<textarea style={styles.textarea} placeholder="Your Message" required />
					<button style={styles.button} type="submit">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};
