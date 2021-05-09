import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  auth = firebase.auth();
  constructor() {}

  //Create User
  async createUser(email:string, password:string) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    .then((usrRes) => {
      return usrRes;
    })
    .catch((err) => {
      return err;
    });    
  }

  
  //Create Admin Account

  //Create Rider Account
}
