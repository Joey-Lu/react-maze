export type Cells = Array<Array<any>>;

export interface MazeConstructor {
  new (data: IMazeJson): IMaze;
}

export interface IMaze {
  n: number;
  m: number;
  maze: Cells;
  entranceX: number;
  entranceY: number;
  exitX: number;
  exitY: number;
  visited: Cells;
  path:Cells;
  getCell(i: number, j: number): String;
  isInArea(x: number, y: number): boolean;
}

export interface IMazeJson {
  n: number;
  m: number;
  cells: Cells;
}

export interface IMazeSolver {
  go(x: number, y: number): void;
}
