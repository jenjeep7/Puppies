import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PetApiService {



  constructor(private http: Http) {}

  // gave up messing with headers and used chrome extention for CORS issue

  // createHeader(headers: Headers) {
  //   headers = new Headers();
  //   headers.append('Access-Control-Allow-Origin', '*');


  getPets() {
    return this.http.get('http://api.petfinder.com/pet.getRandom?key=3939b919821a55b16a67e70e0c97ea7b&format=json&output=basic')
    .map((res: Response) => res.json());
  }

}
