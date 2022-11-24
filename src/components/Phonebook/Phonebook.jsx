import PropTypes from 'prop-types';
import React, {Component} from 'react';
import  {Tiltle, ContactBox, Contacts, ContactList, ContactItem, ContactName} from './Phonebook.styled';
import { Box } from '../Box';
import Forms from 'components/Form/Form';
import { nanoid } from 'nanoid';
import { useCallback } from 'react';

class Phonebook extends Component {
    static propTypes = {
       state: PropTypes.shape ({
        contacts: PropTypes.array.isRequired
       })
    };
   
      state = {
        contacts: [],
    
        };   


    formSubmitHandler = ({name, number}) => {     
      const contact = {
        name,
         number,
          id: nanoid(),
      }   
        this.setState(prevState =>
          ({contacts: [contact, ...prevState.contacts]})      
    )};  
    
  //  addContact = data => {
  //   const contact = {
  //     name,
  //      number, 
  //      id,
  //   }
  //  }

  //    formSubmitHandler = ({name, number, id}) => {        
  //       this.setState(prevState => {
  //     return{contacts: prevState, ...({contacts:[{name, number, id}]})      
  //       };
  //   });

  //  };  

  //  this.setState(({contacts}) => ({
  //   contacts: contacts.map( contact => 
  //     contacts.id === contactsId ? {...contact, complited: !contact.complited} 
  //     : contact),
  // }))


 render () {

         return (
        <Box>
           <Tiltle>Phonebook</Tiltle> 
           <Forms onSubmit={this.formSubmitHandler} />              
           <Contacts>Contacts</Contacts>
             <ContactBox>
                <ContactList > 
                    {this.state.contacts.map(contact => (          
                        <ContactItem key={contact.id}>
                            <ContactName>{contact.name}: {contact.number}</ContactName>
                        </ContactItem>
                      ))}
                </ContactList>
             </ContactBox>      
        </Box>   
    )}
};  

export default Phonebook;