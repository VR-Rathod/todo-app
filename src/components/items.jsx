function TodoItem({ todoName, todoDate, handleDeleteItem }) {
  return (
    <div className="container">
      <div className="row vg-row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger vg-btn"
            onClick={() => handleDeleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
