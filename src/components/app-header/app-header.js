import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({ total }) => {
	return (
		<header className="header">
			<i className="header__link">
				Menu
			</i>
			<i className="header__link">
				<img className="header__cart" src={cartIcon} alt="cart"></img>
				Total: {total} $
			</i>
		</header>
	)
};

export default AppHeader;