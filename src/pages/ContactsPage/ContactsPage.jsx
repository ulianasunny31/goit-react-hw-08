import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  //getting saved contacts
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={{ color: 'black' }}>
      <div
        style={{
          display: 'flex',
          gap: '100px',
          marginBottom: '40px',
          alignItems: 'flex-end',
          paddingBottom: '20px',
        }}
      >
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;
