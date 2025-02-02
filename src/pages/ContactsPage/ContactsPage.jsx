import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import ModalPrompt from '../../components/Modal/ModalPrompt';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  //getting saved contacts
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function openModal(contact) {
    setSelectedItem(contact);
    setIsModalOpen(true);
  }

  function closeModal() {
    setSelectedItem(null);
    setIsModalOpen(false);
  }

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
      <ContactList onChangeClick={openModal} />
      {isModalOpen && (
        <ModalPrompt
          isModalOpen={isModalOpen}
          onModalClose={closeModal}
          contact={selectedItem}
        />
      )}
    </div>
  );
};

export default ContactsPage;
