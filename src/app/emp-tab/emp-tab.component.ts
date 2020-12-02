import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-tab',
  templateUrl: './emp-tab.component.html',
  styleUrls: ['./emp-tab.component.css']
})
export class EmpTabComponent implements OnInit {
  @Input() emp:Employee[];
  @Input() flag:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
