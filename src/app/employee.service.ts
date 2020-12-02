import { Injectable } from "@angular/core";
import { Employee } from './employee';

@Injectable()

export class EmployeeService{
    emparr:Employee[]=[
        {empno:111,ename:"ABC",salary:1000,desg:'Manager',bonus:0,total:0},
        {empno:112,ename:"XYZ",salary:2000,desg:'Salesman',bonus:0,total:0},
        {empno:113,ename:"PQR",salary:3000,desg:'HOD',bonus:0,total:0},
        {empno:114,ename:"LMN",salary:4000,desg:'Assistant',bonus:0,total:0}
    ];

    calcBonusTot(){
        for(let i=0;i<this.emparr.length;i++){
            this.emparr[i].bonus=(0.10*this.emparr[i].salary);
            this.emparr[i].total=this.emparr[i].salary+this.emparr[i].bonus;
        }
    }

    getAllEmployee():Employee[]{
        return this.emparr;
    }
}