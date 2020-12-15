import {React, Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import About from './AboutComponent.js';
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
      comments:COMMENTS,
      // selectedDish:null,
    }
    this.showDishDetail = this.showDishDetail.bind(this);
  }
  
  // DishSelected(dishID){
  //   this.setState({ selectedDish:dishID });
  // }

  showDishDetail({match}){
    return(
      <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id===parseInt(match.params.dishID))[0]}
      comments={this.state.comments.filter(comment => comment.dishId===parseInt(match.params.dishID))}/>
      );
  }
  
  render(){
    return (
      <div className="Main">
        <Header/>
        <div className="container">
          <Switch>
            <Route path='/home' component={()=> <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]} 
                                                      leader={this.state.leaders.filter((lead)=> lead.featured)[0]}
                                                      promotion={this.state.promotions.filter((promo)=> promo.featured)[0]}/>} 
                                                      />
            <Route path="/aboutus" component={()=> <About leaders={this.state.leaders}/>}/>
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route path='/menu/:dishID' component={this.showDishDetail}/>
            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home'/>
          </Switch>
        </div>
        {/* <Menu dishes={this.state.dishes } onClick={(dishID) => this.DishSelected(dishID)}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}/> */}
        <Footer/>
      </div>
    );
  };
}

export default Main;
