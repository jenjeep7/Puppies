import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 44.840929;
  lng: number = -93.794512;
  // zoom: number = 8;
  icon: string = 'https://d30y9cdsu7xlg0.cloudfront.net/png/327992-200.png';

  constructor() { }

  ngOnInit() {
  }

}
