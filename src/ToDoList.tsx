import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

interface TodoItem {
  id: string;
  name: string;
  state: boolean;
}

interface Props {
  todos: TodoItem[];
  actionTD: (id: string) => void;
}

const propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  actionTD: PropTypes.func.isRequired,
};

const ToDoList: React.FC<Props> = ({ todos, actionTD }) => {
  const todosL = todos.map((todo) => (
    <Todo key={todo.id} todo={todo} actionTD={actionTD} />
  ));

  return <div>{todosL}</div>;
};

ToDoList.propTypes = propTypes;

export default ToDoList;