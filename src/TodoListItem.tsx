import React from 'react';

interface Props {
  todo: Array<Todo>;
  input: Number;
}

export const TodoListItem:React.FC<Props> = ({ todo, input }) => {
	const checkList = todo.filter(obj => { return obj.month === input })
  return <div>
    <input type='checkbox' />
  	<p>{checkList[0].text}</p>
  	</div>
};