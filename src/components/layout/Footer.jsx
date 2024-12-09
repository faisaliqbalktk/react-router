export const Footer = () => {
	const styles = {
		container: {
			backgroundColor: '#333',
			color: '#fff',
			padding: '10px',
			textAlign: 'center',
			position: 'fixed',
			bottom: 0,
			width: '100%',
			left: 0
		}
	};

	return (
		<footer style={styles.container}>
			<p>&copy; 2024 Your Company. All Rights Reserved.</p>
		</footer>
	);
};
