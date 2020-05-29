import React from 'react';
import Contact from './Contact'
var dayjs = require('dayjs')

function Contacts(props) {
	function filterContact(contact) {
		let terms = props.searchTerm.toUpperCase().split(' ')
		if (terms.length === 1 && terms[0] === '')
			return true

		for (let index = 0; index < terms.length; index++) {
			const term = terms[index];
			if (term === '')
				continue

			if (contact.name.toUpperCase().includes(term)
				|| contact.phone.toUpperCase().includes(term)
				|| contact.country.toUpperCase().includes(term)
				|| dayjs(contact.admissionDate).format("DD/MM/YYYY").includes(term)
				|| contact.company.toUpperCase().includes(term)
				|| contact.department.toUpperCase().includes(term))
				return true
		}

		return false
	}

	return (
		<div className="container" data-testid="contacts">
			<section className="contacts" >
				<article className="contact">
					<span className="contact__avatar" />
					<span className="contact__data">Nome</span>
					<span className="contact__data">Telefone</span>
					<span className="contact__data">País</span>
					<span className="contact__data">Admissão</span>
					<span className="contact__data">Empresa</span>
					<span className="contact__data">Departamento</span>
				</article>
				{props.data
					? props.data.filter(filterContact).map(c =>
						<Contact data={c}
							show={filterContact(c)}
						/>)
					: <p>Carregando...</p>}
			</section>
		</div>
	)
}

export default Contacts;
