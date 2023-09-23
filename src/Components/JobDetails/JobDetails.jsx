import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import './Jobdetails.css';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { SlCalender } from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../Utilities/localstorage';

const JobDetails = () => {
	const jobs = useLoaderData();
	const { id } = useParams();
	const idInt = parseInt(id);
	console.log(idInt);

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

	const handleApplyJob = () => {
		saveJobApplication(idInt);
		toast('Application Successful!', {
			position: 'top-right',
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	return (
		<div>
			<div className="bg-blue-50 pt-24 pb-10 bg1">
				<h1 className=" text-center text-3xl font-extrabold">
					Job Details
				</h1>
			</div>

			<div className="my-32 max-w-7xl mx-auto">
				<h1 className=" text-center text-3xl font-extrabold my-5">
					Job ID: {id}
				</h1>
				<div className="flex gap-4">
					<div className="w-3/5">
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
					<div className=" w-2/5">
						<div className=" bg-blue-50 rounded-md p-7">
							<div>
								<h3 className=" text-[#1A1919] font-extrabold">
									Job Details
								</h3>
							</div>
							<div className="border-b my-6"></div>
							<div className="mb-6">
								<div className="flex items-center mb-4">
									<span className="font-bold inline-block mr-1">
										<HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
									</span>
									<span className=" text-[#474747], font-extrabold">
										Salary:
									</span>
									<span className=" text-[#757575], font-medium ml-1">
										{salary}
									</span>
								</div>
								<div className="flex items-center">
									<span className="font-bold inline-block mr-1">
										<SlCalender></SlCalender>
									</span>
									<span className=" text-[#474747], font-extrabold">
										Title:
									</span>
									<span className=" text-[#757575], font-medium ml-1">
										{job_title}
									</span>
								</div>
							</div>

							<div>
								<h3 className=" text-[#1A1919] font-extrabold">
									Contact Information
								</h3>
							</div>
							<div className="border-b my-6"></div>

							<div className="flex items-center">
								<span className="font-bold inline-block mr-1">
									<BsTelephone></BsTelephone>
								</span>
								<span className=" text-[#474747], font-extrabold">
									Phone:
								</span>
								<span className=" text-[#757575], font-medium ml-1">
									{phone}
								</span>
							</div>
							<div className="flex items-center">
								<span className="font-bold inline-block mr-1">
									<MdOutlineEmail></MdOutlineEmail>
								</span>
								<span className="text-[#474747], font-extrabold">
									Email:
								</span>
								<span className="text-[#757575], font-medium ml-1">
									{email}
								</span>
							</div>
							<div className="flex items-center">
								<span className="font-bold inline-block mr-1">
									<CiLocationOn></CiLocationOn>
								</span>
								<span className=" text-[#474747], font-extrabold">
									Address:
								</span>
								<span className=" text-[#757575], font-medium ml-1">
									{address}
								</span>
							</div>
						</div>
						<div className="mt-8 flex justify-center">
							<button
								onClick={handleApplyJob}
								className="text-white w-full  bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 ease-in-out"
							>
								Apply Now
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8 w-full mb-10 flex justify-center">
				<button className="text-white  bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 ease-in-out">
					<NavLink to={'/'}>Go Back</NavLink>
				</button>
			</div>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default JobDetails;
