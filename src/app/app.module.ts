import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PetfinderComponent } from './petfinder/petfinder.component';
import { PetApiService } from './shared/pet-api.service';

import { AgmCoreModule } from '@agm/core';
import { MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PetfinderComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIQU8x47c0UFMLtyOa5R83l0kp-njiMSY'
    })
  ],
  providers: [PetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
