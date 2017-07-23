import { Component, OnInit } from '@angular/core';
import { PetApiService } from '../shared/pet-api.service';

@Component({
  selector: 'app-petfinder',
  templateUrl: './petfinder.component.html',
  styleUrls: ['./petfinder.component.css']
})
export class PetfinderComponent implements OnInit {

  constructor(private PetApiService: PetApiService) { }

  petProfiles = {};

    getPets() {
      console.log('getting pets');
      this.PetApiService.getPets().subscribe(data => this.petProfiles = data);
    }


  ngOnInit() {
  }

}
