//  Age theke ei name and value diye kicu save thakle set niye bibo nicher functiondiye
const getSavedJobApplication = () => {
	const getSavedJob = localStorage.getItem('job-applications');
	if (getSavedJob) {
		return JSON.parse(getSavedJob);
	}
	return [];
};

//  Pai ba na pai, seta boro kotha na, ekhon oi je id nibo setake dhukate hobe or moddhe, pore otake local storage a set kore dite hobe
// Id nibo, pore oi id ke localstorage a save korbo. So ekta id pabo, jokhon ei function ke call korbo
const saveJobApplication = (id) => {
	const getStoredJobAppliction = getSavedJobApplication();
	const isSimillarId = getStoredJobAppliction.find((idx) => idx === id);
	if (!isSimillarId) {
		getStoredJobAppliction.push(id);
		localStorage.setItem(
			'job-applications',
			JSON.stringify(getStoredJobAppliction),
		);
	}
};

export { saveJobApplication, getSavedJobApplication };
