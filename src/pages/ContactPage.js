import {
  ArrowLeftIcon,
  SelectorIcon,
  BriefcaseIcon,
  DeviceMobileIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useContext, useState, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactsProvider } from "../Layout/Layout";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";

const numTypes = [
  { value: "-select-" },
  { value: "Mobile" },
  { value: "Home" },
  { value: "Work" },
];
const emailTypes = [
  { value: "-select-" },
  { value: "Mobile" },
  { value: "Home" },
  { value: "Work" },
];

const ContactPage = (props) => {
  const { contacts, setContacts } = useContext(ContactsProvider);
  const contactId = parseInt(props.location.pathname.split("/")[3]);
  const targetContact = contacts.find((contact) => contact.id === contactId);
  const [contact, setContact] = useState(targetContact);

  const nameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const numberInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const allContacts = [...contacts];
    const index = allContacts.indexOf(targetContact);
    allContacts[index] = contact;
    setContacts(allContacts);

    props.history.push("/contacts");
  };
  const showIcon = (type) => {
    const condition =
      type === "number" ? contact.numberType.value : contact.emailType.value;

    switch (condition) {
      case "Mobile":
        return <DeviceMobileIcon />;
      case "Home":
        return <HomeIcon />;
      case "Work":
        return <BriefcaseIcon />;
      default:
        break;
    }
  };
  const chnageHandler = (e) => {
    switch (e.target.name) {
      case "name":
        return setContact({ ...contact, name: e.target.value });
      case "lastName":
        return setContact({ ...contact, lastName: e.target.value });
      case "email":
        return setContact({
          ...contact,
          email: e.target.value,
        });
      case "number":
        return setContact({
          ...contact,
          number: e.target.value,
        });
      default:
        break;
    }
  };

  return (
    <div className="border-x border-slate-200 dark:border-slate-800 h-full">
      <Link
        to="/contacts"
        className="group fixed top-24 z-50 ml-5 rounded-full bg-none hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300 p-2.5"
      >
        <ArrowLeftIcon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:scale-110 group-hover:text-slate-800 dark:group-hover:text-slate-50 transition-all duration-300" />
      </Link>
      <form onSubmit={submitHandler}>
        <section className="grid gap-5 grid-cols-2 sm:grid-rows-7 grid-rows-8 px-5">
          <div className="col-span-2 row-span-2 flex sm:flex-row flex-col justify-center items-center">
            <div>
              <UserCircleIcon className="w-56 text-slate-600 dark:text-slate-400" />
            </div>
            <div>
              <p className="text-left w-full block text-slate-700 dark:text-slate-300 text-lg">
                last name :
                <span className="font-semibold"> {contact.lastName}</span>
              </p>
              <p className="text-left w-full block text-slate-700 dark:text-slate-300 text-lg">
                name : <span className="font-semibold"> {contact.name}</span>
              </p>
            </div>
          </div>
          <div className="sm:col-span-1 col-span-2 row-span-1">
            <label
              htmlFor="name"
              className="font-semibold text-slate-500 dark:text-slate-300"
            >
              Name*
            </label>
            <input
              onChange={(e) => chnageHandler(e)}
              className="focus:ring-sky-400 dark:focus:ring-sky-400 focus:ring-2 ring-1 drop-shadow-sm ring-slate-200 dark:ring-slate-700 px-4 py-2 border-none outline-none rounded-md mt-2 text-slate-600 dark:text-slate-400 focus:outline-none appearance-none w-full placeholder-slate-400 dark:bg-slate-800 shadow-sm group-hover:ring-slate-300 dark:group-hover:ring-slate-600 dark:group-hover:bg-slate-700"
              type="text"
              id="name"
              name="name"
              ref={nameInput}
              value={contact.name}
            />
          </div>
          <div className="sm:col-span-1 col-span-2 row-span-1">
            <label
              htmlFor="lastName"
              className="font-semibold text-slate-500 dark:text-slate-300"
            >
              Name*
            </label>
            <input
              onChange={(e) => chnageHandler(e)}
              className="focus:ring-sky-400 dark:focus:ring-sky-400 focus:ring-2 ring-1 drop-shadow-sm ring-slate-200 dark:ring-slate-700 px-4 py-2 border-none outline-none rounded-md mt-2 text-slate-600 dark:text-slate-400 focus:outline-none appearance-none w-full placeholder-slate-400 dark:bg-slate-800 shadow-sm group-hover:ring-slate-300 dark:group-hover:ring-slate-600 dark:group-hover:bg-slate-700"
              type="text"
              id="lastName"
              name="lastName"
              ref={lastNameInput}
              value={contact.lastName}
            />
          </div>
          <div className="col-span-2 row-span-1">
            <label
              htmlFor="email"
              className="font-semibold text-slate-500 dark:text-slate-300"
            >
              email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute w-5 left-3 top-[18px] z-50">
                <span className="text-slate-400 text-opacity-80">
                  {showIcon("email")}
                </span>
              </div>
              <input
                onChange={chnageHandler}
                type="text"
                name="email"
                id="email"
                className="focus:ring-sky-400 dark:focus:ring-sky-400 focus:ring-2 ring-1 drop-shadow-sm ring-slate-200 dark:ring-slate-700 pr-4 pl-10 py-2 border-none outline-none rounded-md mt-2 text-slate-600 dark:text-slate-400 focus:outline-none appearance-none w-full placeholder-slate-400 shadow-sm group-hover:ring-slate-300 dark:group-hover:ring-slate-600 dark:group-hover:bg-slate-700 dark:bg-slate-800"
                placeholder="ex.test@gmail.com"
                ref={emailInput}
                value={contact.email}
              />
              <div className="group absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="email-type" className="sr-only">
                  email-type
                </label>

                <Listbox
                  value={contact.emailType.value}
                  onChange={(e) => {
                    const index = emailTypes.findIndex(
                      (email) => email.value === e
                    );
                    // console.log(emailTypes[index]);
                    return setContact({
                      ...contact,
                      emailType: emailTypes[index],
                    });
                  }}
                >
                  <div className="mt-1.5">
                    <Listbox.Button className="focus:outline-none relative w-full cursor-default rounded-lg bg-white dark:bg-slate-800 py-[7px] pl-3 pr-10 text-left group-hover:ring-sky-400 ring-0 ring-sky-400 dark:group-hover:bg-slate-700">
                      <span className="block truncate dark:text-slate-400">
                        {contact.emailType.value}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-[120%] overflow-auto rounded-md bg-white dark:bg-slate-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm z-50">
                        {numTypes.map((email, emailIdx) => (
                          <Listbox.Option
                            key={emailIdx}
                            className={({ active }) => {
                              return `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-100 text-blue-800 dark:bg-sky-900 dark:text-sky-500"
                                  : "text-gray-900 dark:text-slate-50"
                              }`;
                            }}
                            value={email.value}
                          >
                            {({ selected }) => {
                              // console.log(selected);

                              return (
                                <>
                                  <span
                                    className={`block ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {email.value}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              );
                            }}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
          <div className="col-span-2 row-span-1">
            <label
              htmlFor="number"
              className="font-semibold text-slate-500 dark:text-slate-300"
            >
              number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute w-5 left-3 top-[18px] z-50">
                <span className="text-slate-400 text-opacity-80">
                  {showIcon("number")}
                </span>
              </div>
              <input
                onChange={chnageHandler}
                type="text"
                name="number"
                id="number"
                className="focus:ring-sky-400 dark:focus:ring-sky-400 focus:ring-2 ring-1 drop-shadow-sm ring-slate-200 dark:ring-slate-700 pr-4 pl-10 py-2 border-none outline-none rounded-md mt-2 text-slate-600 dark:text-slate-400 focus:outline-none appearance-none w-full placeholder-slate-400 shadow-sm group-hover:ring-slate-300 dark:group-hover:ring-slate-600 dark:group-hover:bg-slate-700 dark:bg-slate-800"
                placeholder="ex.09XX_XXXX_XXX"
                ref={numberInput}
                value={contact.number}
              />
              <div className="group absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="email-type" className="sr-only">
                  email-type
                </label>

                <Listbox
                  value={contact.numberType.value}
                  onChange={(e) => {
                    const index = numTypes.findIndex(
                      (email) => email.value === e
                    );
                    // console.log(numTypes[index]);
                    return setContact({
                      ...contact,
                      numberType: numTypes[index],
                    });
                  }}
                >
                  <div className="mt-1.5">
                    <Listbox.Button className="focus:outline-none relative w-full cursor-default rounded-lg bg-white dark:bg-slate-800 py-[7px] pl-3 pr-10 text-left group-hover:ring-sky-400 ring-0 ring-sky-400 dark:group-hover:bg-slate-700">
                      <span className="block truncate dark:text-slate-400">
                        {contact.numberType.value}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-[120%] overflow-auto rounded-md bg-white dark:bg-slate-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                        {numTypes.map((number, numberIdx) => (
                          <Listbox.Option
                            key={numberIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-100 text-blue-800 dark:bg-sky-900 dark:text-sky-500"
                                  : "text-gray-900 dark:text-slate-50"
                              }`
                            }
                            value={number.value}
                          >
                            {({ selected }) => {
                              return (
                                <>
                                  <span
                                    className={`block ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {number.value}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              );
                            }}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
          <button
            className="col-span-2 row-span-1 relative after:w-full after:absolute after:h-full after:bg-white after:opacity-30 after:rounded-full after:translate-x-full after:transition-transform hover:after:translate-x-0 hover:after:rounded-md after:ease-in after:duration-[250ms] bg-sky-400 dark:bg-sky-600 p-3 rounded-md shadow-sm w-full h-11 sm:w-80 mx-auto mt-4 flex justify-center items-center text-slate-100 font-bold overflow-hidden"
            type="submit"
            onClick={submitHandler}
          >
            Update contact
          </button>
        </section>
      </form>
    </div>
  );
};

export default ContactPage;
