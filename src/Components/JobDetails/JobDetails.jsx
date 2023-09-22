import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom';
import './Jobdetails.css';

const JobDetails = () => {
	const jobs = useLoaderData();
	const { id } = useParams();
	const idInt = parseInt(id);

	console.log(typeof idInt);

	const job = jobs.find((job) => job.id === idInt);

	const {
		job_description,
		job_responsibility,
		educational_requirements,
		experiences,
		salary,
		job_title,
		contact_information,
	} = job;

	const { phone, email, address } = contact_information;

	return (
		<div>
			<div className="bg-blue-50 py-24 bg1">
				<h1 className=" text-center text-3xl font-extrabold">
					Job Details
				</h1>
			</div>

			<div className="my-32 max-w-7xl mx-auto">
				<h1 className=" text-center text-3xl font-extrabold my-5">
					Job ID: {id}
				</h1>
				<div className="grid grid-cols-4 gap-4">
					<div className=" col-span-3">
						<div className="leading-8 text-[#757575] font-medium mb-6">
							<span className=" text-[#1A1919] font-extrabold ">
								Job Description:
							</span>
							{job_description}
						</div>
						<div className="leading-8 text-[#757575] font-medium mb-6">
							<span className=" text-[#1A1919] font-extrabold ">
								Job Responsibility:
							</span>
							{job_responsibility}
						</div>
						<div className="leading-8 text-[#757575] font-medium mb-6">
							<span className=" block text-[#1A1919] font-extrabold ">
								Educational Requirements:
							</span>
							{educational_requirements}
						</div>
						<div className="leading-8 text-[#757575] font-medium mb-6">
							<span className=" block text-[#1A1919] font-extrabold ">
								Experience:
							</span>
							{experiences}
						</div>
					</div>
					<div className=" w-full">
						<div className=" bg-blue-50 rounded-md p-7">
							<div>
								<h3>Job Details</h3>
							</div>
							<div className="border-b my-6"></div>
							<div className="mb-6">
								<div>
									<span></span>
									<span>Salary</span>
									<span>{salary}</span>
								</div>
								<div>
									<span></span>
									<span>Job Title</span>
									<span>{job_title}</span>
								</div>
							</div>

							<div>
								<h3>Contact Information</h3>
							</div>
							<div className="border-b my-6"></div>

							<div>
								<span></span>
								<span>Phone</span>
								<span>{phone}</span>
							</div>
							<div>
								<span></span>
								<span>Email</span>
								<span>{email}</span>
							</div>
							<div>
								<span></span>
								<span>Address</span>
								<span>{address}</span>
							</div>
						</div>
						<div className="mt-8 flex justify-center">
							<button className="text-white w-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 ease-in-out">
								<NavLink>Apply Now</NavLink>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8 w-full mb-10 flex justify-center">
				<button className="text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 ease-in-out">
					<Link to={'/'}>Go Back</Link>
				</button>
			</div>
		</div>
	);
};

export default JobDetails;
