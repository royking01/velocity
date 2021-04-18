import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { users } from "src/app/shared/employee";
import { GetUsersService } from "../../services/get-users.service";
//Declarations
declare var require: any;
const data: any = require("../../shared/data/employee.json");

@Component({
  selector: "app-dt-pinning",
  templateUrl: "./dt-pinning.component.html",
  styleUrls: ["./dt-pinning.component.scss"],
})
export class DTPinningComponent implements OnInit{
  rows = [ 

  ]
  selected: any[] = [];
  columns: any[] = [{ prop: "name" }, { name: "Company" }, { name: "Gender" }];

  level: any;
  // columns: any[] = [
  //   { prop: 'name' },
  //   { name: 'Company' },
  //   { name: 'Gender' }
  // ];

  constructor(public UserService: GetUsersService) {
   
  }
  ngOnInit(){
    this.test()
  }
  user(e: any) {
    alert(data.name);
    console.log(e);
  }
  test(){
    const data = []
    let did = []
    this.UserService.test()
    .then(e => {
       e.forEach((doc)=>{
        console.log('doc-id',doc)
        data.push(doc)
        console.log('data',data)
        let flat = [].concat.apply([], data)
        this.rows = flat 
        let flattened = [].concat.apply([], this.rows)
        console.log('flattened', flattened)
        this.rows = flattened
        // alert(doc[1].name)
        console.log('rows-new', this.rows)
       })
    })
}
  async onSelect(e) {
    //your code here
    // alert(e.selected[0].id)
    // console.log(e.selected[0].name, e.selected[0].id)
    let id = e.selected[0].id;
    location.href = `/pages/user-profile/${id}`;
    // alert(`/pages/user-profile/${id}`)
  }

  //  On Activation of dataTable's data row
  onActivate(event) {
    //your code here
  }

//  getTest(){
//     this.UserService.test()
//     .then((e)=>{
//       // this.rows = e
//       console.log('TEST', e)
//     })
//   }

}
