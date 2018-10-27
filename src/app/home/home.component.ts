import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends : User[];
  constructor() {
    let usuario1: User ={
      nick:'leo',
      age: 20,
      email: 'example@gmail.com',
      friend: true,
      uid: 1
    };

    let usuario2: User ={
      nick:'leo2',
      age: 20,
      email: 'example@gmail.com',
      friend: true,
      uid: 2
    };

    let usuario3: User ={
      nick:'leo3',
      age: 20,
      email: 'example@gmail.com',
      friend: false,
      uid: 3
    };

    let usuario4: User ={
      nick:'leo3',
      age: 20,
      email: 'example@gmail.com',
      friend: false,
      uid: 4
    };
    this.friends=[usuario1,usuario2,usuario3,usuario4];
   }

  ngOnInit() {
  }

}
