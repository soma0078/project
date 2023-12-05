import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';

const ManualModal = ({ show, onHide }) => {
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
                    <Modal.Title id="contained-modal-title-vcenter">게임 안내</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>게임 안내글</h4>
                <p>게임 안내글 게임 안내글 게임 안내글 게임 안내글 게임 안내글 게임 안내글 
                    게임 안내글 게임 안내글 게임 안내글 게임 안내글 게임 안내글 게임 안내글 
                    게임 안내글 게임 안내글 게임 안내글 게임 안내글 게임 안내글 게임 안내글 </p>
                </Modal.Body>
            </Container>
        </Modal>
    )
}

export default ManualModal;