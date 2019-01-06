import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
      nick:'Enrique',
      age: 20,
      email: 'example@gmail.com',
      friend: true,
      uid: 2
    };

    let usuario3: User ={
      nick:'Jose',
      age: 20,
      email: 'example@gmail.com',
      friend: false,
      uid: 3
    };

    let usuario4: User ={
      nick:'Pablo',
      age: 20,
      email: 'example@gmail.com',
      friend: false,
      uid: 4
    };
    this.friends=[usuario1,usuario2,usuario3,usuario4];
   }

   getFriends(){
     return this.friends;
   }
}
