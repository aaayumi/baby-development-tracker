import React, { useState }from 'react';
import { CheckListItem }from './CheckListItem'
import { checks } from './Data'
import './App.css'

const App: React.FC = () => {
const [inputValue, setInputValue] = useState(0);

  return <>
   <div className='question'>
     How many months is your baby?
     <input type='number' min='0' max='12' value={inputValue}
     onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {setInputValue(parseInt(e.target.value))}}
     /> months
     </div>
     {inputValue > 0 && <CheckListItem check={checks} input={inputValue} />}
  </>
}

export default App;
