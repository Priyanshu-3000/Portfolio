import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Topbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Priyanshu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#Skill">Skill</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

 
// const Nav = () => {
//     return(
  
      // <><nav>
      //   <div className="name"><h2> Priyanshu</h2></div>
      //   <div><h3 className="contactbtn">Contact  Me</h3></div>
      // </nav><div className="nav">
      //     <div>Home</div>
      //     <div>Service</div>
      //     <div>Skill</div>
      //     <div>Project</div>
      //     <div>Resume</div>
      //     <div>About</div>
      //   </div></>

//     );
// };

// export default Nav;