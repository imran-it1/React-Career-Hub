import { NavLink } from 'react-router-dom';
import banner from '../../assets/images/user.png';

const Banner = () => {
	return (
		<div className="bg-blue-50">
			<div className="max-w-7xl mx-auto flex h-screen items-center">
				<div>
					<h1 className=" text-[#1A1919] text-7xl font-extrabold max-w-lg mb-6">
						One Step Closer To Your <br />
						<span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
							Dream Job
						</span>
					</h1>
					<p className="text-gray-500 text-lg font-medium">
						Explore thousands of job opportunities with all the
						information you need. Its your future. Come find it.
						Manage all your job application from start to finish.
					</p>
					<div className="mt-8">
						<button className="text-white  bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out">
							<NavLink to={'/apply/login'}>Get Staeted</NavLink>
						</button>
					</div>
				</div>
				<div>
					<img
						className="w-[1400px] h-[600px]"
						src={banner}
						alt="banner-image"
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
