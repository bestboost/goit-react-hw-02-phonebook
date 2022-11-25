import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Box } from '../Box';
import  {ContactBox, ContactList, ContactItem, ContactName} from './Phonebook.styled';


class Phonebook extends Component {
    static propTypes = {
       state: PropTypes.shape ({

       })
    };
   
      state = {
        contacts: this.props.contacts,
  
        };   


 render () {

         return (
            <Box>
             <ContactBox>
                <ContactList > 
                    {this.props.contacts.map(contact => (          
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