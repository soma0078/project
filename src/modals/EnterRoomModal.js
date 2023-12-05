import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';

const EnterRoomModal = ({ show, onHide }) => {
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
                    <Modal.Title id="contained-modal-title-vcenter">방</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>방 이름</Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="방 이름을 입력하세요." />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control 
                                type="password"
                                placeholder="비밀번호를 입력하세요." />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block variant="primary" type="button">
                            참가하기
                    </Button>
                </Modal.Footer>
            </Container>
        </Modal>
    )
}

export default EnterRoomModal;