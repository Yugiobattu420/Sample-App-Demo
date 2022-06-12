import logo from './logo.svg';
import './App.css';
import MyComponent from './Example/MyComponent.js';
import FormEmployee from './SplApp/FormEmployee';
import Login from './SplApp/Login';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/:name">
              <FormEmployee />
            </Route>
          </Switch>

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
