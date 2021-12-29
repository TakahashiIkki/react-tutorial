import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      // controlled component
      <form>
        <label>
          Is Going:
          <input
            name="isGoing"
            type="checkbox"
            value={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number of guests:
          <input
            type="number"
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() {
  return (
    <div>
      <NameForm />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
