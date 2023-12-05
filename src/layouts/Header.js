import React,{ useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal';
import SignInModal from '../modals/SignInModal';
import './Header.css';

const Header = () => {
    const [SignUpModalOn, setSignUpModalOn] = useState(false);
    const [SignInModalOn, setSignInModalOn] = useState(false);
    return (
        <>
            <SignUpModal show={SignUpModalOn} onHide={() => setSignUpModalOn(false)} />
            <SignInModal show={SignInModalOn} onHide={() => setSignInModalOn(false)} />
            <header>
                <Navbar expand="lg" bg="light">
                    <Container>
                        <Navbar.Brand>개굴작</Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav style={{marginLeft:"auto"}}>
                                <Nav.Link>
                                    <Button variant="primary" onClick={() => setSignInModalOn(true)}>로그인</Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Button variant="secondary" onClick={() => setSignUpModalOn(true)}>회원가입</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header;