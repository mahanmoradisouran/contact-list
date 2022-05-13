import { EmojiSadIcon } from "@heroicons/react/outline";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContactHandler }) => {

  console.log(contacts);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-slate-700 dark:text-slate-300 font-bold text-center text-2xl pt-5">
        Contacts
      </h2>
      <section className="mt-5 w-full">
        <h2 className="sm:hidden block text-base text-center pb-2 dark:text-slate-400">swipe right to delete the contact</h2>
        {contacts.length !== 0 ? (
          <ul className="w-full sm:px-10 px-1">
            {contacts.map((contact, Index) => (
              <li key={Index}>
                <Contact
                  data={contact}
                  deleteContactHandler={deleteContactHandler}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex justify-center items-center flex-col text-slate-700">
            <EmojiSadIcon className="h-40 w-40" />
            <p>No caontact found !</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ContactList;
