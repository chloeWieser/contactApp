import React, {useState} from 'react';
import { Form, Button} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const ContactForm = (props) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handleAddContact = (e) => {
        e.preventDefault();

        let newContact = {
            id: uuidv4(),
            name: name,  //these values come from ^^state
            number: number,
            email: email,
            address: address,
            city: city,
            state: state,
            zip: zip
        }

        props.onAdd(newContact);  //Add it the prop name we gave this function in App.jsx, it brings over the handleAddContact function
    }

    return (
        <Form onSubmit={handleAddContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" onChange={(e)=>setAddress(e.target.value)}/>
            </Form.Group>
            <div className="row">
                <Form.Group className="col-4 mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={(e)=>setCity(e.target.value)} />
                </Form.Group>

                <Form.Group className="col-4 mb-3" controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e)=>setState(e.target.value)}>
                        <option value="">Select State</option>
                        <option value="GA">GA</option>
                        <option value="DC">DC</option>
                        <option value="TX">TX</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="col-4 mb-3" controlId="formBasicPassword">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={(e)=>setZip(e.target.value)}/>
                </Form.Group>
            </div>

            <div className="row">
                <Form.Group className="col-6 mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="" onChange={(e)=>setNumber(e.target.value)} />
                    <Form.Text className="text-muted">
                    Enter phone number
                </Form.Text>
                </Form.Group>

                <Form.Group className="col-6 mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="" onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    Enter email
                </Form.Text>
                </Form.Group>
            </div>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Favorite this contact" />
            </Form.Group> */}

            <Button className="m-1" variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="outline-primary" type="submit">
                Cancel
            </Button>
        </Form>
    )
}

export default ContactForm