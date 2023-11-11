
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    const currentUser = localStorage.getItem('userId');
    if (currentUser) {
      return true;
    }
    this.router.navigate([''])
    return false;
  }
}
