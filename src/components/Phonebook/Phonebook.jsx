import PropTypes from 'prop-types';
import React, {Component} from 'react';
import  {Form, TypeName, InputName, TypePhone, InputPhone, AddButton, Tiltle, ContactBox, Contacts, ContactList, ContactItem, ContactName} from './Phonebook.styled';
import { Box } from '../Box';

class Phonebook extends Component {
    static propTypes = {
       state: PropTypes.shape ({
        contacts: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
       })
    };
   
      state = {
        contacts: [],
        name: '',
        number: ''
        }


 render () {
     return (
        <Box>
           <Tiltle>Phonebook</Tiltle> 
             <Form>
                <TypeName>Name</TypeName>
                <InputName
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                <TypePhone>Number</TypePhone>    
                <InputPhone
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                 <AddButton type="submit">Add contact</AddButton>    
             </Form> 
           <Contacts>Contacts</Contacts>
             <ContactBox>
                <ContactList>
                    <ContactItem>
                        <ContactName>Rosi</ContactName>
                    </ContactItem>
                    <ContactItem>
                        <ContactName>Tom</ContactName>
                    </ContactItem>
                </ContactList>
             </ContactBox>      
        </Box>   
    )}
};  

export default Phonebook;