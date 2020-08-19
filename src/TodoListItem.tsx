import React from 'react';

interface Props {
  todo: Array<Todo>;
  input: Number;
}

export const TodoListItem:React.FC<Props> = ({ todo, input }) => {
	const checkList = todo.filter(obj => { return obj.month === input })
  return <ul>
   {checkList[0].text.map(todo => 
   	 <li key={todo}>
   	 <input type='checkbox' />
   	 <p>{todo}</p>
   	</li>)}
  	</ul>
};