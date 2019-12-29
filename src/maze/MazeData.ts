import { IMaze, Cells } from "../type";
import MazeJson from '../maze.json';

export default class MazeData implements IMaze{
    n: number;
    m: number;
    maze: Cells;

    constructor(){
        this.n = MazeJson.n;
        this.m= MazeJson.m;
        this.maze = Array(this.n).fill('').map(()=>Array(this.m).fill(''))

        for(let i =0; i<this.n;i++){
            let row = MazeJson.cells[i];
            for(let j=0;j<this.m;j++){
                this.maze[i][j] = row[j];
            }            
        }
    }

    get Maze(){
        return this.maze;
    }
    
    // getMaze(i: number, j: number): string{
    //     if(!this.isInArea(i,j)){
    //         throw new Error('i or j is out of index in funcion getMaze!')
    //     }
    //     return this.maze[i][j];
    // }
    isInArea(x: number, y: number): boolean {
        return x>=0 && x< this.n && y<this.m;
    }

}