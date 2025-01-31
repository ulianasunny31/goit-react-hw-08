import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  //initializing the contact list
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <div className="app-style-div">
        <div className="app-style-div-two">
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </>
  );
}

export default App;
