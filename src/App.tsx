import React, { useState }from 'react';
import { TodoListItem }from './TodoListItem'

const todos: Todo[] = [ 
{month: 1, text: ['bla','bla']},
{month: 2, text: ['bla']}, 
{month: 3, text: ['bla']},
{month: 4, text: ['bla']},
{month: 5, text: ['bla']},
{month: 6, text: ['bla']},
{month: 7, text: ['bla']},
{month: 8, text: ['bla']},
{month: 9, text: ['bla']},
{month: 10, text: ['bla']},
{month: 11, text: ['bla']},
{month: 12, text: ['bla']},];

const App: React.FC = () => {
const [inputValue, setInputValue] = useState(0);

  return <>
   <div>
     How many months is your baby?
     <input type='number' min='0' max='12' value={inputValue}
     onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setInputValue(parseInt(e.target.value))}}
     />
     </div>
     {inputValue > 0 && <TodoListItem todo={todos} input={inputValue} />}
  </>
}

export default App;
