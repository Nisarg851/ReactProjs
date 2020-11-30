import {React, Component} from 'react';
import {Card,CardImgOverlay,CardImg,CardTitle} from 'reactstrap';
import DishDetail from './dishDetailComponent';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedDish:null,
        };
    }

    
    DishSelected(dish){
        this.setState({ selectedDish:dish });
    }

    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {() => this.DishSelected(dish)}>
                        <CardImg src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle><h1>{dish.name}</h1></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="contianer">
                <div className="row">
                    {menu}
                </div>
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;    