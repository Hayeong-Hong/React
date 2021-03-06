import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBultTodos(){
  const array = [];
  for(let i =1; i <=2500; i+=1){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked:false
    })
  }
  return array;
}

function AppUseState() {
  const [todos, setTodos] = useState(createBultTodos);

  const nextId = useRef(todos.length+1);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        checked: false,
      };
      setTodos( (todos) => todos.concat(todo));
      nextId.current += 1;
    },
    [],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos)=>todos.filter((todo) => todo.id !== id));
    },
    [],
  );

  const onChecked = useCallback(
    (id) => {
      setTodos( (todos)=>
        todos.map((todo) =>
        //불변성을 지키기 위해 원본의 값을 변경하지 않고 todo를 복제한 새로운 todo객체를 만들어서 리턴
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onChecked={onChecked} />
      {/* {console.log(todos.length, nextId.current)} */}
    </TodoTemplate>
  );
}

export default AppUseState;
