import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="bg-blue-50 py-3">
			<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between ">
				<ul className="flex items-center">
					<Link
						to={'/'}
						className="text-3xl font-extrabold text-[#1A1919]"
					>
						CareerHub
					</Link>
				</ul>
				<div className="flex md:order-2">
					<ul className="text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3 text-center mr-3 md:mr-0 hover:shadow-lg transition-all duration-200 ease-in-out">
						<NavLink to={'/apply'}>Start Applying</NavLink>
					</ul>
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
						<li className=" text-gray-700 hover:text-gray-900  hover:underline hover:decoration-4 hover:decoration-indigo-700 hover:underline-offset-4 ">
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive ? 'text-indigo-700 ' : ''
								}
							>
								Statistic
							</NavLink>
						</li>
						<li className=" text-gray-700 hover:text-gray-900  hover:underline hover:decoration-4 hover:decoration-indigo-700 hover:underline-offset-4 ">
							<NavLink
								to={'./applied'}
								className={({ isActive }) =>
									isActive ? 'text-blue-700' : ''
								}
							>
								Applied Jobs
							</NavLink>
						</li>
						<li className=" text-gray-700 hover:text-gray-900 hover:underline hover:decoration-4 hover:decoration-indigo-700 hover:underline-offset-4 transition-all duration-200 ease-i">
							<NavLink
								to={'./blog'}
								className={({ isActive }) =>
									isActive ? 'text-blue-700' : ''
								}
							>
								Blog
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
