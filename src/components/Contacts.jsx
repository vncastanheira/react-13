import React, { useState, useEffect } from 'react';
import Contact from './Contact'

function Contacts() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
		.then(response => {
			response.json().then(data => setContacts(data))
		})
		.catch(err => {
			console.error(err)
		})
	}, []) // run only once

	return (
		<>
		{contacts.length > 0 ? contacts.map(c => <Contact/>) : <p>Loading</p>}
		</>
	)
}

export default Contacts;
