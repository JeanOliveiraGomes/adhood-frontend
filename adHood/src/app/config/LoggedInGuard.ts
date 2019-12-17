import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {

     constructor(  private router: Router) { }

     canActivate(): boolean {
        const logged = sessionStorage.getItem('token') ? true : false;
        if (!logged) {
            this.router.navigate(['/']);
        }
        return logged;
    }

}