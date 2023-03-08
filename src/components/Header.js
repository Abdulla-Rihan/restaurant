import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        
      
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="http://tonicocafe.com/assets/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Tonico Café
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header