import { Component, OnInit } from "@angular/core";
import { user } from "./user-interface";
import * as firebase from "firebase";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  confirmPassword: any;
  password: any;
  notification: string;
  email: string;
  auth = firebase.auth();
  disableBtn: boolean;
  button_pressed: boolean;
  Name: string = ' ';
  age: Number;
  checked: boolean;
  gender: string;
  mobile: Number;
  registering: boolean = false
  constructor() {}

  ngOnInit() {}
  validateEmail(emai: any) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emai);
  }

  checkede(e) {
    console.log(e.target.checked);
  }

  async signup() {
    this.registering = true
    try {
      if (this.Name  && this.email) {
       
        const user: user = {
          id: this.Name,
          email: this.email.toLowerCase(),
          created_date: new Date(),
          name: this.Name,
          gender: this.gender,
          mobile:this.mobile,
          age: this.age,
          active: true,
        };
        await firebase
          .firestore()
          .collection("db")
          .doc("users")
          .collection("dispatchers")
          .doc(this.Name)
          .set(user, { merge: true });
        // location.href = "/dashboard";
        console.log(user);
        alert(this.Name)
        console.log( this.Name)
        this.registering = false
      }else{
        alert('false information')
        this.registering = false
      }
    } catch (err) {
      this.registering = false
      alert(err)
      console.log(        "please make sure you register your credentials with the appropriate information"      );
      this.notification =
        "please make sure you register your credentials with the appropriate information";
    }
  }
}
