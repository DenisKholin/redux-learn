import React, { Component } from 'react';
import MenuListItem from '../menu-list-item/menu-list-item';
import { connect } from 'react-redux';
import './menu-list.scss';
import WithRestoService from '../hoc/with-resto-service'
import { menuLoaded, menuRequested, menuError, addedToCart } from '../../actions/actions';
import Spinner from '../spinner/spinner';
import Error from '../error/error';

class MenuList extends Component {

	componentDidMount() {
		const { RestoService, menuLoaded, menuRequested } = this.props;
		menuRequested();
		RestoService.getMenuItems()
			.then(res => menuLoaded(res))
	}

	componentDidCatch() {
		this.props.menuError();
	}

	render() {

		const { menuItems, loading, error, addedToCart } = this.props;

		if (loading) {
			return <Spinner />
		}

		if (error) {
			return <Error />
		}

		return (
			<ul className="menu__list">
				{
					menuItems.map(menuItem => {
						return <MenuListItem
							key={menuItem.id}
							menuItem={menuItem}
							onAddToCart={() => addedToCart(menuItem.id)} />
					})
				}

			</ul>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		menuItems: state.menu,
		loading: state.loading,
		error: state.error,
	}
}

const mapDispatchToProps = { menuLoaded, menuRequested, menuError, addedToCart }

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));