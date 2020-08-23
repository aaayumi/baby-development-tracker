import React from 'react';

interface Props {
  check: Array<Check>;
  input: Number;
}

export const CheckListItem:React.FC<Props> = ({ check, input }) => {
	const checkList = check.filter(obj => { return obj.month === input })
  return <ul>
   {checkList[0].text.map(check => 
   	 <li key={check}>
   	 <input type='checkbox' />
   	 {check}
   	</li>)}
  	</ul>
};