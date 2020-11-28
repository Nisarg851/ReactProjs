import {React, Component} from 'react';
import {Card,CardBody,CardImgOverlay,CardImg,CardText,CardTitle} from 'reactstrap';

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

    renderSelectedDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h1>{dish.name}</h1></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return(<div></div>);
        }
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
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderSelectedDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;