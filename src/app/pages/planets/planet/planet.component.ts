import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  @Input() planetInfo: any

  constructor() { }

  ngOnInit(): void {
  }

}
