import { Cells } from "../type";

export function createCells(x:number,y:number,val:any = ''):Cells{
    return Array(x)
    .fill(val)
    .map(() => Array(y).fill(val))
}