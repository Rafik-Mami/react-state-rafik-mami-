import React from "react";
import "./App.css";
import react from "./react.jpg";

class App extends React.Component {
  state = {
    Person: {
      fullname: "rafik mami",
      profession: "fullstack js developer",
      bio: "welcome to react js",
    },
    show: false,
    count: 0,
  };
  componentDidMount() {
    this.interval = setInterval(this.clicking, 1000);
  }

  clicking = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  showProfile = () => this.setState({ show: true });

  render() {
    return (
      <div>
        <h1>counter</h1>
        <h1>{this.state.count}</h1>

        {this.state.show ? (
          <div style={{ backgroundColor: "blue", textAlign: "center" }}>
            <h1 style={{ backgroundColor: "red" }}>profile</h1>
            <h2>fullname is :{this.state.Person.fullname}</h2>
            <h2>profession is :{this.state.Person.profession}</h2>
            <p style={{ fontSize: "20px" }}>bio is:{this.state.Person.bio}</p>
            <img src={react} alt="no image"></img>
          </div>
        ) : null}
        <button onClick={this.showProfile}>show profile</button>
      </div>
    );
  }
}

export default App;
