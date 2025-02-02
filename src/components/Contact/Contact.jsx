/* eslint-disable react/prop-types */
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ contact, openModal }) => {
  const dispatch = useDispatch();

  function handleDelete(contactId) {
    let confirmed = confirm(
      'Are you sure you want to delet the contact permanently?'
    );

    if (confirmed) {
      dispatch(deleteContact(contactId));
    }
  }

  function openChangeModal(contactId) {
    openModal(contactId);
  }

  return (
    <div className={css.contactDiv}>
      <div className={css.nameDiv}>
        <h3>
          <IoPerson className={css.icon} />
          {contact.name}
        </h3>
        <h3 className={css.contactLastHeading}>
          <FaPhone className={css.icon} /> {contact.number}
        </h3>
      </div>

      <div className={css.buttons}>
        <button onClick={() => openChangeModal(contact)}>Change</button>{' '}
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
