import { useEffect, useState } from 'react';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {
	const [jobCategories, setJobCategories] = useState([]);

	useEffect(() => {
		fetch('categories.json')
			.then((res) => res.json())
			.then((data) => setJobCategories(data));
	}, []);

	return (
		<div className="max-w-7xl mx-auto">
			<CategoryTitle></CategoryTitle>
			<div className=" grid md:grid-cols-4 gap-5">
				{jobCategories.map((job) => (
					<JobCategory key={job.id} job={job}></JobCategory>
				))}
			</div>
		</div>
	);
};

export default JobCategories;
