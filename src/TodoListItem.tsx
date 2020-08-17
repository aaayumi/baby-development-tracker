import React from 'react';

interface Props {
  todo: Array<Todo>;
}

export const TodoListItem:React.FC<Props> = ({ todo }) => {
  return <ul>{todo.map(todo => <div>
    <input type='checkbox' checked={todo.isCompleted} />
  	<p>{todo.text}</p>
  	</div>)}
  </ul>
};