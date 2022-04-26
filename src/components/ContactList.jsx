//loops through the contacts prop

import React from 'react'

const ContactList = ({contacts}) => {

    console.log(contacts);
  return (
    <ul>
        {contacts.map(contact => {
            return <li key={contact.id}>{contact.name} <i>{contact.city}</i> <i>{contact.state}</i></li>
        } )}
    </ul>
  )
}

export default ContactList