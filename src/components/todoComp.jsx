import { useRef } from "react";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row vg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>

        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>

        <div className="col-2">
          <button className="btn btn-success vg-btn">Add Note</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
