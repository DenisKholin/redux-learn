import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.scss';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry/error-boundry';
import RestoServiceContext from './components/resto-service-context/resto-service-context';
import RestoService from './services/resto-service';
import store from './store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPage, MainPage } from './components/pages';

const restoService = new RestoService();
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				path: "cart",
				element: <CartPage />,
			},
			{
				index: true,
				path: "main",
				element: <MainPage />,
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	< Provider store={store} >
		<ErrorBoundry>
			<RestoServiceContext.Provider value={restoService}>
				<RouterProvider router={router} />
			</RestoServiceContext.Provider>
		</ErrorBoundry>
	</ Provider>
);