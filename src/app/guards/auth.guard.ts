import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
}
  from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../Services/authentification.service";



@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let authenticated = this.authService.isAuthenticated();
    if (authenticated == false) {
      this.router.navigateByUrl('/LogIn')
      return false;
    } else {
      return true;
    }
  }
}







