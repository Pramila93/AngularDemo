import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  @Input() emp:Employee[];
  @Input() flag:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
