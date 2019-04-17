
export class Position {
    _id: String;
    PositionName: String;
    PositionDescription: String;
    PositionBaseSalary: number;
    __v: number;

    constructor(){
        this._id = "";
        this.PositionName = "";
        this.PositionDescription = "";
        this.PositionBaseSalary = 0;
        this.__v = 0;
    }
}