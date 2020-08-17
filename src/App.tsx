import React from 'react';
import { TodoListItem }from './TodoListItem'

const todos: Todo[] = [{
  text: 'Lifts head when on his tummy',
  isCompleted: false
},{
  text: 'Responds to sound',
  isCompleted: false
},
{
  text: 'Stares at faces',
  isCompleted: false
},
{
  text: 'Turns head towards light',
  isCompleted: false
},
{
  text: 'Can see black-and-white patterns',
  isCompleted: false
},
]

const App: React.FC = () => {
  return <>
   <TodoListItem todo={todos} />
  </>
}

export default App;
