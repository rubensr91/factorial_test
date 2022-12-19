import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="ms-4" href="/">
        Home
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/addNewMetric">Add new Metric</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
