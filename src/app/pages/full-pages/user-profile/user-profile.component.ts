import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { GetUsersService } from "../../../services/get-users.service";
// import { users } from 'src/app/shared/employee';
import * as firebase from "firebase/app";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  currentUser: any
  userAvailable: boolean = false;
  Name: string = ''
  lastName: string;
  mobile: number = 0
  // email:any
  image: any;
  header: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private UserService: GetUsersService
  ) {
    this.getUser();
  }

  ngOnInit(): void {
    
    setTimeout(() => {
      // this.userAvailable = true
      if(this.userAvailable == false){
        // const id = this.route.snapshot.paramMap.get("id");
        // location.href = `http://localhost:4200/pages/user-profile/${id}`
        location.reload()
      }
    }, 5000);
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.UserService.getUser(id).then((user) => {
      this.currentUser = user;
      if (!user) return (location.href = "/dashboard");
      if (user != null) this.userAvailable = true;
      //  console.log(user)
    });
  }
  async upload(e){
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(file.name)
   await fileRef.put(file)
   .catch(err => console.log(err))
  //  .then(()=>{ console.log('uploaded file', file.name)})
    const fileUrl = await fileRef.getDownloadURL() 
    this.image = fileUrl
}
async uploadHeader(e){
  const file = e.target.files[0]
  const storageRef = firebase.storage().ref()
  const fileRef = storageRef.child(file.name)
 await fileRef.put(file)
 .catch(err => console.log(err))
//  .then(()=>{ console.log('uploaded file', file.name)})
  const fileUrl = await fileRef.getDownloadURL() 
  this.header = fileUrl
}
async blockUser(){
 await firebase
      .firestore()
      .collection("db")
      .doc("users")
      .collection("dispatchers")
      .doc(this.currentUser.id)
      .update({
        blocked:!this.currentUser.blocked
      }).then((d)=>location.reload())
}
 async update() {
    if(!this.currentUser.mobile){
      this.mobile = 0
    }else{
      this.mobile = this.currentUser.mobile
    }
 await firebase
      .firestore()
      .collection("db")
      .doc("users")
      .collection("dispatchers")
      .doc(this.currentUser.id)
      .update({
        name: this.Name,
        mobile: this.mobile,
        lastName: this.lastName,
        image: this.image,
       header:this.header
      }).then(d => location.reload())
      .catch(err => alert('Error processing request, please try again'))
  }
}
