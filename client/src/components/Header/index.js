import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Col } from "react-bootstrap";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="beige">
      <Navbar collapseOnSelect expand="lg" className="pt-5  pb-3">
        <div className="container-sm" fluid="md">
          <Navbar.Brand>
            {" "}
            <Link className="link" to="/">
              Shopping List
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link>
                {Auth.loggedIn() ? (
                  <>
                    <Link className=" link link-navbar" to="/list">
                      My List
                    </Link>
                    <Link className=" link link-navbar" onClick={logout}>Logout</Link>
                  </>
                ) : (
                  <>
                    <Link className="link link-navbar" to="/signup">
                      Signup
                    </Link>

                    <Link className="link link-navbar" to="/login">
                      Login
                    </Link>
                  </>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="container pb-4">
        <Col>
          <hr></hr>
        </Col>
      </div>
    </div>
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand><Link to="/">Home Page</Link>  </Navbar.Brand>
    //     <Navbar.Toggle />
    //   <Navbar.Collapse className="justify-content-end">
    //     <Navbar.Text>
    //     {Auth.loggedIn() ? (
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
