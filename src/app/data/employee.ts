import { Position } from './position';

export class Employee {
    _id: String;
    FirstName: String;
    LastName: String;
    AddressStreet: String;
    AddressState: String;
    AddressCity: String;
    AddressZip: String;
    PhoneNum: String;
    Extension: number;
    Position: Position;
    HireDate: String;
    SalaryBonus: number;
    __v: number;

    constructor() {
        this._id = "";
        this.FirstName = "";
        this.LastName = "";
        this.AddressStreet = "";
        this.AddressState = "";
        this.AddressCity = "";
        this.AddressZip = "";
        this.PhoneNum = "";
        this.Extension = 0;
        this.Position = new Position();
        this.HireDate = "";
        this.SalaryBonus = 0;
        this.__v = 0;
    }
}