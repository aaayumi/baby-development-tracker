import React, { useState }from 'react';
import { TodoListItem }from './TodoListItem'
import { FirstQuestion }from './FirstQuestion'

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
const [inputValue, setInputValue] = useState('0');
  return <>
   <div>
     How many months is your baby?
     <input type='number' min='0' value={inputValue}
     onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setInputValue(e.target.value)}}
     />
     </div>
   <TodoListItem todo={todos} />
  </>
}

export default App;
