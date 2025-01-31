import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactsPage = () => {
  // return <ContactList />;

  return (
    <div style={{ color: 'black' }}>
      <ContactForm />
      <SearchBox />
    </div>
  );
};

export default ContactsPage;
