import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(){
     initializeApp(firebaseConfig)
  }
  // users = [
  //   {
  //     name: 'noor',
  //     status: 'single',
  //     salary:3000
  //   },
  //   {
  //     name: 'fayaz',
  //     status: 'single',
  //     salary:3400

  //   },
  //   {
  //     name: 'baba',
  //     status: 'single',
  //     salary:1000

  //   },
  // ];
  // getData(e:string){
  //    console.log(e)
  // }
  title = 'my-app';
}
