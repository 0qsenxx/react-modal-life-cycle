import iphone from "../../imgs/iphone16.webp";
import styled from "styled-components";

const IphoneImg = styled.img`
  width: 100%;
  max-height: 100%;
`;

const IphoneTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  /* margin-left: auto;
  margin-right: auto; */
`;

const PreOrderBtn = styled.button`
  width: 250px;
  padding: 15px;
  border-radius: 20px;
  border: none;
  font-size: 17px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #684939;
  background-color: #d5c5b8;
`;

const PreOrderSection = ({ openModal }) => (
  <section>
    <IphoneImg src={iphone} alt="new-iphone-16" />
    <IphoneTitle>Встигни зробити передзамолевлення!</IphoneTitle>
    <PreOrderBtn type="button" onClick={openModal}>
      Зробити передзавлення
    </PreOrderBtn>
  </section>
);

export default PreOrderSection;
