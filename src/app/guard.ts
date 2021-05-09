import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    UrlTree,
  } from '@angular/router';
  import * as firbase from 'firebase/app';

  export class Guards implements CanActivate {
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean {
      const user = firbase.auth().currentUser;
      const email = localStorage.getItem('email');
      // const logged = localStorage.getItem('logged');
      // if (email  && email != user.email) {
      if (!email) {
        return false;
      } else {
        return true;
        
      }
    }
  }
  