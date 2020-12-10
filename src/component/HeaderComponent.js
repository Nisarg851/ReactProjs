import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggle:false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({ toggle:!this.state.toggle});
  }

  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand href="/">
                <img src="assets/images/logo.png" width="50" height="40" alt="Restorant Con Fusion"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.toggle}>{/* This is depecrated and can be used upto version 16.x only */}
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