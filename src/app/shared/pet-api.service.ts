import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PetApiService {



  constructor(private http: Http) { 

  }
  getPets() {
    return this.http.get('http://api.petfinder.com/pet.getRandom?key=3939b919821a55b16a67e70e0c97ea7b&callback=?format=json')
    .map((res: Response) => res.json());
  }

}
