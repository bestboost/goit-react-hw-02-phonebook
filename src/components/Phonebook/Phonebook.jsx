import PropTypes from 'prop-types';
import React, {Component} from 'react';
import  {Tiltle, ContactBox, Contacts, ContactList, ContactItem, ContactName} from './Phonebook.styled';
import { Box } from '../Box';
import Forms from 'components/Form/Form';

class Phonebook extends Component {
    static propTypes = {
       state: PropTypes.shape ({
        contacts: PropTypes.array.isRequired
       })
    };
   
      state = {
        contacts: [{name: '', number: '', id:''}],
    
        };   


    formSubmitHandler = ({name, number, id}) => {        
        this.setState({contacts:[{name, number, id}]})      
    };  
    
   
  
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
                            <ContactName>{contact.name}{contact.number}</ContactName>
                        </ContactItem>
                      ))}
                </ContactList>
             </ContactBox>      
        </Box>   
    )}
};  

export default Phonebook;