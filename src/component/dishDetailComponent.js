import {useState, Fragment} from 'react';
import {Card,CardBody,CardTitle,CardImg,CardText,Breadcrumb,BreadcrumbItem,Modal,ModalBody,ModalHeader,Button,Row,Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length>=len;
const maxLength = (len) => (val) => val && val.length<=len;

function handleForm(values,addComment,dishId,toggleComment){
    let rating = values.rating===undefined ? 1 : values.rating;
    alert("Rating: "+values.rating+"\nAuthor: "+values.author+"\nComment: "+values.comment);
    addComment(dishId,rating,values.author,values.comment);
    toggleComment();
}

function ToggleComment(props){
    let [toggleCommentModal,toggleComment] = useState(false);
    return(
        <Fragment>
            <Button style={{backgroundColor:"white", color:"Grey"}} onClick={() => toggleComment(true)}><i className="fa fa-pencil fa-lg"></i> Submit Comment</Button>
            <Modal isOpen={toggleCommentModal}>
                <ModalHeader><i>Submit Comment</i><i className="fa fa-times" onClick={() => toggleComment()} style={{marginLeft:"17rem"}}></i></ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(value) => handleForm(value,props.addComment,props.dishId,toggleComment)}>
                        <Row>
                            <Label htmlFor="rating">Rating</Label>
                        </Row>
                        <Row>
                            <Control.select model=".rating" id="rating" className="form-control">
                                <option active>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Row>
                        <Row>
                            <Label htmlFor="author">Your Name</Label>
                        </Row>
                        <Row className="form-group">
                            <Control.text model=".author" id="author" className="form-control"
                                          validators={{
                                              required,
                                              minLength: minLength(3),
                                              maxLength: maxLength(15)
                                          }}/>
                            <Errors model=".author"
                                    className="text-danger"
                                    show="touched"
                                    messages={{
                                        required: "Name field required",
                                        minLength: "name should be atleast 3 characters",
                                        maxLength: "name should be atmost 15 charactrs",
                                    }}/>
                        </Row>
                        <Row>
                            <Label htmlFor="comment">Comment</Label>
                        </Row>
                        <Row className="form-group">
                            <Control.textarea rows="6" model=".comment" id="comment" className="form-control"
                                                validators={{
                                                    required,
                                                    maxLength: maxLength(500),
                                                }}/>
                            <Errors className="text-danger"
                                    model=".comment"
                                    show="touched"
                                    messages={{
                                        required: "Comment field is required",
                                        maxLength: "maximum characters should be less than 500 characters"
                                    }}/>
                        </Row>
                        <Button color="primary">Submit</Button>{" "}
                        <Button color="danger" onClick={() => toggleComment()}>Cancle</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </Fragment>
    );
}

function renderComments(dishcmnt,addComment,dishId){
    let dishComment;
        if(dishcmnt!=null){
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
            dishComment = (<Fragment>
                                <h1>Comments</h1>
                                <ul className="list-unstyled">{dishComment}</ul>
                                {/* <Button style={{backgroundColor:"white", color:"Grey"}} onClick={toggleComment}><i className="fa fa-pencil fa-lg"></i> Submit Comment</Button> */}
                                <ToggleComment addComment={addComment} dishId={dishId}/>
                            </Fragment>
                        );
        }else{
            dishComment=<div></div>
        }   
    return (
        <div  className="col-12 col-md-5 m-1">
            {dishComment}
        </div>
    );
}
    
function renderSelectedDish(dish){
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
                {renderComments(props.comments,props.addComment,props.selectedDish.id)}
            </div>
        </div>
    );
}

export default DishDetail;