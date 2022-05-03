
import React, {useState} from 'react';
import initialContactData from '../data/contacts';
import {Button} from 'react-bootstrap';
import ContactList from './ContactList';
import Form from './Form'

const App = () => {

    const [contacts, setContacts] = useState(()=>initialContactData)
    const [addContact, setAddContact] = useState(false)

    const handleAddContact = (newContact) => {
        let newContactList = [newContact, ...contacts];
        setContacts(newContactList);  //after doing this , state has been updated with old plus new addresses
        setAddContact(false);
    }
    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-6 offset-3 py-5">
                        <h1 className="text-center">Contact List</h1>
                        <div className="row mt-2">
                            <div className="col-12">

                                {addContact
                                ?
                                <Form onAdd={handleAddContact}/>
                                :
                                <Button onClick={()=>setAddContact(true)} className="btn btn-info h-100" type="button"
                                    id="addNew" name="addNew">Add New Contact</Button>
                                }

                                
                                {/* <button class="btn btn-warning h-50 m-4" type="button"
                                    id="showFaves" name="showFaves">Show Favorites</button> */}
                            </div>

                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-6 offset-3 py-5">
                        <div className="mx-auto mb-5">
                            Previously entered contacts
                            <ContactList contacts={contacts}/>
                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>


                {/* <div>
                    <div className="row">
                        <div className="col-6 offset-3 py-5">
                            <form className="col-12">
                                <div className="input-group" height="auto" width="100%">

                                    <div className="col-12">
                                        <input name="contactInput" className="form-control form-control-lg"
                                            placeholder="search contacts" id="contactInput"
                                            type="text"></input>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div> */}

            </div>

        </>
    );
}

export default App;
