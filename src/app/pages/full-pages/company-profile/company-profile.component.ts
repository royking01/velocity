import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUsersService } from 'src/app/services/get-users.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  currentUser: any;
  userAvailable:boolean = false

  constructor(private route:ActivatedRoute, private UserService:GetUsersService ) {
    this.getUser()
   }

  ngOnInit(): void {
    setTimeout(()=>{
      // this.userAvailable = true
    },5000)
  }

  getUser(): void{
      const id = this.route.snapshot.paramMap.get('id');
    this.UserService.getComp(id)
    .then(user => {
       this.currentUser = user
       if(!user) return location.href = '/dashboard'
       if(user != null) this.userAvailable = true

      //  console.log(user)
      }
    )
    }
}