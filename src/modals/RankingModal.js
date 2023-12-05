import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';

const RankingModal = ({ show, onHide }) => {
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
                    <Modal.Title id="contained-modal-title-vcenter">랭킹 보기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>myId: 99</h4>
                    <p>ididid: 1</p>
                    <p>dididi: 2</p>
                    <p>didid: 3</p>
                    <p>------</p>
                </Modal.Body>
            </Container>
        </Modal>
    )
}

export default RankingModal;