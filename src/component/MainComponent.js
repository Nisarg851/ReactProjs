import {React, Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent.js';
import About from './AboutComponent.js';
import Contact from './ContactComponent.js';
import DishDetail from './dishDetailComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment} from '../redux/ActionCreator';

const connectStoreToProps= (state) => {
  return {
    dishes:state.dishes,
    leaders:state.leaders,
    promotions:state.promotions,
    comments:state.comments
  }
}

const DishpatchActions = (dishpatch) => ({
  addComment: (dishID,rating,author,comment) => dishpatch(addComment(dishID,rating,author,comment))
})

class Main extends Component{
  constructor(props){
    super(props);
    this.showDishDetail = this.showDishDetail.bind(this);
  }
  
  // DishSelected(dishID){
  //   this.setState({ selectedDish:dishID });
  // }

  showDishDetail({match}){
    return(
      <DishDetail selectedDish={this.props.dishes.filter(dish => dish.id===parseInt(match.params.dishID))[0]}
      comments={this.props.comments.filter(comment => comment.dishId===parseInt(match.params.dishID))}
      addComment={this.props.addComment}/>
      );
  }
  
  render(){
    return (
      <div className="Main">
        <Header/>
        <div className="container">
          <Switch>
            <Route path='/home' component={()=> <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]} 
                                                      leader={this.props.leaders.filter((lead)=> lead.featured)[0]}
                                                      promotion={this.props.promotions.filter((promo)=> promo.featured)[0]}/>} 
                                                      />
            <Route path="/aboutus" component={()=> <About leaders={this.props.leaders}/>}/>
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishID' component={this.showDishDetail}/>
            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home'/>
          </Switch>
        </div>
        {/* <Menu dishes={this.props.dishes } onClick={(dishID) => this.DishSelected(dishID)}/>
        <DishDetail selectedDish={this.props.dishes.filter((dish)=> dish.id===this.props.selectedDish)[0]}/> */}
        <Footer/>
      </div>
    );
  };
}

export default withRouter(connect(connectStoreToProps, DishpatchActions)(Main));
