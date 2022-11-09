import PropTypes from 'prop-types';
import React, {Component} from 'react';
import  {Form, CallToAction, TypeName, AddButton, Tiltle, ContactBox, Contacts, ContactList, ContactItem, ContactName} from './Phonebook.styled';
import { Box } from '../Box';

class Phonebook extends Component {
    static propTypes = {
       state: PropTypes.shape ({
        contacts: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired
       })
    };
   
      state = {
        contacts: [],
        name: ''
        }


 render () {
     return (
        <Box>
           <Tiltle>Phonebook</Tiltle> 
             <Form>
                <CallToAction>Name</CallToAction>
                <TypeName
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                 <AddButton type='button'>Add contact</AddButton>    
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