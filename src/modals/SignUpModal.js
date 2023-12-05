import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';

const SignUpModal = ({ show, onHide }) => {
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
          <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>이름</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="이름을 입력하세요." />
              </Form.Group>
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
                  placeholder="비밀번호를 입력하세요." />
              </Form.Group>

              <Form.Group>
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control 
                  type="password"
                  placeholder="비밀번호를 확인하세요." />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button block variant="primary" type="button">
                가입하기
          </Button>
        </Modal.Footer>
        </Container>
      </Modal>
    )
}

export default SignUpModal;