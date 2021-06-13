import { Component } from 'react';
// import PropTypes from 'prop-types';

import { ContactListItem } from '../ContactListItem';

export class ContactList extends Component {
  render() {
    return (
      <ul className="contact-list">
        {this.props.contacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              deleteHandler={this.props.deleteHandler(id)}
            />
          );
        })}
      </ul>
    );
  }
}
