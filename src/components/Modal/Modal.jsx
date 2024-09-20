import styled from "styled-components";

const Backdrop = styled.div`
  overflow: hidden;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #0000003e;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 11;
`;

const ModalStyles = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 311px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #f8f1e8;
`;

const ModalTitle = styled.h2`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 0;
`;

const Form = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CloseModalBtn = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 5px;
  right: 5px;

  *:hover {
    cursor: pointer;
  }
`;

const InputStyles = styled.input`
  border: none;
  border-radius: 10px;
  padding: 5px;
`;

const SendModalBtn = styled.button`
  border-radius: 15px;
  border: none;
  padding: 10px;
  color: #f4e5d2;
  background-color: #818085;
`;

const Modal = ({ closeModal }) => (
  <Backdrop>
    <ModalStyles>
      <ModalTitle>Залиште заявку</ModalTitle>
      <CloseModalBtn type="button" onClick={closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
      </CloseModalBtn>
      <Form>
        <InputStyles type="text" placeholder="Name" />
        <InputStyles type="tel" placeholder="Phone number" />
        <SendModalBtn type="submit">Відправити</SendModalBtn>
      </Form>
    </ModalStyles>
  </Backdrop>
);

export default Modal;
