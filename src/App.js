import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </Layout>
  );
}

export default App;
