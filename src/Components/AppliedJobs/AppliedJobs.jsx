import { useLoaderData } from 'react-router-dom';
import { getSavedJobApplication } from '../../Utilities/localstorage';
import { useEffect, useState } from 'react';
import AppliedJob from '../Appliedjob/AppliedJob';

const AppliedJobs = () => {
	const jobs = useLoaderData();
	const [appliedJobs, setAppliedJobs] = useState();
	const [displayJobs, setDisplayjobs] = useState([]);

	const hnadleJobFilter = (filterText) => {
		if (filterText === 'all') {
			setDisplayjobs(appliedJobs);
		} else if (filterText === 'Remote') {
			const remotejobs = appliedJobs.filter(
				(job) => job.remote_or_onsite === 'Remote',
			);
			setDisplayjobs(remotejobs);
		} else if (filterText === 'Onsite') {
			const onsiteJobs = appliedJobs.filter(
				(job) => job.remote_or_onsite === 'Onsite',
			);
			setAppliedJobs(onsiteJobs);
		}
	};

	useEffect(() => {
		const savedLSApplicationId = getSavedJobApplication(); // [2,6,4]
		if (jobs.length) {
			const jobsApplied = jobs.filter((job) =>
				savedLSApplicationId.includes(job.id),
			);
			setAppliedJobs(jobsApplied);
			setDisplayjobs(jobsApplied);
		}
	}, [jobs]);

	return (
		<div>
			<div className="bg-blue-50 py-20  bg1">
				<h1 className=" text-center text-3xl font-extrabold">
					Applied Jobs
				</h1>
			</div>

			<div className="max-w-7xl mx-auto my-32">
				{/* DropDown */}
				<div className="flex items-center justify-center">
					<details className="dropdown mb-32">
						<summary className="m-1 font-medium rounded text-sm px-4 py-3 text-center  text-white  bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300 ease-in-out cursor-pointer">
							Filter Job
						</summary>
						<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-28">
							<li>
								<button
									onClick={() => hnadleJobFilter('all')}
									className="hover:bg-indigo-100 hover:text-gray-800"
								>
									All
								</button>
							</li>
							<li>
								<button
									onClick={() => hnadleJobFilter('Remote')}
									className="hover:bg-indigo-100 hover:text-gray-800"
								>
									Remote
								</button>
							</li>
							<li>
								<button
									onClick={() => hnadleJobFilter('Onsite')}
									className="hover:bg-indigo-100 hover:text-gray-800"
								>
									Onsite
								</button>
							</li>
						</ul>
					</details>
				</div>
				{/* Loop */}

				{appliedJobs &&
					displayJobs.map((job, index) => (
						<AppliedJob key={index} job={job}></AppliedJob>
					))}
			</div>
		</div>
	);
};

export default AppliedJobs;
