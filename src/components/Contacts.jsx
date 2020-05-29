import React, { useState, useEffect } from 'react';
import Contact from './Contact'
var dayjs = require('dayjs')

function Contacts(props) {
	function filterContact(contact) {
		let terms = props.searchTerm.toUpperCase().split(' ')
		if (terms.length == 1 && terms[0] === '')
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
			{props.data.length > 0
				? props.data.map(c =>
					<Contact
						key={c.id}
						avatar={c.avatar}
						name={c.name}
						phone={c.phone}
						country={c.country}
						admissionDate={dayjs(c.admissionDate).format("DD/MM/YYYY")}
						company={c.company}
						department={c.department}
						show={filterContact(c)}
					/>)
				: <p>Carregando...</p>}
		</section>
	)
}

export default Contacts;
