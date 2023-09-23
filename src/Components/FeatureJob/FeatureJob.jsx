import { Link } from 'react-router-dom';
import { CiLocationOn, CiDollar } from 'react-icons/ci';

const FeatureJob = ({ job }) => {
	const {
		id,
		logo,
		job_title,
		company_name,
		remote_or_onsite,
		location,
		job_type,
		salary,
	} = job;

	return (
		<div className=" bg-gray-50 p-10 rounded-md">
			<div className="mb-8">
				<img className="w-[100px] h-[40px]" src={logo} alt="" />
			</div>
			<div>
				<h2 className="text-[#474747] text-2xl font-extrabold">
					{job_title}
				</h2>
			</div>
			<div>
				<h2 className=" text-xl text-[#757575] font-semibold mb-4">
					{company_name}
				</h2>
			</div>
			<div className=" flex gap-2 mb-4">
				<button className="px-5 py-2 border rounded border-blue-500">
					<span className="text-base font-extrabold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
						{remote_or_onsite}
					</span>
				</button>
				<button className="px-5 py-2 border rounded border-blue-500">
					<span className="text-base font-extrabold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
						{job_type}
					</span>
				</button>
			</div>
			<div className=" flex gap-6 items-center mb-6">
				<div className=" flex items-center gap-2 text-[#757575] font-semibold">
					<span>
						<CiLocationOn></CiLocationOn>
					</span>
					<p>{location}</p>
				</div>
				<div className="flex items-center gap-2 text-[#757575] font-semibold">
					<span>
						<CiDollar></CiDollar>
					</span>
					<p>{salary}</p>
				</div>
			</div>
			<div>
				<div>
					<button className="text-white  bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 ease-in-out">
						<Link to={`/job/${id}`}>View Details</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeatureJob;
