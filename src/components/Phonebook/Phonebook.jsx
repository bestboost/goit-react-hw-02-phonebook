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
        contacts: [],
        };

    formSubmitHandler = data => {
        consolr.log(data);
    }    
 
 render () {
     return (
        <Box>
           <Tiltle>Phonebook</Tiltle> 
           <Forms onSubmit={this.formSubmitHandler}/>              
           <Contacts>Contacts</Contacts>
             <ContactBox>
                <ContactList>
              
                    <ContactItem>
                        <ContactName>{this.contacts}</ContactName>
                    </ContactItem>
            
                </ContactList>
             </ContactBox>      
        </Box>   
    )}
};  

export default Phonebook;