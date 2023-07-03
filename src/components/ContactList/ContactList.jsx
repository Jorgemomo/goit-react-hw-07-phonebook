import { Contact } from '../Contact/Contact';
import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contactsSelect';
import React from 'react';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/thunk';

export function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map(({ id, name, phone }) => (
        <Contact key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
}
