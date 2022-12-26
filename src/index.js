import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.scss';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry/error-boundry';
import RestoServiceContext from './components/resto-service-context/resto-service-context';
import RestoService from './services/resto-service';
import store from './store';

const restoService = new RestoService();

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ErrorBoundry>
			<RestoServiceContext.Provider value={restoService}>
				<App />
			</RestoServiceContext.Provider>
		</ErrorBoundry>
	</Provider>
);