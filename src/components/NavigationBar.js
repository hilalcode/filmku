import { Navbar, Container, Nav } from "react-bootstrap"

const Navigation = () => {
    return(
        <div>
          <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">MYFILMS</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                </Nav>
                
            </Container>
          </Navbar>
        </div>
      
    )
}
export default Navigation