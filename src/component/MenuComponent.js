import {React, Component} from 'react';
import {Card,CardImgOverlay,CardImg,CardTitle} from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {()=> this.props.onClick(dish.id)}>
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
            </div>
        );
    }
}

export default Menu;    