import React from 'react'


function Result({ correct, items }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/6778/6778954.png" />
      <h2>
        Вы отгадали {correct} из {items.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}
export default Result;