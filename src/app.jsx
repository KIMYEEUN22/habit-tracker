import React, { PureComponent } from "react";
import "./app.css";
import HabitAdd from "./compoents/habitAdd";
import Habits from "./compoents/habits";
import Header from "./compoents/header";

class App extends PureComponent {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = --habit.count;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (habit) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: habit, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Header
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <HabitAdd onAdd={this.handleAdd} />
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
