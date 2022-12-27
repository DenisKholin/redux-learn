import React, { Component } from 'react';
import MenuListItem from '../menu-list-item/menu-list-item';
import { connect } from 'react-redux';
import './menu-list.scss';
import WithRestoService from '../hoc/with-resto-service'
import { menuLoaded, menuRequested } from '../../actions/actions';
import Spinner from '../spinner/spinner';

class MenuList extends Component {

	componentDidMount() {
		const { RestoService, menuLoaded, menuRequested } = this.props;
		menuRequested();
		RestoService.getMenuItems()
			.then(res => menuLoaded(res))
	}

	render() {

		const { menuItems, loading } = this.props;

		if (loading) {
			return <Spinner />
		}

		return (
			<ul className="menu__list">
				{
					menuItems.map(menuItem => {
						return <MenuListItem key={menuItem.id} menuItem={menuItem} />
					})
				}

			</ul>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		menuItems: state.menu,
		loading: state.loading
	}
}

const mapDispatchToProps = { menuLoaded, menuRequested }

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));