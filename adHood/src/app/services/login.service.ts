import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(){
    localStorage.setItem('token', '');
    localStorage.setItem('currentUser', '');
  }

}
