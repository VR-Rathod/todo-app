import AppName from "./components/appName";
import AddTodo from "./components/todoComp";
import TodoItems from "./components/todoItems";
import "./App.css";
import { useState } from "react";

function App() {

  const [todoItems , setTodoItems] = useState([]);

  const onNewItem = (itemName , itemDueDate) =>{

    // This method is more PowerFull For Handle Array
    setTodoItems((curruntValue) => [
      ...curruntValue,
      { name: itemName, dueDate: itemDueDate },
      ]
    );
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter( (item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={onNewItem}/>
      <TodoItems items={todoItems} handleDeleteItem={handleDeleteItem}/>
    </center>
  );
}

export default App;
