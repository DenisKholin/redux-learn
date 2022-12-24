import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import App from './component/app';

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);