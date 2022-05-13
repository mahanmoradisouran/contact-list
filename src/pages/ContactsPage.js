import AddContact from "../components/AddContact/AddContact";
import ContactList from "../components/ContactList/ContactList";
import { useContext } from "react";
import { ContactsProvider } from "../Layout/Layout";

const ContactsPage = () => {
  const { contacts, setContacts } = useContext(ContactsProvider);

  const deleteContactHandler = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="mx-auto w-full h-full sm:w-4/5 border-x border-slate-200 dark:border-slate-800">
      <div className="px-3 mb-5">
        <AddContact contacts={contacts} setContacts={setContacts} />
      </div>
      <hr className="dark:border-t-slate-800 border-t-slate-200" />
      <div className="sm:px-3 px-0">
        <ContactList
          contacts={contacts}
          setContacts={setContacts}
          deleteContactHandler={deleteContactHandler}
        />
      </div>
    </div>
  );
};

export default ContactsPage;
