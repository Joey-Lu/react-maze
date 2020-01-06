import React, { useState, useEffect } from 'react';
import './App.css';
import MazeData from "./maze/MazeData";
import classNames from 'classnames';
import mazeJson from './maze.json';
import { MazeConstructor, IMaze } from './type';
import { direction } from './constant';

const App: React.FC = () => {
  const Maze: MazeConstructor = MazeData;
  const maze: IMaze = new Maze(mazeJson);
  const [data, setData] = useState(maze.maze);
  const [path, setPath] = useState(maze.path);

  const handleClick = (): void => {
    maze.visited[maze.entranceX][maze.entranceY] = 1;
    go(maze.entranceX, maze.entranceY);
    const path = Array.from(data);
    for(let i =0;i<path.length;i++){
      for(let j =0;j<path.length;j++){
        if(path[i][j] === ' '){
          if(maze.visited[i][j] === 1)
            path[i][j] = 1
        }
      }
    }
    setData(path);
  }

  const go = (x: number, y: number): boolean => {
    if (x === maze.exitX && y === maze.exitY) return true;
    for (let i = 0; i < 4; i++) {
      let newX = x + direction[i][0];
      let newY = y + direction[i][1]; 
      if (maze.isInArea(newX, newY) && maze.getCell(newX, newY) === MazeData.ROAD && maze.visited![newX][newY] === 0) {
        maze.visited[newX][newY] = 1;
        if(go(newX, newY)) return true;
        maze.visited[newX][newY] = 0;
      }
    }
    return false;
  }

  return (
    <div className="container">
      <div className="wrapper">
        {
          data.map((rows, i) =>
            // to remove the gap between divs
            <div key={i} style={{ fontSize: 0 }}>{
              rows.map((col, k) => {
                return (<div key={k} className={classNames('cell', {
                  'wall': data[i][k] === '#',
                  'road': data[i][k] === ' ',
                  'path': data[i][k] === 1,
                })} />)
              })
            }</div>
          )
        }
      </div>
      <button onClick={handleClick}>Solve</button>
    </div>
  );
}

export default App;
