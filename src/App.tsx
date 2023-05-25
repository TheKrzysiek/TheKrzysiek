import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import Button from "./Button";
import WriteB from "./WriteB";
import { v4 as uuidv4 } from 'uuid';

interface ToDo {
  id: string;
  name: string;
  state: boolean;
}

function App(): JSX.Element {
  const LOCAL_STORAGE_KEY = 'todoApp.todo';

  const [todos, setTodos] = useState<ToDo[]>([]);
  const toDoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log("Reset: " + data);
    if (data != null && data.length > 3) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAdd(name: string): void {
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, state: false }];
    });
  }

  function toggleToDo(id: string): void {
    const newVal = [...todos];
    const todo = newVal.find(todo => todo.id === id);
    if (todo) {
      todo.state = !todo.state;
      setTodos(newVal);
    }
  }

  function clearToDo(): void {
    const newToDo = todos.filter(todo => !todo.state);
    setTodos(newToDo);
  }

  return (
    <>
      <h1 className="text-lg font-bold text-gray-800">To do list app</h1>
      <WriteB bname="Add" action={handleAdd} />
      <Button action={clearToDo} name="Clear done" />
      <ToDoList todos={todos} actionTD={toggleToDo} />
      <p className="danger">AAAAAAAAAAAAAAAA</p>
      <p className="external">IDSFAIUHDSFIUHDSIFUH</p>
      <button className="button-basic">BASIC</button>
      <button className="button-report">report</button>
      <button className="button-submit">submit</button>
    </>
  );
}

export default App;