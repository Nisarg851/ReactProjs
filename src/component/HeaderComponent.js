import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody, ModalHeader,
          Form, FormGroup, Label, Input, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle:false,
      modalToggle:false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  toggleNav(){
    this.setState({ toggle:!this.state.toggle});
  }

  toggleModal(){
    this.setState({modalToggle: !this.state.modalToggle});
  }

  formSubmitted(event){
    event.preventDefault();
    alert("username: "+this.username.value+"\npassword: "+this.password.value+"\nremember me: "+this.remember.value);
  }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarBrand href="/">
                <img src="assets/images/logo.png" width="50" height="40" alt="Restorant Con Fusion"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav}/>
            <Collapse isOpen={this.state.toggle} navbar>
              <Nav navbar className="nav">
                <NavItem>
                  <NavLink to="/home" className="nav-link"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/aboutus" className="nav-link"><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu" className="nav-link"><span className="fa fa-list fa-lg"> Menu</span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contactus" className="nav-link"><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                </NavItem>
              </Nav>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Button onClick={this.toggleModal} color="primary"><i className="fa fa-sign-in fa-lg"></i> Login</Button>
                </NavItem>
                <NavItem>
                  <Modal isOpen={this.state.modalToggle}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                      <Form onSubmit={this.formSubmitted}>
                        <FormGroup row>
                          <Label htmlFor="username" md={2}>Username:</Label>
                          <Col md={10}>
                            <Input type="text" id="username" name="username" placeholder="username"
                              innerRef={(input) => this.username = input }/>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label htmlFor="password" md={2}>Password:</Label>
                          <Col md={10}>
                            <Input type="password" id="password" name="password" placeholder="password"
                              innerRef={(input) => this.password = input}/>
                          </Col>
                        </FormGroup>
                        <FormGroup check>
                          <Label check htmlFor="remember">
                            <Input type="checkbox" id="remember" name="remember"
                              innerRef={(input) => this.remember=input}/>
                            Remember me</Label>
                            <Button type="submit" value="submit" color="success" style={{float:"right"}}>Submit</Button>
                        </FormGroup>
                      </Form>
                    </ModalBody>
                  </Modal>
                </NavItem>
              </Nav>
            </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;