import React from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button}  from 'react-bootstrap'


export const NavTabs = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Harbour Harrison</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://hharrison3.github.io/homework2/Assets/Images/Harbour%20Harrison_Resume_PDF.pdf" target="_blank" rel="noreferrer">Resume</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/harbour-harrison-80948a183/" target="_blank" rel="noreferrer">Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/hharrison3" target="_blank" rel="noreferrer">Github</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}





// function Navbar() {
//   // We'll go into the Hooks API later, for now, we are just using some code
//   // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
//   // This allows the component to check the route any time the user uses a link to navigate.
//   const location = useLocation();

//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
//           About
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/contact"
//           className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
//         >
//           Contact
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/portfolio"
//           className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
//         >
//           Portfolio
//         </Link>
//       </li>
//     </ul>
//   );
// }
// export default Navb;

// export const Nav = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">Harbour Harrison</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="Assets/Images/Harbour Harrison_Resume_PDF.pdf" target="_blank">Resume <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item active">
//             <a className="nav-link" href="https://www.linkedin.com/in/harbour-harrison-80948a183/" target="_blank" rel="noreferrer">Linkedin</a>
//           </li>
//           <li className="nav-item active">
//             <a className="nav-link" href="https://github.com/hharrison3" target="_blank" rel="noreferrer">GitHub</a>
//           </li>
//           <li className="nav-item active dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Pages
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item" href="/about">About Me</a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="https://hharrison3.github.io/homework2/contact.html">Contact</a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="https://hharrison3.github.io/homework2/portfolio.html">Portfolio</a>
//             </div>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>
//       </div>
//     </nav>
//   )
// }    