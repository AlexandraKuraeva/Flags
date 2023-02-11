import { useState } from 'react';
import React from 'react';

function Game({ question, step, items, onClickItem}) {
  const percentage = Math.round((step / items.length) * 100);
  
	

	let onClickVariant=(index)=>{
		onClickItem(index);	
	}
	

  return (
    <div className="flag">
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>

      <img src={question.image} />
      <ul>
        {question.variants.map((item, index) => (
          <li key={item} onClick={() => onClickVariant(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Game;












{
  /* <li key={item} onClick={() => onClickVariant(index)}>
            {item}
          </li> */
}
