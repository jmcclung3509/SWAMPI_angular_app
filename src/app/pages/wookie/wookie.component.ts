import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wookie',
  templateUrl: './wookie.component.html',
  styleUrls: ['./wookie.component.css']
})
export class WookieComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.loadWookie()
  }

  loadWookie() {
    this.http.get(`https://swapi.dev/api/planets/1/?format=wookiee`)
      .subscribe((res: any = []) => {
        this.data = res;
        console.log(this.data)

      })
  }

}
