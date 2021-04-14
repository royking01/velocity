import { Component } from '@angular/core';
import { users } from 'src/app/shared/employee';
import { GetUsersService } from "../../services/get-users.service";
//Declarations
declare var require: any;
const data: any = require('../../shared/data/employee.json');

@Component({
  selector: 'app-dt-pinning',
  templateUrl: './dt-pinning.component.html',
  styleUrls: ['./dt-pinning.component.scss']
})

export class DTPinningComponent {
  rows = [
    // { name:'roy' },
    // {name:'cassandra'}, 
  ];
  selected: any[] = [];
  // columns: any[] = [
  //   { prop: 'name' },
  //   { name: 'Company' },
  //   { name: 'Gender' }
  // ];

  constructor(private UserService:GetUsersService ) { 

this.getUsers()
    // console.log(data)
  }
  user(e: any){
    alert(data.name)
    console.log(e)
  }
  async onSelect(e) {
    //your code here
    // console.log(e.selected[0].name, e.selected[0].id)
    let id = e.selected[0].id
    location.href = `/pages/user-profile/${id}`
    // alert(`/pages/user-profile/${id}`)
   }
 
   //  On Activation of dataTable's data row
   onActivate(event) {
     //your code here
   }
   getUsers(): void{
    // const id = +this.route.snapshot.paramMap.get('id');

   const i  = this.UserService.getUsers().subscribe(users =>  { 
     this.rows = users;
    //  console.log('this are the users', users)

  })
  
  }
}