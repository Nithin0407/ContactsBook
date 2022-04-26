import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import { povider, Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact  from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" element={<Contacts/>} />
                <Route exact path="/contacts/add" element={<AddContact/>} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  element={<EditContact/>}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
