import './App.css';
import React from 'react';
import {useState} from 'react';
const App=()=> {
  let sample_matrix=[];
  for(let i=0;i<3;i++)
  {
    const row = [];
    for(let j=0;j<3;j++)
    {
      row.push("white");
    }
    sample_matrix.push(row);
  }
  const [matrix, setMatrix] = useState(sample_matrix);
  const [clickSequence, setClickSequence] = useState([]);
  const changeColor=(rowIndex,columnIndex)=>
  {
    if (clickSequence.length === 8) {
      let newMatrix = [...matrix];
      clickSequence.forEach((click) => {
        newMatrix[click.row][click.col] = "orange";
      });
      newMatrix[rowIndex][columnIndex] = "orange";
      setMatrix(newMatrix);
      setClickSequence([]);
    }
    else
    {
      const result=clickSequence.find((item)=>
      {
        return item.row===rowIndex&&item.col===columnIndex
      })
      console.log(result);
      if(result===undefined)
      {
        let new_matrix = [...matrix];
        console.log(rowIndex,columnIndex);
        new_matrix[rowIndex][columnIndex]="green";
        setMatrix(new_matrix);
        console.log(new_matrix);
        setClickSequence([...clickSequence, { row: rowIndex, col: columnIndex }]);
      }
    }
  }
  return (
    <div className='App'>
      <h1>Matrix Game</h1>
      {
        matrix.map((item,rowIndex) =>
        {
         return (
          <div className="row">
          {
            item.map((innerItem,columnIndex)=>
            {
              return (
                <div className={innerItem} onClick={()=>{changeColor(rowIndex,columnIndex)}}></div>
              )
            })
          }
          </div>
         )
          })
      }
    </div>
  );
}
export default App;