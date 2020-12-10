// import logo from './logo.svg';
import {React, Component} from 'react';
import Main from './component/MainComponent.js';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    );
  };
}

export default App;
