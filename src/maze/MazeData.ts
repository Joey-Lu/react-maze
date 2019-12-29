import { IMaze, Cells, IMazeJson } from "../type";
import { createCells } from "../utils/utils";

export default class MazeData implements IMaze {
  public static ROAD = " ";
  public static WALL = "#";
  n: number;
  m: number;
  maze: Cells;
  entranceX: number;
  entranceY: number;
  exitX: number;
  exitY: number;
  visited: Cells;
  path: Cells;

  constructor(data: IMazeJson) {
    this.n = data.n;
    this.m = data.m;
    this.maze = createCells(this.n, this.m); //create an empty two-dimensional array

    this.visited = createCells(this.n, this.m, false);

    this.path = createCells(this.n, this.m, false);

    // populate maze array with # or whitespace
    for (let i = 0; i < this.n; i++) {
      let row = data.cells[i];
      for (let j = 0; j < this.m; j++) {
        this.maze[i][j] = row[j];
      }
    }

    //set entrance and exit point
    this.entranceX = 1;
    this.entranceY = 0;
    this.exitX = this.n - 2;
    this.exitY = this.m - 1;
  }

  get Maze(): Cells {
    return this.maze;
  }

  get Visited(): Cells {
    return this.visited;
  }

  get Path(): Cells {
    return this.path;
  }

  get EntranceX(): number {
    return this.entranceX;
  }

  get EntranceY(): number {
    return this.entranceY;
  }
  get ExitX(): number {
    return this.exitX;
  }
  get ExitY(): number {
    return this.exitY;
  }

  getCell(i: number, j: number): string {
    if (!this.isInArea(i, j)) {
      throw new Error("i or j is out of index in funcion getMaze!");
    }
    return this.maze[i][j];
  }

  isInArea(x: number, y: number): boolean {
    return x >= 0 && x < this.n && y >= 0 && y < this.m;
  }
}
