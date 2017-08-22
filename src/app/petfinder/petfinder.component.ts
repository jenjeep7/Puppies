import { Component, OnInit } from '@angular/core';
import { PetApiService } from '../shared/pet-api.service';
import { MdCardModule, MdButtonModule } from '@angular/material';

@Component({
  selector: 'app-petfinder',
  templateUrl: './petfinder.component.html',
  styleUrls: ['./petfinder.component.css']
})
export class PetfinderComponent implements OnInit {
  
  
  // api key for giphy

  // 07f89521d9bf46ceb34f27afc09fde9e

  constructor(private PetApiService: PetApiService) { }

  petProfiles = {};

    getPets() {
      this.PetApiService.getPets().subscribe(data => this.petProfiles = data.petfinder.pet.media.photos.photo[0].$t);
      // console.log(this.petProfiles);
    }


  ngOnInit() {
  }

}
