import { useLoaderData } from 'react-router-dom';
import { getSavedJobApplication } from '../../Utilities/localstorage';
import { useEffect, useState } from 'react';
import AppliedJob from '../Appliedjob/AppliedJob';

const AppliedJobs = () => {
	const jobs = useLoaderData();
	const [appliedJobs, setAppliedJobs] = useState();

	useEffect(() => {
		const savedLSApplicationId = getSavedJobApplication(); // [2,6,4]
		if (jobs.length) {
			const jobsApplied = jobs.filter((job) =>
				savedLSApplicationId.includes(job.id),
			);
			setAppliedJobs(jobsApplied);
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
				<div>
					<details className="dropdown mb-32">
						<summary className="m-1 btn">open or close</summary>
						<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
							<li>
								<a>Item 1</a>
							</li>
							<li>
								<a>Item 2</a>
							</li>
						</ul>
					</details>
				</div>
				{/* Loop */}

				{appliedJobs &&
					appliedJobs.map((job, index) => (
						<AppliedJob key={index} job={job}></AppliedJob>
					))}
			</div>
		</div>
	);
};

export default AppliedJobs;
