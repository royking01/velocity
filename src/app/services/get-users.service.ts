import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
// import { users} from "../../shared/data/employee.json "
import { users } from "../shared/employee";
import * as firebase from "firebase";

import { company } from "../shared/data/company";
@Injectable({
  providedIn: "root",
})
export class GetUsersService {
  level = [];
  constructor() {
    // this.getUsers()
  }

 public async test(){
    // this.getUsers()
    var cities = [];
    await firebase
      .firestore()
      .collection("db")
      .doc("users")
      .collection("dispatchers")
      .where("name", "!=", "")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          cities.push(doc.data());
          // this.level.push(doc.data())
        });
        // console.log('cties', cities);
        this.level = cities;
        console.log("levels", cities);
      });
  
      return of(cities)
   
    
  } // return of(this.level)

 async getUser(id: any){
    // console.log(users)
    if(id == null) return
   const user = await firebase
    .firestore()
    .collection("db")
    .doc("users")
    .collection("dispatchers")
    // .where("id", "==", id)
    .doc(id)
    .get()
    return user.data()
  }
  getCompany(): Observable<any> {
    return of(company);
  }
  getComp(id): Observable<any> {
    // console.log(users)
    return of(company.find((u) => u.id === id));
  }
}
