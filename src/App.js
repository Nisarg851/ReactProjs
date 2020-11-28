import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './component/MenuComponent';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restorant ConFusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  );
}

export default App;
