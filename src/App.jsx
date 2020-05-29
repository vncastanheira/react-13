import React from 'react';

import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";
import Contacts from './components/Contacts'

import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.filterButtonClick = this.filterButtonClick.bind(this)
    this.state = {
      contacts: [],
      activeFilter: '',
      searchTerm: ''
    }
  }

  async componentDidMount() {
    await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(async (response) => {
        await response.json().then(data => this.setState({ contacts: data }))
      })
      .catch(err => {
        console.error(err)
      })
  }

  filterButtonClick(filter) {
    this.setState({ activeFilter: filter })
    this.sortBy(filter)
    console.log(`Filter set to ${filter}`)
  }

  sortBy(property) {
    let sorted = [...this.state.contacts]
    sorted.sort((a, b) => {
      if (a[property] > b[property]) return 1
      else if (a[property] < b[property]) return -1
      else return 0
    })
    this.setState({ contacts: sorted })
  }

  render() {
    return (
      <React.Fragment>
        <header className="topbar">
          <div className="container">
            <a href="/" className="topbar__logo">
              <LogoSvg alt="Logo Instagram" />
            </a>
          </div>
        </header>

        <div className="container">
          <section className="filters">
            <div className="filters__search">
              <input type="text" className="filters__search__input" placeholder="Pesquisar"
                value={this.state.searchTerm}
                onChange={e => { this.setState({ searchTerm: e.target.value }) }} />

              <button className="filters__search__icon">
                <i className="fa fa-search" />
              </button>
            </div>

            <button className={this.state.activeFilter === 'name' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.filterButtonClick('name') }}>
              Nome <i className="fas fa-sort-down" />
            </button>

            <button className={this.state.activeFilter === 'country' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.filterButtonClick('country') }}>
              País <i className="fas fa-sort-down" />
            </button>

            <button className={this.state.activeFilter === 'company' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.filterButtonClick('company') }}>
              Empresa <i className="fas fa-sort-down" />
            </button>

            <button className={this.state.activeFilter === 'department' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.filterButtonClick('department') }}>
              Departamento <i className="fas fa-sort-down" />
            </button>

            <button className={this.state.activeFilter === 'admissionDate' ? "filters__item is-selected" : "filters__item"} onClick={() => { this.filterButtonClick('admissionDate') }}>
              Data de admissão <i className="fas fa-sort-down" />
            </button>
          </section>
        </div>

        <div className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
            <Contacts contacts={this.state.contacts} searchTerm={this.state.searchTerm} />
          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
