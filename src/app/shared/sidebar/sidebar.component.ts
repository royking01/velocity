import { Component, OnInit } from "@angular/core";
import { ROUTES } from "./sidebar-routes.config";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from "@angular/router";
import { SidebarService } from "../sidebar/sidebar.service";
// import * from 'firebase'
import * as $ from "jquery";
import * as firebase from "firebase";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  //    auth = firebase.auth()
  public menuItems: any[];

  constructor(public sidebarservice: SidebarService, private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (
        event instanceof NavigationEnd &&
        $(window).width() < 1025 &&
        (document.readyState == "complete" || false)
      ) {
        this.toggleSidebar();
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    $.getScript("./assets/js/app-sidebar.js");
  }
  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.clear();
        location.href = "/auth";
      })
      .catch((e) => {
        location.reload();
      });
    //
  }
}
