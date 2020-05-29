import React from 'react';

import Contacts from './components/Contacts'
import Topbar from './components/Topbar'
import Filter from './components/Filters'

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.filterButtonClick = this.filterButtonClick.bind(this)
    this.setSearchTerm = this.setSearchTerm.bind(this)
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

  setSearchTerm(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />

        <div className="container">
          <Filter
            activeFilter={this.state.activeFilter}
            filterButtonClick={this.filterButtonClick}
            searchTerm={this.state.searchTerm}
            setSearchTerm={this.setSearchTerm} />
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
            <Contacts data={this.state.contacts} searchTerm={this.state.searchTerm} />
          </section>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
