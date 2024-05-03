import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetjokesService {

  constructor(private https:HttpClient) { 

  }

  getJokes(){
     return this.https.get("https://api.chucknorris.io/jokes/random?category=dev")
  }
}
