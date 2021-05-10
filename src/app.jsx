import React, { Component } from "react";
import "./app.css";
import HabitAdd from "./compoents/habitAdd";
import Habits from "./compoents/habits";
import Header from "./compoents/header";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habit });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = --habits[index].count;
    habits[index].count = count <= 0 ? 0 : count;
    this.setState({ habit });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAddHabit = (habit) => {
    const habits = [...this.state.habits];
    habits.push({ id: habits.length + 1, name: habit, count: 0 });
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = [...this.state.habits];
    habits.map((item) => (item.count = 0));
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Header
          count={this.state.habits.filter((item) => item.count > 0).length}
        />
        <HabitAdd onAdd={this.handleAddHabit} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <button className="reset" onClick={this.handleReset}>
          ResetAll
        </button>
      </>
    );
  }
}

export default App;
