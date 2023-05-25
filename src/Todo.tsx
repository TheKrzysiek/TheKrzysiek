import React from 'react';

interface TodoProps {
  todo: {
    id: string;
    name: string;
    state: boolean;
  };
  actionTD: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, actionTD }) => {

  const handleToggle = () => {
    actionTD(todo.id);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.state} onChange={handleToggle} />
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;