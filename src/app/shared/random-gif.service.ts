import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RandomGifService {

  public Apiheader = {};

  constructor(private http: Http) { }


  // createHeader(headers: Headers) {
  //   headers = new Headers();
  //   headers.append('Access-Control-Allow-Origin', '*');
  //   this.Apiheader = headers;
  // }
  getGif() {    return this.http.get('https://api.giphy.com/v1/gifs/random?api_key=07f89521d9bf46ceb34f27afc09fde9e&tag=Puppy&rating=G'
)

      .map((res: Response) => res.json());
  }

}
