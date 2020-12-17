import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, Button, Input, Label, Col, FormFeedback} from 'reactstrap';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            telnum:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            touched:{
                firstname:false,
                lastname:false,
                email:false,
                telnum:false,
            },
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.onTouch = this.onTouch.bind(this);
        this.invalidInput = this.invalidInput.bind(this);
    }

    handleFormSubmit(event){
        event.preventDefault();
        alert(JSON.stringify(this.state));
    }

    handleInput(event){
        let target = event.target;
        let name = target.name;
        let value = target.name==="agree" ? target.checked : target.value;
        this.setState({[name]:value});
    }

    onTouch = (field)  => (event) => {
        this.setState({touched: {...this.state.touched, [field]:true}});
    }

    invalidInput(firstname,lastname,telnum,email){
        let error = {
            firstname:"",
            lastname:"",
            telnum:"",
            email:""
        }
        console.log("Invalid input");
        if(this.state.touched.firstname && firstname.length<2)
            error.firstname = "First name should have atleast 2 character";
        else if(this.state.touched.firstname && firstname.length>20)
            error.firstname = "First name should have less than 20 character";

        if(this.state.touched.lastname && lastname.length<2)
            error.lastname = "Last name should have atleast 2 character";
        else if(this.state.touched.lastname && lastname.length>20)
            error.lastname = "Last name should have less than 20 character";

        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
            error.telnum = "This field should only contain numbers";
        else if( this.state.touched.telnum && telnum.length!==10)
            error.telnum = "Contact should contain exactly 10 digits";
        
        if(this.state.touched.email && email.split('').filter((letter) => letter==='@'||letter==='.').length<2){
            error.email = "email should contain a proper domain (check for @ or .)";
        }

        return error;
    }

    render(){
        let inputError = this.invalidInput(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h1>Contact US</h1>
                        <hr />
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="#"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-12 m-1">
                        <h1>Send your Feedback</h1>
                        <hr/>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleFormSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First name: </Label>
                                <Col md={10}>
                                <Input type="text" id="firstname" name="firstname" placeholder="First name"
                                        value={this.state.firstname}
                                        valid={inputError.firstname==='' && this.state.touched.firstname}
                                        invalid={inputError.firstname!==''}
                                        onChange={this.handleInput}
                                        onBlur={this.onTouch("firstname")}/>
                                <FormFeedback>
                                    {inputError.firstname}
                                </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last name: </Label>
                                <Col md={10}>
                                <Input type="text" id="lastname" name="lastname" placeholder="Lastname"
                                        value={this.state.lastname}
                                        valid={inputError.lastname==='' && this.state.touched.lastname}
                                        invalid={inputError.lastname!==''}
                                        onChange={this.handleInput}
                                        onBlur={this.onTouch("lastname")}/>
                                <FormFeedback>
                                    {inputError.lastname}
                                </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact no.: </Label>
                                <Col md={10}>
                                <Input type="tel" id="telnum" name="telnum" placeholder="tel. no."
                                        value={this.state.telnum}
                                        valid={inputError.telnum==='' && this.state.touched.telnum}
                                        invalid={inputError.telnum!==''}
                                        onChange={this.handleInput}
                                        onBlur={this.onTouch("telnum")}/>
                                <FormFeedback>
                                    {inputError.telnum}
                                </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email"md={2}>Email: </Label>
                                <Col md={10}>
                                <Input type="email" id="email" name="email" placeholder="abc@xyz.com"
                                        value={this.state.email}
                                        valid={inputError.email==='' && this.state.touched.email}
                                        invalid={inputError.email!==''}
                                        onChange={this.handleInput}
                                        onBlur={this.onTouch("email")}/>
                                <FormFeedback>
                                    {inputError.email}
                                </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset: 2}}>
                                   <FormGroup check>
                                       <Label check>
                                           <Input type="checkbox" name="agree" value={this.state.agree}
                                                    onChange={this.handleInput}/>
                                           <strong>May we contact you?</strong>
                                       </Label>
                                   </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType}
                                            onChange={this.handleInput}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback:</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" row="12" value={this.state.message}
                                            onChange={this.handleInput}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col >
                                    <Button style={{float:"right"}}type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;