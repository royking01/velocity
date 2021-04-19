import { Component } from "@angular/core";
import { GetUsersService } from "../../services/get-users.service";

//Declarations
declare var require: any;
const data: any = require("../../shared/data/company.json");

@Component({
  selector: "app-dt-selection",
  templateUrl: "./dt-selection.component.html",
  styleUrls: ["./dt-selection.component.scss"],
})
export class DTSelectionComponent {
  rows: any[] = [];
  selected: any[] = [];
  columns: any[] = [{ prop: "name" }, { name: "Company" }, { name: "Gender" }];

  constructor(private UserService: GetUsersService) {
    this.getUsers();
  }

  //  On select of dataTable's data row
  async onSelect(e) {
    //your code here
    let id = e.selected[0].id;
    location.href = `/pages/company-profile/${id}`;
    console.log(id)
  }

  //  On Activation of dataTable's data row
  onActivate(event) {
    //your code here
  }

  // const id = +this.route.snapshot.paramMap.get('id');
  getUsers() {
    const data = []
    let did = []
    this.UserService.getCompany()
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
        // console.log('rows-new', this.rows)
       })
    })
  }
}
