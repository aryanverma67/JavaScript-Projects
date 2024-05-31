import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [tododata, setTododata] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();
      console.log(data);
      setTododata(data.todos); // Set the state with the todos array
    };
    fetchData();
  }, []);

  const handleAddClick = () => {
    const newTodo = inputRef.current.value;
    if (!newTodo.trim()) return; // Prevent adding empty todos
    const newTodoItem = {
      id: tododata.length + 1,
      todo: newTodo,
      completed: false,
    };
    setTododata([...tododata, newTodoItem]);
  };

  const handleEditClick = (id, todo) => {
    setIsEditing(true);
    setCurrentTodoId(id);
    inputRef.current.value = todo;
  };

  const handleUpdateClick = () => {
    const updatedTodo = inputRef.current.value;
    setTododata(
      tododata.map((item) =>
        item.id === currentTodoId ? { ...item, todo: updatedTodo } : item
      )
    );
    setIsEditing(false);
    setCurrentTodoId(null);
    inputRef.current.value = ""; // Clear the input field after updating the todo
  };

  return (
    <>
      <div>
        <h1 className="head">Todo Application</h1>
        <div>
          <input
            type="text"
            className="input"
            ref={inputRef}
            placeholder="Enter your todos"
          />
          {isEditing ? (
            <button className="button" onClick={handleUpdateClick}>Update</button>
          ) : (
            <button className="button" onClick={handleAddClick}>Add</button>
          )}
        </div>
        <ol className="line">
          {tododata.map((item) => (
            <li key={item.id}>
              {item.todo}
              <button className="edit" onClick={() => handleEditClick(item.id, item.todo)}>
                Edit
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
