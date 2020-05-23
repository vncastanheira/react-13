import React, { useState, useEffect } from 'react';
import Contact from './Contact'
var dayjs = require('dayjs')

function Contacts() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
				.then(async (response) => {
					await response.json().then(data => setContacts(data))
				})
				.catch(err => {
					console.error(err)
				})
		}

		fetchData();
	}, []) // run only once

	return (
		<>
			{contacts.length > 0 
			? contacts.map(c => 
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
			: <p>Loading</p>}
		</>
	)
}

export default Contacts;
