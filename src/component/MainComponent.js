import {React, Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
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
        <Header/>
        <Menu dishes={this.state.dishes } onClick={(dishID) => this.DishSelected(dishID)}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  };
}

export default App;
