import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Layout/Root/Root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistic from './Components/Statistic/Statistic';
import JobDetails from './Components/JobDetails/JobDetails';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Apply from './Components/Apply/Apply';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Statistic></Statistic>,
			},

			{
				path: '/apply/login',
				element: <Apply></Apply>,
			},
			{
				path: '/applied',
				element: <AppliedJobs></AppliedJobs>,
				loader: () => fetch('jobs.json'),
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
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
