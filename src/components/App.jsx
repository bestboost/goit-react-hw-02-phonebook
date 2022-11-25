import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Box } from '../components/Box';
import { Tiltle, Contacts} from './App.styled';
import Phonebook from 'components/Phonebook/Phonebook'
import Forms from 'components/Form/Form';
import Filter from './Filter/Filter';



class App extends Component {

  static propTypes = {
    state: PropTypes.shape ({
     contacts: PropTypes.array.isRequired,
     filter: PropTypes.string.isRequired,
    })
 };

 state = {
  contacts: [ 
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
],
  filter: '',
  };   

  formSubmitHandler = ({name, number, id}) => {     
    const contact = {
      name,
       number,
        id,
    }   
      this.setState(prevState =>
        ({contacts: [contact, ...prevState.contacts]})      
  )};  
  
  nameFilter = e => {
    this.setState({filter: e.currentTarget.value});
  };
  

  render () {
    const {contacts, filter, name, number, id} = this.state
  return (
    <Box
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 40,
      }}
    >
           <Tiltle>Phonebook</Tiltle> 
      <Forms onSubmit={this.formSubmitHandler} />              
           <Contacts>Contacts</Contacts>
      <Filter value={filter} onChange={this.nameFilter}/>     
      <Phonebook contacts ={contacts} name={name} number={number} id={id}/>
    </Box>
  );
};
};

export default App;