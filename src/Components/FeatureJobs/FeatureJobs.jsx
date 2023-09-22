import { useEffect, useState } from 'react';
import FeatureTitle from '../FeatureTitle/FeatureTitle';
import FeatureJob from '../FeatureJob/FeatureJob';

const FeatureJobs = () => {
	const [featureJobs, setFeaturesJobs] = useState([]);
	const [dataLength, setDataLength] = useState(4);

	useEffect(() => {
		fetch('jobs.json')
			.then((res) => res.json())
			.then((data) => setFeaturesJobs(data));
	}, []);

	return (
		<div className="max-w-7xl mx-auto mb-32">
			<FeatureTitle></FeatureTitle>

			<div className=" grid md:grid-cols-2 gap-5">
				{featureJobs.slice(0, dataLength).map((job) => (
					<FeatureJob key={job.id} job={job}></FeatureJob>
				))}
			</div>

			<div className="flex justify-center mt-10">
				<div className={dataLength === featureJobs.length && 'hidden'}>
					<button
						onClick={() => setDataLength(featureJobs.length)}
						className="text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-200 ease-in-out"
					>
						Show All
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeatureJobs;
