import React, { memo } from "react";

const HabitAdd = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value = "";
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="habitAdd" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Habit"
        className="habitAddInput"
      />
      <button className="habitAddBtn">ADD</button>
    </form>
  );
});

export default HabitAdd;
