// components/Layout.js
import React from 'react';
import Link from 'next/link';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/auth/signin');
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">TodoApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
              <Link href="/todos" passHref><Nav.Link>Todos</Nav.Link></Link>
              <Link href="/about" passHref><Nav.Link>About Us</Nav.Link></Link>
            </Nav>
            <Nav>
              {auth.currentUser ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <Link href="/auth/signin" passHref><Nav.Link>Sign In</Nav.Link></Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {children}
      </Container>
    </>
  );
};

export default Layout;