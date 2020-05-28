import React, { useState, useEffect } from 'react';
import Contact from './Contact'
var dayjs = require('dayjs')

function Contacts(props) {
	// const [contacts, setContacts] = useState([]);
	// const [sortNameDirection, setSortNameDirection] = useState(1)
	// const [sortCountryDirection, setSortCountryDirection] = useState(1)

	// hook buttons
	// useEffect(() => {
	// 	props.sortByNameBtn.current.onclick = sortByName
	// 	props.sortByCountryBtn.current.onclick = sortByCountry
	// }, [contacts])

	// useEffect(() => {
	// 	async function fetchData() {
	// 		await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
	// 			.then(async (response) => {
	// 				await response.json().then(data => setContacts(data))
	// 			})
	// 			.catch(err => {
	// 				console.error(err)
	// 			})
	// 	}

	// 	fetchData();
	// }, []) // run only once

	// function sortByName(e) {
	// 	console.log('Sorting contacts by name...')
	// 	e.preventDefault()
	// 	let sorted = [... contacts]
	// 	sorted.sort((a, b) => {
	// 		if(a.name > b.name) return sortNameDirection
	// 		else if (a.name < b.name) return -sortNameDirection
	// 		else return 0
	// 	})
		
	// 	setSortNameDirection(sortNameDirection * (-1))
	// 	setContacts(sorted)
	// }

	return (
		<>
			{props.contacts.length > 0
				? props.contacts.map(c =>
					<Contact
						key={c.id}
						avatar={c.avatar}
						name={c.name}
						phone={c.phone}
						country={c.country}
						admissionDate={dayjs(c.admissionDate).format("DD/MM/YYYY")}
						company={c.company}
						department={c.department}
					/>)
				: <p>Carregando...</p>}
		</>
	)
}

export default Contacts;
