import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friends : User[];
  friendId: any;
  friend:User;
  constructor(private activatedRoute:ActivatedRoute) {
    this.friendId= this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);
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
    this.friend= this.friends.find((record)=>{
      return record.uid == this.friendId;
    });
    console.log(this.friend); 
  }

  ngOnInit() {
  }

}
