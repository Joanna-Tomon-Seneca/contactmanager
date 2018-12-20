import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/contacts';
import Header from './components/layout/header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import test from './components/test/test';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <h1>Manager !!!!</h1>
            <Header branding="Contact Manager !!" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
