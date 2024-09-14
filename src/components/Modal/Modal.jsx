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
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <g clip-path="url(#clip0_5840_5367)">
            <path
              d="M19.7904 6.67773L18.3216 5.20898L12.4987 11.0319L6.67578 5.20898L5.20703 6.67773L11.0299 12.5007L5.20703 18.3236L6.67578 19.7923L12.4987 13.9694L18.3216 19.7923L19.7904 18.3236L13.9674 12.5007L19.7904 6.67773Z"
              fill="#84A6C2"
            />
          </g>
          <defs>
            <clipPath id="clip0_5840_5367">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
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
