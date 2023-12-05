import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';

const SignInModal = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Container>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">로그인</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>이메일 주소</Form.Label>
                        <Form.Control 
                            type="email"
                            placeholder="이메일 주소를 입력하세요." />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="비밀번호 입력하세요." />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button block variant="primary" type="button">
                    로그인
            </Button>
            </Modal.Footer>
            </Container>
        </Modal>
    )
}

export default SignInModal;