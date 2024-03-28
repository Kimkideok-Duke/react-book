import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
            <Navbar  bg="dark" variant="dark">
              <Container fluid>
                <Link to="/home" className="navbar-brand">CINEMA</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    {/* <Link to="/JoinForm" className="nav-link">회원가입</Link> */}
                    {/* <Link to="/" className="nav-link">로그인</Link> */}
                    {/* <Link to="/logOutForm" className="nav-link">로그아웃</Link> */}
                    {/* <Link to="/saveForm" className="nav-link">글쓰기</Link> */}
                    <NavDropdown title="메뉴" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3"><Link to="/JoinForm"> 회원가입</Link></NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                      <Link to="/">로그인</Link>
                      </NavDropdown.Item>
                      {/* <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item> */}
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <br/>
          </>
          );
};

export default Header;