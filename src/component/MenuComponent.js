import {React} from 'react';
import {Card, CardImgOverlay, CardImg, CardTitle} from 'reactstrap';

const RenderMenuItem = ({dish,onClick}) => {
    return(
        <Card onClick = {()=> onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle tag="h3">{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish)=>{
        return(
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
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

// class Menu extends Component{

//     constructor(props){
//         super(props);
//     }

//     render(){

//         const menu = this.props.dishes.map((dish) => {
//             return(
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                     <Card onClick = {()=> this.props.onClick(dish.id)}>
//                         <CardImg src={dish.image} alt={dish.name}/>
//                         <CardImgOverlay>
//                             <CardTitle><h1>{dish.name}</h1></CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });

//         return(
//             <div className="contianer">
//                 <div className="row">
//                     {menu}
//                 </div>
//             </div>
//         );
//     }
// }

export default Menu;    