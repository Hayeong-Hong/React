import { useCallback, useReducer, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBultTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i += 1) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'CHECKED':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

function App() {
  //초기상태를 undefined로 설정하고, 세 번째 파라미터에 초기상태를 만들어주는 함수 호출
  //그러면 처음 렌더링 될 때만 초기상태를 만들어주는 함수를 호출함
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBultTodos);

  const nextId = useRef(todos.length + 1);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onChecked = useCallback((id) => {
    dispatch({ type: 'CHECKED', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onChecked={onChecked} />
      {/* {console.log(todos.length, nextId.current)} */}
    </TodoTemplate>
  );
}

export default App;
