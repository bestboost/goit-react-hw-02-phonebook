import PropTypes from 'prop-types';
import React, {Component} from 'react';
import  {Form, TypeName, InputName, TypePhone, InputPhone, AddButton} from './Form.styled';
import { nanoid } from 'nanoid';

class Forms extends Component {
    static propTypes = {
       state: PropTypes.shape ({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired
       })
    };
   
      state = {
        name: '',
        number: '',
        };

  nameId = nanoid(); 
  numberId = nanoid();
 
 handelChange = e => {
    const {name, value, id} = e.currentTarget;
    this.setState({ [name]: value, id});
 };

 handelSubmit = e => {
    e.preventDefault();
 
   this.props.onSubmit(this.state);
   // this.props.onSubmit(this.id);
    this.reset ();
 }; 

 reset = () => {
    this.setState({name: '', number: '', id:''})
 }

 render () {
    return (
          <Form onSubmit={this.handelSubmit}>
               <TypeName htmlFor={this.nameId}>Name</TypeName>
               <InputName id={this.nameId}
                   type="text"
                   name="name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                   value={this.state.name}
                   onChange={this.handelChange}
                   />
               <TypePhone htmlFor={this.numberId}>Number</TypePhone>    
               <InputPhone id={this.numberId}
                   type="tel"
                   name="number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
                   value={this.state.number}
                   onChange={this.handelChange}
                   />
                <AddButton type="submit">Add contact</AddButton>    
            </Form> 
    )}
};

export default Forms;