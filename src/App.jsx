// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Movie } from './pages/Movie';
import AppLayout from './components/layout/AppLayout';
const App = () => {
	// ** new way of routing
	const router = createBrowserRouter([
		{
			path: '/',
			element: <AppLayout />,
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/about',
					element: <About />
				},
				{
					path: '/movie',
					element: <Movie />
				},
				{
					path: '/contact',
					element: <Contact />
				}
			]
		}
	]);
	//**old way of routing */
	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route>
	// 			<Route path="/" element={<Home />} />
	// 			<Route path="/about" element={<About />} />
	// 			<Route path="/contact" element={<Contact />} />
	// 			<Route path="/movie" element={<Movie />} />
	// 		</Route>
	// 	)
	// );

	return <RouterProvider router={router} />;
};

export default App;
