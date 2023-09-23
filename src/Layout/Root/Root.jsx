import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import HashLoader from 'react-spinners/HashLoader';
import { useEffect } from 'react';

const Root = () => {
	const navigation = useNavigation();

	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/') {
			document.title = `Career-Home`;
		} else {
			if (location.state) {
				return (document.title = location.state);
			}
			document.title = `Career ${location.pathname.replace('/', '- ')}`;
		}
	}, [location.pathname, location.state]);

	return (
		<div>
			<Navbar></Navbar>
			{navigation.state === 'loading' ? (
				<div className=" h-screen flex justify-center items-center">
					<HashLoader color="#36d7b7" />
				</div>
			) : (
				<Outlet></Outlet>
			)}
			<Footer></Footer>
		</div>
	);
};

export default Root;
