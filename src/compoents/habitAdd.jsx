import React, { Component } from "react";

class HabitAdd extends Component {
  state = {
    habitName: "",
  };

  handleInput = (event) => {
    this.setState({ habitName: event.target.value });
  };

  onAddBtn = () => {
    this.props.onAdd(this.state.habitName);
  };

  render() {
    return (
      <section className="habitAdd">
        <input
          type="text"
          placeholder="Habit"
          className="habitAddInput"
          onChange={this.handleInput}
        />
        <button className="habitAddBtn" onClick={this.onAddBtn}>
          ADD
        </button>
      </section>
    );
  }
}

export default HabitAdd;
