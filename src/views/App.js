import logo from './logo.svg';
import './App.css';
import MyComponent from './Example/MyComponent.js';
import FormEmployee from './SplApp/FormEmployee';
import Login from './SplApp/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <FormEmployee /> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
