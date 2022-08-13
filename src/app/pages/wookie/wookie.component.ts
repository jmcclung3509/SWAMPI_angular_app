import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wookie',
  templateUrl: './wookie.component.html',
  styleUrls: ['./wookie.component.css']
})
export class WookieComponent implements OnInit {
  data: any;
  data2: any;
  // data3: any;
  // data4: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.loadWookie()
    this.loadWookiePeople()
    // this.loadWookieStarship()
    // this.loadWookieVehicles()
  }

  loadWookie() {
    this.http.get(`https://swapi.dev/api/planets/1/?format=wookiee`)
      .subscribe((res: any = []) => {
        this.data = res;
        // console.log(this.data)

      })

  }
  loadWookiePeople() {
    this.http.get(`https://swapi.dev/api/people/1/?format=wookiee`)
      .subscribe((res: any) => {
        this.data2 = res;
        console.log(this.data2)
      })

  }

  // loadWookieStarship() {
  //   this.http.get(`https://swapi.dev/api/people/1/?format=wookiee`)
  //     .subscribe((res: any) => {
  //       this.data3 = res;
  //       // console.log(this.data3)
  //     })

  // }
  // loadWookieVehicles() {
  //   this.http.get(`https://swapi.dev/api/vehicles/1/?format=wookiee`)
  //     .subscribe((res: any) => {
  //       this.data4 = res;
  //       // console.log(this.data4)
  //     })

  // }



}
