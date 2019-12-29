export type Cells = Array<Array<any>>

// export interface MazeConstructor{
//     new (filename:string): IMaze
// }

export interface IMaze{
    n:number
    m:number    
    maze:Cells
    //getMaze(i:number,j:number):Cells
    isInArea(x:number,y:number):boolean
     
}