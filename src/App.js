import React, { Component } from 'react'; // Import Component
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">
          Hello world <span aria-label="emoji" role="img">🔥</span>
        </h1>
        <input
          type="text"
          className="new-task"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;