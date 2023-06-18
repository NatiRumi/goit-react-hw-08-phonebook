import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/slice';
import { getContacts } from '../../redux/contacts/selectors';
import ContactItem from '../ContactsItem/ContactsItem';
import Loader from '../Loader/Loader';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const { isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contacts}>
      {isLoading && <Loader />}
      {error && <h2>Сталася помилка: {error}</h2>}

      <ul className={css.contactList}>
        {contacts.map(contact => (
          <ContactItem
            name={contact.name}
            number={contact.phone}
            id={contact.id}
            key={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;