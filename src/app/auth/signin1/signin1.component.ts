import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "app-signin1",
  templateUrl: "./signin1.component.html",
  styleUrls: ["./signin1.component.scss"],
})
export class Signin1Component implements OnInit {
  auth = firebase.auth();
  email = "";
  name = "";
  password: any = "";

  @ViewChild("f") signin1: NgForm;

  constructor(private router: Router, private route: ActivatedRoute) {
    // this.auth.signOut()
  }
  submit() {
    if (this.email  && this.password) {
      this.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((e) => {
          localStorage.setItem('email', this.email)
          localStorage.setItem('logged', 'true')
          location.href = "/dashboard"})
        .catch((e) => console.log(e.message));
    } else {
      console.log(
        "please make  sure you fill in your credentials with the appropriate information"
      );
      // location.href='/home';/
    }
  }
  //  On submit click, reset field value
  onSubmit() {
    this.signin1.reset();
  }

  // On ResetPassword link click
  onResetpassword1() {
    this.router.navigate(["reset-password1"], {
      relativeTo: this.route.parent,
    });
  }

  // On Signup1 link click
  onSignup1() {
    this.router.navigate(["signup1"], { relativeTo: this.route.parent });
  }

  ngOnInit() {}
}
