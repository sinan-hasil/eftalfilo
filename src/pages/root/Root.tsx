import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import logo from "../../images/Koyu Logo .png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./root.css"
const Root = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img src={logo} width={"90px"} className="logo" alt="Site Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto gap-5">
                <Nav.Link as={Link} to={"/"} className="d-none d-sm-block text-muted">
                  Anasayfa
                </Nav.Link>
                <NavDropdown className="d-none d-sm-block text-muted" title="Araçlarımız" id="basic-nav-dropdown">
                  <NavDropdown.Item className="text-muted" href="#action/3.1">
                    <Nav.Link as={Link} to={"/cars/#nav-home-tab"} className="text-center">
                      Binek Araç
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Nav.Link href={"/cars/#nav-profile-tab"} className="text-center">
                      Hafif Ticari
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      Ticari
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      Arazi
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      VİP
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      İş Makinası
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href={"/#job-description"} className="d-none d-sm-block text-muted">Hakkımızda</Nav.Link>
                <Nav.Link className="d-none d-sm-block text-muted" as={Link} to={"/contact"}>
                  İletişim
                </Nav.Link>
                <Nav.Link className="d-block d-sm-none">
                  <Button variant="danger" className="d-flex justify-content-center align-items-center py-2" onClick={handleShow}>
                    <RxHamburgerMenu />
                  </Button>
                </Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="resp-nav" style={{ display: "none" }}>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul style={{
              listStyle: "none"}}>
              <li style={{padding: "10px 0"}}>
                <Nav.Link as={Link} to={"/"}>Anasayfa</Nav.Link>
              </li>
              <li style={{padding: "10px 0"}}>
              <NavDropdown title="Araçlarımız" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      Binek Araç
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      Hafif Ticari
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      Ticari
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      Arazi
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      VİP
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <Nav.Link as={Link} to={"/cars"} className="text-center">
                      İş Makinası
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li style={{padding: "10px 0"}}><Nav.Link as={Link} to={"#job-description"}>Hakkımızda</Nav.Link></li>
              <li style={{padding: "10px 0"}}><Nav.Link as={Link} to={"/contact"}>İletişim</Nav.Link></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <Outlet />

      <Footer />
    </>
  );
};

export default Root;
