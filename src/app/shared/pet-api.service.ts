import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PetApiService {

  public Apiheader = {};

  constructor(private http: Http) { }


  // createHeader(headers: Headers) {
  //   headers = new Headers();
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   this.Apiheader = headers;
  // }
  getPets() {
    return this.http.get('http://api.petfinder.com/pet.getRandom?key=3939b919821a55b16a67e70e0c97ea7b&format=json&output=basic&callback=?', this.Apiheader)
      .map((res: Response) => res.json());
  }

}
