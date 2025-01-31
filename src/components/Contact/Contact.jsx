/* eslint-disable react/prop-types */
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  console.log(contact);

  function handleDelete(contactId) {
    console.log(contactId);

    dispatch(deleteContact(contactId));
  }

  return (
    <div className={css.contactDiv}>
      <div>
        <h3>
          <IoPerson />
          {contact.name}
        </h3>
        <h3 className={css.contactLastHeading}>
          <FaPhone /> {contact.number}
        </h3>
      </div>

      <button onClick={() => handleDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
