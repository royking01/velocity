import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as firebase from "firebase";
import { GetUsersService } from "src/app/services/get-users.service";

@Component({
  selector: "app-company-profile",
  templateUrl: "./company-profile.component.html",
  styleUrls: ["./company-profile.component.scss"],
})
export class CompanyProfileComponent implements OnInit {
  currentUser: any;
  userAvailable: boolean = false;
  Name: string = "";
  lastName: string;
  mobile: number = 0;
  // email:any
  image: any;
  header: any;
  constructor(
    private route: ActivatedRoute,
    // private location: Location,
    private UserService: GetUsersService
  ) {
    this.getUser();
  }

  ngOnInit(): void {
    setTimeout(() => {
      // this.userAvailable = true
    }, 5000);
  }
  async blockUser() {
    await firebase
      .firestore()
      .collection("db")
      .doc("users")
      .collection("companies")
      .doc(this.currentUser.id)
      .update({
        blocked: !this.currentUser.blocked,
      })
      .then((d) => location.reload());
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get("id");
    this.UserService.getComp(id).then((user) => {
      if (!user) return (location.href = "/dashboard");
      if (user != null) this.userAvailable = true;
      this.currentUser = user;
      //  console.log(user)
    });
  }

  async upload(e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file).catch((err) => console.log(err));
    //  .then(()=>{ console.log('uploaded file', file.name)})
    const fileUrl = await fileRef.getDownloadURL();
    this.image = fileUrl;
  }
  async uploadHeader(e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file).catch((err) => console.log(err));
    //  .then(()=>{ console.log('uploaded file', file.name)})
    const fileUrl = await fileRef.getDownloadURL();
    this.header = fileUrl;
  }
  async update() {
    if (!this.currentUser.mobile) {
      this.mobile = 0;
    } else {
      this.mobile = this.currentUser.mobile;
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
        header: this.header,
      })
      .then((d) => location.reload())
      .catch((err) => alert("Error processing request, please try again"));
  }
}
