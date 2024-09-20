import "./App.css";
import { Component } from "react";
import Modal from "./components/Modal/Modal";
import PreOrderSection from "./components/PreOrderSection/PreOrderSection";
import Timer from "./components/Timer/Timer";

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
        <PreOrderSection openModal={this.openModal} />
        {this.state.isHidden === false ? (
          <Modal closeModal={this.closeModal} />
        ) : null}
        <Timer />
      </>
    );
  }
}

export default App;
