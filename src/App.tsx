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
  const [path, setPath] = useState(maze.maze);

  const handleClick = (): void => {
    go(maze.entranceX, maze.entranceY);
  }

  const go = (x: number, y: number): void => {
    if (!maze.isInArea(x, y)) throw new Error('x or y is not inside the maze')
    maze.visited![x][y] = true;
    maze.path[x][y] = true;
    maze.maze[x][y] = 1;
    if (x === maze.exitX && y === maze.exitY) return;
    for (let i = 0; i < 4; i++) {
      let newX = x + direction[i][0];
      let newY = y + direction[i][1];
      if (maze.isInArea(newX, newY) && maze.getCell(newX, newY) === MazeData.ROAD && !maze.visited![newX][newY]) {
        go(newX, newY)
      }
    }
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
                  'wall': col === '#',
                  'path': col === 1,
                  'road': col === ' ',
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
