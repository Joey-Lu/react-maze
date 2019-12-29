import React from 'react';
import './App.css';
import MazeData from "./maze/MazeData";
import classNames from 'classnames';

const App: React.FC = () => {
  const data = new MazeData();
  return (
    <div className="container">
      <div className="wrapper">
      {
        data.maze.map(item =>
        <div>{
          item.map( i =>
        <div className={classNames('cell',{
          'wall': i === '#',
          'road': i ===' '
        })}/>
          )
          }</div>
        )
      }
              
      </div>
    </div>
  );
}

export default App;
