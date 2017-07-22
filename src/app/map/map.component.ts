import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 44.840929;
  lng: number = -93.794512;

  constructor() { }

  ngOnInit() {
  }

}
