// import logo from './logo.svg';
import {React, Component} from 'react';
import Main from './component/MainComponent.js';

class App extends Component{

  render(){
    return (
      <div className="App">
        <Main/>
      </div>
    );
  };
}
// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/">Restorant ConFusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu dishes={this.state.dishes}/>
//     </div>
//   );
// }

export default App;
