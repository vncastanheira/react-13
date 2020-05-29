import React from 'react';

class Filters extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section className="filters">
				<div className="filters__search">
					<input type="text" className="filters__search__input" placeholder="Pesquisar"
						value={this.props.searchTerm}
						onChange={e => { this.props.setSearchTerm(e.target.value) }} />

					<button className="filters__search__icon">
						<i className="fa fa-search" />
					</button>
				</div>

				<button className={this.props.activeFilter === 'name' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.props.filterButtonClick('name') }}>
					Nome <i className="fas fa-sort-down" />
				</button>

				<button className={this.props.activeFilter === 'country' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.props.filterButtonClick('country') }}>
					País <i className="fas fa-sort-down" />
				</button>

				<button className={this.props.activeFilter === 'company' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.props.filterButtonClick('company') }}>
					Empresa <i className="fas fa-sort-down" />
				</button>

				<button className={this.props.activeFilter === 'department' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.props.filterButtonClick('department') }}>
					Departamento <i className="fas fa-sort-down" />
				</button>

				<button className={this.props.activeFilter === 'admissionDate' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.props.filterButtonClick('admissionDate') }}>
					Data de admissão <i className="fas fa-sort-down" />
				</button>
			</section>

		);
	}
}

export default Filters;
