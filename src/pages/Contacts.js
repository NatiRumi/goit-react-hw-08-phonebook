import React from 'react';
import Form from '../components/ContactsForm/FormAddContact';
import FormSearch from '../components/ContactsForm/FormSearch';
import ContactsList from '../components/ContactsList/ContactsList';

const styles = {
  container: {
    width: 860,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

function ContactsPage() {
  return (
    <React.Fragment>
      <div style={styles.container}>
        <h1>Add new contact</h1>
        <Form />
        <h2>Contacts List</h2>
        <FormSearch />
        <ContactsList />
      </div>
    </React.Fragment>
  );
}

export default ContactsPage;
