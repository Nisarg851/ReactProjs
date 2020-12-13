import {React, Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import Contact from './ContactComponent.js';
import DishDetail from './dishDetailComponent';
import {DISHES} from '../shared/dishes.js';
import {LEADERS} from '../shared/leaders.js';
import {COMMENTS} from '../shared/comments.js';
import {PROMOTIONS} from '../shared/promotion.js';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      leaders:LEADERS,
      promotions:PROMOTIONS,
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
          <Route path='/home' component={()=> <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]} 
                                                    leader={this.state.leaders.filter((lead)=> lead.featured)[0]}
                                                    promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}/>} 
                                                    />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishID)=> this.DishSelected(dishID)}/>} />
          <Route exact path='/contactus' component={Contact} />
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
