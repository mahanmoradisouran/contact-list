import { useState, Fragment, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  SelectorIcon,
  DeviceMobileIcon,
  HomeIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import moment from "moment";
import toast from "react-hot-toast";

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

const AddContact = ({ setContacts, contacts }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    lastName: "",
    email: "",
    emailType: emailTypes[0],
    number: "",
    numberType: numTypes[0],
    id: null,
    adedTime: null,
  });

  const nameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const numberInput = useRef();

  const checkValidFormHandler = () => {
    const regexEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/g;
    const regexNumber =
      /(0)?([ ][()]){0,2}([ ][()]){0,2}(?:[0-9]([ ][()]){0,2}){10}/g;

    const { name, lastName, email, emailType, number, numberType } = newContact;
    const showError = (elemnt, massage) => {
      toast.custom(
        (t) => {
          elemnt?.current.focus();
          return (
            <div
              className={`${
                t.visible ? "animate-fadeShow" : "animate-fadeHide"
              } max-w-md w-full bg-white dark:bg-slate-700 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 dark:ring-opacity-0`}
            >
              <div className="flex-1 w-0 p-4">
                <p className="text-slate-700 dark:text-slate-300">
                  Please check your
                  <span
                    onClick={() => elemnt?.current.focus()}
                    className="text-sky-600 dark:text-sky-400 underline decoration-1 decoration-sky-600 dark:decoration-sky-400 cursor-pointer"
                  >
                    {" " + massage}
                  </span>
                </p>
              </div>
              <div className="flex border-l border-gray-200 dark:border-slate-600">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-sky-500 dark:hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-sky-500"
                >
                  Close
                </button>
              </div>
            </div>
          );
        },
        { duration: 3000 }
      );
    };

    if (!name.trim()) {
      showError(nameInput, "name input");
      return false;
    }

    if (!lastName.trim()) {
      showError(lastNameInput, "last name input");
      return false;
    }

    if (!regexEmail.test(email)) {
      showError(emailInput, "email input");
      return false;
    }

    if (!regexNumber.test(number)) {
      showError(numberInput, "number input");
      return false;
    }

    if (emailType.value === emailTypes[0].value) {
      showError(null, "email select box");
      return false;
    }

    if (numberType.value === numTypes[0].value) {
      showError(null, "number select box");
      return false;
    }

    return true;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const contact = { ...newContact };
    contact.adedTime = moment();
    contact.id = Date.now();

    if (checkValidFormHandler()) {
      setNewContact({
        name: "",
        lastName: "",
        email: "",
        emailType: emailTypes[0],
        number: "",
        numberType: numTypes[0],
        id: null,
        adedTime: null,
      });
      setContacts([...contacts, contact]);
    }
  };
  const chnageHandler = (e) => {
    switch (e.target.name) {
      case "name":
        return setNewContact({ ...newContact, name: e.target.value });
      case "lastName":
        return setNewContact({ ...newContact, lastName: e.target.value });
      case "email":
        return setNewContact({
          ...newContact,
          email: e.target.value,
        });
      case "number":
        return setNewContact({
          ...newContact,
          number: e.target.value,
        });
      default:
        break;
    }
  };
  const showIcon = (type) => {
    const condition =
      type === "number"
        ? newContact.numberType.value
        : newContact.emailType.value;

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

  return (
    <form onSubmit={submitHandler}>
      <h2 className="text-slate-700 dark:text-slate-200 font-bold text-center text-2xl pt-5">
        Add new contact
        <br />
      </h2>
      <section>
        <div className="flex sm:flex-row flex-col">
          <div className="flex sm:w-1/2 w-full flex-col p-2 group">
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
              value={newContact.name}
            />
          </div>
          <div className="flex sm:w-1/2 w-full flex-col p-2 group">
            <label
              htmlFor="last-name"
              className="font-semibold text-slate-500 dark:text-slate-300"
            >
              Last name
            </label>
            <input
              onChange={(e) => chnageHandler(e)}
              className="focus:ring-sky-400 dark:focus:ring-sky-400 focus:ring-2 ring-1 drop-shadow-sm ring-slate-200 dark:ring-slate-700 px-4 py-2 border-none outline-none rounded-md mt-2 text-slate-600 dark:text-slate-400 focus:outline-none appearance-none w-full placeholder-slate-400 shadow-sm group-hover:ring-slate-300 dark:group-hover:ring-slate-600 dark:group-hover:bg-slate-700 dark:bg-slate-800"
              type="text"
              id="last-name"
              name="lastName"
              ref={lastNameInput}
              value={newContact.lastName}
            />
          </div>
        </div>
        <div className="flex flex-col p-2 group">
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
              value={newContact.email}
            />
            <div className="group absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="email-type" className="sr-only">
                email-type
              </label>

              <Listbox
                value={newContact.emailType.value}
                onChange={(e) => {
                  const index = emailTypes.findIndex(
                    (email) => email.value === e
                  );
                  // console.log(emailTypes[index]);
                  return setNewContact({
                    ...newContact,
                    emailType: emailTypes[index],
                  });
                }}
              >
                <div className="mt-1.5">
                  <Listbox.Button className="focus:outline-none relative w-full cursor-default rounded-lg bg-white dark:bg-slate-800 py-[7px] pl-3 pr-10 text-left group-hover:ring-sky-400 ring-0 ring-sky-400 dark:group-hover:bg-slate-700">
                    <span className="block truncate dark:text-slate-400">
                      {newContact.emailType.value}
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
        <div className="flex flex-col p-2 group">
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
              value={newContact.number}
            />
            <div className="group absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="email-type" className="sr-only">
                email-type
              </label>

              <Listbox
                value={newContact.numberType.value}
                onChange={(e) => {
                  const index = numTypes.findIndex(
                    (email) => email.value === e
                  );
                  // console.log(numTypes[index]);
                  return setNewContact({
                    ...newContact,
                    numberType: numTypes[index],
                  });
                }}
              >
                <div className="mt-1.5">
                  <Listbox.Button className="focus:outline-none relative w-full cursor-default rounded-lg bg-white dark:bg-slate-800 py-[7px] pl-3 pr-10 text-left group-hover:ring-sky-400 ring-0 ring-sky-400 dark:group-hover:bg-slate-700">
                    <span className="block truncate dark:text-slate-400">
                      {newContact.numberType.value}
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
          type="submit"
          onClick={submitHandler}
          className="relative after:w-full after:absolute after:h-full after:bg-white after:opacity-30 after:rounded-full after:translate-x-full after:transition-transform hover:after:translate-x-0 hover:after:rounded-md after:ease-in after:duration-[250ms] bg-sky-400 dark:bg-sky-600 p-3 rounded-md shadow-sm w-full sm:w-80 mx-auto mt-4 flex justify-center items-center text-slate-100 font-bold overflow-hidden"
        >
          Add contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </button>
      </section>
    </form>
  );
};

export default AddContact;
