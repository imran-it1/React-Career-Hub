import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Layout/Root/Root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistic from './Components/Statistic/Statistic';
import JobDetails from './Components/JobDetails/JobDetails';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root></Root>,
		children: [
			{
				path: '/',
				element: <Statistic></Statistic>,
			},

			{
				path: '/applied',
				element: <AppliedJobs></AppliedJobs>,
			},

			{
				path: '/job/:id',
				loader: () => fetch('jobs.json'),
				element: <JobDetails></JobDetails>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />,
);
