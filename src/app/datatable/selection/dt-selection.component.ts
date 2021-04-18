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
    location.href = `/pages/user-profile/${id}`;
    console.log(id)
  }

  //  On Activation of dataTable's data row
  onActivate(event) {
    //your code here
  }

  // const id = +this.route.snapshot.paramMap.get('id');
  getUsers(): void {
    const i = this.UserService.getCompany().subscribe((users) => {
      this.rows = users;
      //  console.log('this are the users', users)
    });
  }
}
