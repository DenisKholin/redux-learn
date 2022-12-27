import React from 'react';
import AppHeader from '../app-header/app-header';
import { Outlet } from "react-router-dom";
import Background from './food-bg.jpg';

const App = () => {
	return (
		<div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
			<AppHeader total={50} />
			<Outlet />
		</div>
	)
}

export default App;