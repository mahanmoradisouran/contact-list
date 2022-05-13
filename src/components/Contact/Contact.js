import {
  ArrowRightIcon,
  ChevronLeftIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";

const Contact = ({ data, deleteContactHandler }) => {
  return (
    <SwipeableViews
      slideStyle={{ padding: "1px" }}
      style={{ padding: "5px  10px" }}
    >
      <div
        className={`rounded-md w-full h-full flex items-center justify-between ring-1 bg-white dark:bg-slate-800 ring-slate-200 dark:ring-slate-800 transition-all hover:ring-2 overflow-hidden`}
      >
        <Link
         className="flex justify-between w-10/12" to={`/contacts/contact/${data.id}`}>
          <div className="px-4 py-2 h-full flex items-center">
            <UserCircleIcon
              className="w-14 h-14 text-slate-700 dark:text-slate-500"
              strokeWidth={1}
            />
            <div className="flex flex-col">
              <span className="ml-2 dark:text-slate-400 text-slate-700">
                {data.name} {data.lastName}
              </span>
              <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
                {data.number}
              </span>
            </div>
          </div>
          <div className="h-full flex sm:hidden items-center absolute right-0 top-0 px-2 z-50">
            <ChevronLeftIcon className="w-4 h-4 dark:text-slate-100 text-slate-500" />
          </div>
        </Link>
        <div
          className="justify-center items-center w-20 h-full bg-slate-200 dark:bg-slate-700 cursor-pointer group hidden sm:flex"
          onClick={() => deleteContactHandler(data.id)}
        >
          <TrashIcon className="transition-all duration-200 w-7 h-7 text-slate-400 group-hover:scale-110 group-hover:text-slate-500 dark:group-hover:text-slate-300" />
        </div>
      </div>
      <div className="justify-evenly items-center w-11/12 rounded-md h-full bg-slate-100 dark:bg-slate-700 cursor-pointer group sm:hidden flex ml-4 px-2 py-4">
        <TrashIcon
          onClick={() => deleteContactHandler(data.id)}
          className="transition-all duration-200 w-10 text-slate-400 group-hover:scale-110 group-hover:text-slate-500 dark:group-hover:text-slate-300"
        />
        <div className="pl-4">
          <p className="text-red-600 dark:text-red-400 font-semibold">
            Click on trash icon to delete
          </p>
          <p className="text-slate-600 dark:text-slate-400">
            Swipe right to cancel
            <ArrowRightIcon className="w-4 h-4 inline ml-1 text-slate-400 dark:text-slate-400" />
          </p>
        </div>
      </div>
    </SwipeableViews>
  );
};

export default Contact;
