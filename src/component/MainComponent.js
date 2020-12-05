import {React, Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './dishDetailComponent';
import {DISHES} from '../shared/dishes';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null,
    }
  }
  
  DishSelected(dishID){
    this.setState({ selectedDish:dishID });
  }
  
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restorant ConFusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes } onClick={(dishID) => this.DishSelected(dishID)}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/>
      </div>
    );
  };
}

export default App;
