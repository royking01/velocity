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


  constructor(private route:ActivatedRoute, private location:Location, private UserService:GetUsersService ) {
    this.getUser()
   }

  ngOnInit(): void {
  }

  getUser(): void{
   
      const id = +this.route.snapshot.paramMap.get('id');
    this.UserService.getUser(id)
    .subscribe(user => {
       this.currentUser = user
      //  console.log(user)
      }
    )
    }
}
