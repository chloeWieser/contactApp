import React from 'react'

const ContactItems = ({contact}) => {
  return (<>
    <li>
        <div className="row">
            <div className="col-8">
                {contact.name}
                &nbsp;&nbsp;
                {contact.email}
                &nbsp;&nbsp;
                {contact.phone}
                &nbsp;&nbsp;
                {contact.address}
                &nbsp;&nbsp;
                {contact.city}
                &nbsp;&nbsp;
                {contact.state}
                &nbsp;&nbsp;
                {contact.zip}
            </div>
            {/* <div className="col-4">
                <button onClick={() => onDelete(contact.id)}>X</button>
                
            </div> */}
        </div>
    </li>
    
    </>)
}

export default ContactItems