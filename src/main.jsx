import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Layout/Root/Root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Statistic from './Components/Statistic/Statistic';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';

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
				path: '/blog',
				element: <Blog></Blog>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />,
);
