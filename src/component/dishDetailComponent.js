import {React} from 'react';
import {Card,CardBody,CardTitle,CardImg,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function renderComments(dishcmnt){
    let dishComment;
        if(dishcmnt!=null){
            console.log(dishcmnt);
            dishComment = dishcmnt.map((cmt)=>{
                let cmtDate = new Date(cmt.date);
                cmtDate = cmtDate.toDateString();
                return(
                        <li key={cmt.id}>
                            <br></br>
                            <h3>{cmt.comment}</h3>
                            <h3>--{cmt.author}, {cmtDate}</h3>
                        </li>
                    );
                }
            );
            dishComment = (<div  className="col-12 col-md-5 m-1">
                                <h1>Comments</h1>
                                <ul className="list-unstyled">{dishComment}</ul>
                            </div>
                        );
        }else{
            dishComment=<div></div>
        }   
    return dishComment;
}
    
function renderSelectedDish(dish){
    console.log(dish);
    if(dish!=null){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><h1>{dish.name}</h1></CardTitle>
                    <CardText><h4>{dish.description}</h4></CardText>
                </CardBody>
            </Card>
        );
    }else{
        return(<div></div>);
    }
}
    
const DishDetail = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h1>{props.selectedDish.name}</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {renderSelectedDish(props.selectedDish)}
                </div>
                {renderComments(props.comments)}
            </div>
        </div>
    );
}

// class DishDetail extends Component{
    
//     constructor(props){
//         super(props);
//     }

//     renderSelectedDish(dish){
//         if(dish!=null){
//             return(
//                 <Card>
//                     <CardImg src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle><h1>{dish.name}</h1></CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             );
//         }else{
//             return(<div></div>);
//         }
//     }

//     renderComments(dish){
//         let dishComment;
//         if(dish!=null){
//             dishComment = dish.comments.map((cmt)=>{
//                 let cmtDate = new Date(cmt.date);
//                 cmtDate = cmtDate.toDateString();
//                 return(
//                         <li>
//                             <br></br>
//                             <h3>{cmt.comment}</h3>
//                             <h3>--{cmt.author}, {cmtDate}</h3>
//                         </li>
//                     );
//                 }
//             );
//             dishComment = (<div  className="col-12 col-md-5 m-1">
//                                 <h1>Comments</h1>
//                                 <ul className="list-unstyled">{dishComment}</ul>
//                             </div>
//                             );
//         }else{
//             dishComment=<div></div>
//         }   
//         return dishComment;
//     }

//     render(){
    //     return(
    //     <div className="row">
    //         <div  className="col-12 col-md-5 m-1">
    //             {this.renderSelectedDish(this.props.selectedDish)}
    //         </div>
    //         {this.renderComments(this.props.selectedDish)}
    //     </div>
    //     );
    // }
// }

export default DishDetail;