import {React} from 'react';
import {Card, CardImgOverlay, CardImg, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const RenderMenuItem = ({dish}) => {
    return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle tag="h3">{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish)=>{
        return(
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });

    return(
        <div className="contianer">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h1>Menu</h1>
                    <hr />
                </div>
            </div>
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