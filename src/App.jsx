import { useEffect, useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import './App.scss';

function App() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(true);
  const [step, setStep] = useState(0);
  const [correct, setCorrecr] = useState(0);

  useEffect(() => {
    fetch(`https://63d805d55dbd72324431efe7.mockapi.io/Quse`)
      .then((res) => res.json())
      .then((items) => {
        setItems(items);

        setLoad(false);
      });
  }, []);

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrecr(correct + 1);
    }
  };

  //  if (!load) {
  //   let question = items[step];
  //  }
  let question = items[step];

  return (
    <div className="App">
      {load ? (
        'Идет загрузка'
      ) : !load && step !== items.length ? (
        <Game
          question={question}
          step={step}
          items={items}
          onClickItem={(index) => onClickVariant(index)}
        />
      ) : (
        <Result correct={correct} items={items} />
      )}
    </div>
  );
}
export default App;

// {
//   !load && (
//     <Game question={question} step={step} items={items} onClickItem={() => onClickVariant()} />
//   );
// }

// [
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/197/197561.png",
//   "variants": [
//    "1",
//    "2",
//    "Филиппины"
//   ],
//   "correct": 2
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/197/197562.png",
//   "variants": [
//    "Катар",
//    "5665",
//    "56565"
//   ],
//   "correct": 0
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/197/197586.png",
//   "variants": [
//    "665",
//    "Чили",
//    "5454"
//   ],
//   "correct": 1
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/323/323324.png",
//   "variants": [
//    "665",
//    "3333",
//    "Египет"
//   ],
//   "correct": 2
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/197/197419.png",
//   "variants": [
//    "Индия",
//    "234",
//    "5454"
//   ],
//   "correct": 0
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/197/197576.png",
//   "variants": [
//    "665",
//    "Чехия",
//    "5454"
//   ],
//   "correct": 1
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/323/323302.png",
//   "variants": [
//    "665",
//    "Греция",
//    "5454"
//   ],
//   "correct": 1
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/197/197551.png",
//   "variants": [
//    "665",
//    "e4rr",
//    "Морокко"
//   ],
//   "correct": 2
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/197/197441.png",
//   "variants": [
//    "Нидерланды",
//    "eeee",
//    "5454"
//   ],
//   "correct": 0
//  },
//  {
//   "image": "https://cdn-icons-png.flaticon.com/512/197/197375.png",
//   "variants": [
//    "Китай",
//    "eeee",
//    "5454"
//   ],
//   "correct": 0
//  }
// ]

// return (
//   <div className="App">
//     {(load) ? "Идет загрузка"
// 	 : (!load && step !== items.length)?
// 		 <Game
//       question={question}
//       step={step}
//       items={items}
//       onClickItem={(index) => onClickVariant(index)}
//     />
// 	 :
// 		 <Result correct={correct} items={items} />
// 	 }

//   </div>
// );

// {
//   step !== items.length ? (
//     <Game
//       question={question}
//       step={step}
//       items={items}
//       onClickItem={(index) => onClickVariant(index)}
//     />
//   ) : (
//     <Result correct={correct} items={items} />
//   );
// }
