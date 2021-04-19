import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {company} from './company'
@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  confirmPassword: any;
  password: any;
  notification: string;
  Address: string;
  auth = firebase.auth();
  disableBtn: boolean;
  button_pressed: boolean;
  Name: string = ' ';
  age: Number;
  checked: boolean;
  gender: string;
  mobile: Number;
  registering: boolean = false

  constructor() { }
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
    const key = firebase.database().ref().push().key;
    try {
      if (this.Name) {
        const user: company = {
          id: key,
          address: this.Address,
          created_date: new Date(),
          name: this.Name,
          // gender: this.gender,
          mobile:this.mobile,
          // age: this.age,
          active: true,
        };
                await firebase
          .firestore()
          .collection("db")
          .doc("users")
          .collection("companies")
          .doc(key)
          .set(user, { merge: true });
        location.href = "/datatable/companies";
        // console.log(user);
        // alert(this.Name)
        // console.log( this.Name)
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