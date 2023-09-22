const JobCategory = ({ job }) => {
	const { logo, category_name, availability } = job;

	return (
		<div className=" bg-blue-50 p-10 rounded-md">
			<div className="mb-8 bg-blue-100 inline-block p-2 rounded-md">
				<img className="" src={logo} alt="" />
			</div>
			<h3 className=" text-[#474747] text-xl font-extrabold mb-2">
				{category_name}
			</h3>
			<h3>{availability}</h3>
		</div>
	);
};

export default JobCategory;
