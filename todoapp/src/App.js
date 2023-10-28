import { useState } from "react";
import "./App.css"
const App = () => {
  const [inpValue, setInpValue] = useState("");
  const [todoData, setTodoData] = useState([]);
  const addTodoHandler = () => {
    if (inpValue) {
      setTodoData((prev) => [inpValue, ...prev]);
      setInpValue("");
    }
  };
  const editTodoHandler = (i) => {
    let updatedValue = prompt("Enter Updated Value");
    todoData[i] = updatedValue;
    setTodoData([...todoData]);
  };
  const deleteTodoHandler = (index) => {
    console.log(index);
    let data = todoData.filter((e, i) => i !== index);
    setTodoData(data);
  };
  const deleteAllTodoHandler = () => {
    setTodoData([]);
  }
  return (
    <div className="mainContainer">
      <h1>Todo List Using React</h1>
      <div className="parentDiv">
        <section className="container">
          <h1>Todo List</h1>
          <div className="inp">

            <input
              onChange={(e) => setInpValue(e.target.value)}
              placeholder="Enter Todo"
              value={inpValue}
            /><br />
          </div>
          <div className="btn">
            <button className="btn-add" onClick={addTodoHandler}>Add</button>
            <button className="btn-del" onClick={deleteAllTodoHandler}>Delete All</button>
          </div>
          <ul>
            {todoData.length
              ? todoData.map((e, i) => (
                <li key={i}>
                  {e}
                  <div className="btn-li">
                    <button className="editBtn" onClick={() => editTodoHandler(i)}>Edit</button>
                    <button className="delBtn" onClick={() => deleteTodoHandler(i)}>Delete</button>
                  </div>
                </li>
              ))
              : <b>All caught up</b>}
          </ul>
        </section>
      </div>
    </div>
  );
};
export default App;
