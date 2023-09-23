import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import HashLoader from 'react-spinners/HashLoader';

const Root = () => {
	const navigation = useNavigation();
	console.log(navigation);

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
