import React, { Component } from "react";

class HabitAdd extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    //this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="habitAdd" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          placeholder="Habit"
          className="habitAddInput"
        />
        <button className="habitAddBtn">ADD</button>
      </form>
    );
  }
}

export default HabitAdd;
