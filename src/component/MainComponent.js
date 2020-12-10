import {React, Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import DishDetail from './dishDetailComponent';
import {DISHES} from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
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
      <div className="Main">
        <Header/>
        <Switch>
          <Route path='/home' component={()=> <Home/>} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishID)=> this.DishSelected(dishID)}/>} />
          <Redirect to='/home'/>
        </Switch>
        {/* <Menu dishes={this.state.dishes } onClick={(dishID) => this.DishSelected(dishID)}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/> */}
        <Footer/>
      </div>
    );
  };
}

export default Main;
