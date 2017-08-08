import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PetfinderComponent } from './petfinder/petfinder.component';
import { ErrorViewComponent } from './../errors/error-view/error-view.component';


// services
import { PetApiService } from './shared/pet-api.service';

// material
import { MdCardModule, 
        MdButtonModule, 
        MdSidenavModule, 
        MdListModule,
        MdIconModule 
      } from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { RandomGifComponent } from './random-gif/random-gif.component';

const appRoutes: Routes = [
// list of all the routes
  { path: 'pet-finder', component: PetfinderComponent },
  { path: 'app-map', component: MapComponent },
  { path: 'app-random-gif', component: RandomGifComponent},
  { path: '', component: MapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PetfinderComponent,
    SideNavComponent,
    HeaderComponent,
    ErrorViewComponent,
    RandomGifComponent
    
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule,
    MdListModule,
    MdIconModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } //for debugging
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIQU8x47c0UFMLtyOa5R83l0kp-njiMSY'
    })
  ],
  providers: [PetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
