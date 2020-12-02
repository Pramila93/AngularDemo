export class Employee{
    empno:number;
    ename:string;
    salary:number;
    desg:string;
    bonus:number;
    total:number;

    constructor(id?:number,name?:string,sal?:number,desg?:string,bon?:number,tot?:number){
        this.empno=id;
        this.ename=name;
        this.salary=sal;
        this.desg=desg;
        this.bonus=bon;
        this.total=tot;
    }
}