import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp:Employee[];
  flag:boolean;
  //flag1:boolean;
  constructor(private empserv:EmployeeService) { }

  ngOnInit(): void {
    this.flag=undefined;
   // this.flag1=false;
    this.empserv.calcBonusTot();
    this.emp=this.empserv.getAllEmployee();
  }

  onShowBtn(){
    
    if(!this.flag){
      this.flag=true;
    }
    else{
      this.flag=false;
    }
    
  }

  
}
