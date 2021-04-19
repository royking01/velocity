import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { GetUsersService } from "../../../services/get-users.service";
import { users } from 'src/app/shared/employee';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 currentUser: any;
  userAvailable:boolean = false

  constructor(private route:ActivatedRoute, private location:Location, private UserService:GetUsersService ) {
    this.getUser()
   }

  ngOnInit(): void {
    setTimeout(()=>{
      // this.userAvailable = true
    },5000)
  }

  getUser(): void{
      const id = this.route.snapshot.paramMap.get('id');
    this.UserService.getUser(id)
    .then(user => {
       this.currentUser = user
       if(!user) return location.href = '/dashboard'
       if(user != null) this.userAvailable = true

      //  console.log(user)
      }
    )
    }
}
