import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  data: any;
  planets: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPlanets()
  }
  loadPlanets() {

    let page = Math.floor(Math.random() * 5);
    this.http
      .get(`https://swapi.dev/api/planets/?page=${page}`)
      .subscribe((res: any) => {
        this.data = res
        this.planets = res.results
        console.log(res)
        console.log(this.planets)
      })
  }

}
