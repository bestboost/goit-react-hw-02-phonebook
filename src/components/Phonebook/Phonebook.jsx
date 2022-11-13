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
        contacts: []
        };   


    formSubmitHandler = ({name, number, id}) => {
        this.setState({
           name,
          number, 
            id
        })
        
    }   

  
 
 render () {

     return (
        <Box>
           <Tiltle>Phonebook</Tiltle> 
           <Forms onSubmit={this.formSubmitHandler} />              
           <Contacts>Contacts</Contacts>
             <ContactBox>
                <ContactList > 
                    {/* {contacts.map(contact =>  (           */}
                        <ContactItem key={this.state.id}>
                            <ContactName>{this.state.name}{this.state.number}</ContactName>
                        </ContactItem>
                     {/* ))} */}
                </ContactList>
             </ContactBox>      
        </Box>   
    )}
};  

export default Phonebook;