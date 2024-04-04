import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Layout= ({children})=>{
    return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
          <Navbar.Brand>React Nest CRUD Sample </Navbar.Brand>
      </Navbar>
      <Container>{children}</Container>
    </>
    );
}

export default Layout;