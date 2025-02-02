import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homepage}>
      <h1>Welcome to our Phonebook!</h1>
      <p>
        Here, you can easily and conveniently store contact information for your
        friends, family, colleagues, and other important people. We&apos;ve
        created this service to make your communication more organized and
        accessible at any time.
      </p>
      <ul className={css.homeList}>
        <h3>What we offer:</h3>
        <li>
          Contact management: Add, edit, and delete contacts with minimal
          effort.
        </li>
        <li>
          Search contacts: Find the information you need instantly with quick
          search.
        </li>
        <li>
          Security: Your data is securely stored, and you decide who has access
          to your contacts.
        </li>
        <li>
          User-friendly interface: We&apos;ve designed the website to be as
          convenient as possible for users of all ages.
        </li>
      </ul>

      <ul className={css.homeList2}>
        <h3>How it works:</h3>
        <li>Add a contact: Enter the name, phone number, and other details.</li>
        <li>
          Edit and update: If the information about a contact changes, you can
          quickly make adjustments.
        </li>
        <li>
          Delete unnecessary entries: If a contact is no longer relevant, remove
          it with ease.
        </li>
        <li>
          Synchronization: Your contacts are always at hand, synchronized across
          various devices.
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
