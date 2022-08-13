import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() personInfo: any;
  searchText: any;


  constructor() { }

  ngOnInit(): void {
  }

}
