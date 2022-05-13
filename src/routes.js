import ContactPage from "./pages/ContactPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/contacts/contact/:id", component: ContactPage },
  { path: "/contacts", component: ContactsPage },
  { path: "*", component: NotFoundPage },
];

export default routes;
