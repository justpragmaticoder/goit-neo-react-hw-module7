import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import Contact from "@components/Contact/Contact.jsx";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact
              name={name}
              phoneNumber={number}
              id={id}
              handleDelete={() => dispatch(deleteContact(id))}
            />
          </li>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  );
};

export default ContactList;
