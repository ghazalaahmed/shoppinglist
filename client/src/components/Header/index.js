import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Col, Row, Container } from "react-bootstrap";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="beige">
      <Container>
        <Row className="justify-content-md-center px-4 px-md-0">
          <Col lg="8">
            <Navbar collapseOnSelect expand="lg" className="pt-5 pb-1 pb-lg-3">
              <Navbar.Brand>
                <Link className="brand display-6" to="/">
                  <span className="cata">cata</span>
                  <span className="list">LIST</span>
                </Link>
              </Navbar.Brand>

              <Navbar.Toggle
                className="bg-light"
                aria-controls="basic-navbar-nav"
              />
              <Navbar.Collapse
        
                className="justify-content-end fauna"
                id="basic-navbar-nav"
              >
                <Nav>
                  {Auth.loggedIn() ? (
                    <>
                      <Nav.Link>
                        <Link className="navLink ps-lg-3" to="/list">
                          My List
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className="navLink  ps-lg-3" onClick={logout}>
                          Logout
                        </Link>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link>
                        <Link className="navLink" to="/signup">
                          SIGNUP
                        </Link>
                      </Nav.Link>
                      <Nav.Link>
                        <Link className="navLink ms-lg-3 " to="/login">
                          LOGIN
                        </Link>
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row className="justify-content-md-center px-4 px-md-0">
          <Col lg="8">
            <hr className="hrNav"></hr>
          </Col>
        </Row>
      </Container>
    </div>
    /* // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand><Link to="/">Home Page</Link>  </Navbar.Brand>
    //     <Navbar.Toggle />
    //   <Navbar.Collapse className="justify-content-end">
    //     <Navbar.Text>
    //     {Auth.loggedIn() ? ( */
    //       <>
    //         <span>Hey there, {Auth.getProfile().data.username}!</span>
    //         <button className="btn btn-lg btn-light m-2" onClick={logout}>
    //           Logout
    //         </button>
    //       </>
    //     ) : (
    //       <>
    //         <Link to="/Mylist">
    //           Mylist
    //         </Link>
    //         <Link to="/About">
    //           About
    //         </Link>
    //         <Link to="/signup">
    //           Sigout
    //         </Link>
    //       </>
    //     )}
    //     </Navbar.Text>
    //   </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
