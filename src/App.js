import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRaining: false // Initially, it's not raining
    };
  }

  render() {
    const { isRaining } = this.state;
    return (
      <div>
        <h1>Is it raining?</h1>
        {isRaining ? <p>Yes</p> : <p>No</p>}
      </div>
    );
  }
}

export default App;
