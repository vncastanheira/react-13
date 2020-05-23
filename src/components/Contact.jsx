import React from 'react';

function Contact(props) {
  return (
    <article className="contact">
      <span className="contact__avatar">
        <img src={props.contact.avatar} alt={props.contact.name} />
      </span>
      <span className="contact__data">{props.contact.name}</span>
      <span className="contact__data">{props.contact.phone}</span>
      <span className="contact__data">{props.contact.country}</span>
      <span className="contact__data">{props.contact.admissionDate}</span>
      <span className="contact__data">{props.contact.company}</span>
      <span className="contact__data">{props.contact.department}</span>
    </article>
  )
}

export default Contact;
