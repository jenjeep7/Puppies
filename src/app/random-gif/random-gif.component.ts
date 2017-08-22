import { Component, OnInit } from '@angular/core';
import { MdCardModule, MdButtonModule } from '@angular/material';
import { RandomGifService } from './../shared/random-gif.service';


@Component({
  selector: 'app-random-gif',
  templateUrl: './random-gif.component.html',
  styleUrls: ['./random-gif.component.css']
})
export class RandomGifComponent implements OnInit {

  constructor(private RandomGifService: RandomGifService) { }

  public randomGif = {};
  
getPuppyGif() {
      this.RandomGifService.getGif().subscribe(s => this.randomGif = s.data);
      console.log(this.randomGif);
    }

  ngOnInit() {

    
    
  }

}
