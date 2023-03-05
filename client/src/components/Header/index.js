import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container> 
        <Navbar.Brand><Link to="/">Home Page</Link>  </Navbar.Brand>
        <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text> 
        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/Mylist">
              Mylist
            </Link>
            <Link to="/About">
              About
            </Link>
            <Link to="/signup">
              Signup
            </Link>
          </>
        )}
        </Navbar.Text>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header;
