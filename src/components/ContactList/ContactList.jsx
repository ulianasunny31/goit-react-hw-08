/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectIsError, selectIsLoading } from '../../redux/contacts/selectors';
import Loader from '../Loader/Loader';

const ContactList = ({ onChangeClick }) => {
  const visibleContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <div className={css.contactList}>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h2>Oops, something went wrong, please try again! 🐱‍💻</h2>
      ) : visibleContacts?.length ? (
        visibleContacts.map((contact) => {
          return (
            <Contact
              openModal={onChangeClick}
              key={contact.id}
              contact={contact}
            />
          );
        })
      ) : (
        <h2>You don&apos;t have any contacts yet. Try adding one!</h2>
      )}
    </div>
  );
};

export default ContactList;
