import "./App.css";
import { Component } from "react";
import styled from "styled-components";
import Modal from "./components/Modal/Modal";
import iphone from "./imgs/iphone16.webp";

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

class App extends Component {
  state = {
    isHidden: true,
  };

  componentDidMount = () => {
    if (localStorage.getItem("isHidden")) {
      this.setState({ isHidden: JSON.parse(localStorage.getItem("isHidden")) });
    } else {
      localStorage.setItem("isHidden", JSON.stringify(this.state.isHidden));
    }
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.isHidden !== this.state.isHidden) {
      localStorage.setItem("isHidden", JSON.stringify(this.state.isHidden));
    }
  };

  openModal = () => {
    this.setState({ isHidden: false });
  };

  closeModal = () => {
    this.setState({ isHidden: true });
  };

  render() {
    return (
      <>
        <IphoneImg src={iphone} alt="new-iphone-16" />
        <IphoneTitle>Встигни зробити передзамолевлення!</IphoneTitle>
        <PreOrderBtn type="button" onClick={this.openModal}>
          Зробити передзавлення
        </PreOrderBtn>
        {this.state.isHidden === false ? (
          <Modal closeModal={this.closeModal} />
        ) : null}
      </>
    );
  }
}

export default App;
