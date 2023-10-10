import React from "react";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import Nav from "react-bootstrap/Nav";
import { Button, Navbar, NavbarBrand } from "react-bootstrap";
import logo from "../../images/coffee shop-1.png";
import { HashLink as Link } from "react-router-hash-link";

function Navbars() {
  return (
    <>
      <div>
        <Navbar gab={3} className="fixed-top bg-dark">
          <NavbarBrand>
            <img src={logo} height={50} width={50} className="logo" />
            <h3 className="logo_hearder">COFFEE SHOP</h3>
          </NavbarBrand>

          <Nav className="mx-auto navlist">
            <Link to="#home" smooth>
              <Button
                type="button"
                variant="secondary"
                className="me-5 navlist-Animate rounded-pill btn-outline-warning text-light botton_list"
              >
                Home
              </Button>
            </Link>

            <Link to="#services" smooth>
              <Button
                type="button"
                variant="secondary"
                className="me-5 navlist-Animate rounded-pill botton_list"
              >
                Services
              </Button>
            </Link>

            <Link to="#about" smooth>
              <Button
                type="button"
                variant="secondary"
                className="me-5 navlist-Animate rounded-pill botton_list"
              >
                About Us
              </Button>
            </Link>

            <Link to="#news" smooth>
              <button
                type="button"
                className="btn navlist-Animate btn-outline me-5 rounded-pill botton_list position-relative"
              >
                News
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  99+
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>

            <Link to="#contact" smooth>
              <Button
                type="button"
                variant="secondary"
                className="me-4 navlist-Animate rounded-pill botton_list"
              >
                Contact Us
              </Button>
            </Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default Navbars;
