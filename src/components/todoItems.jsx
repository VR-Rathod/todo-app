import TodoItem from "./items";

const TodoItems = ({ items, handleDeleteItem }) => {
  return (
    <div className="items-container">
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} handleDeleteItem={handleDeleteItem}/>
        ))
      ) : (
        <p>No items to display</p>
      )}
    </div>
  );
};

export default TodoItems;
