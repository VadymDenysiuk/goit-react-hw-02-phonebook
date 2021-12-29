import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ContactList;
