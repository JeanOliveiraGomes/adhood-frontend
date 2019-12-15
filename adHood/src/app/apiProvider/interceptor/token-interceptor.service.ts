import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@ANGULAR/common/http';
import { LoginService } from './../../services/login.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    //const loginService = this.injector.get(LoginService);
    const tokenRequest = req.clone({
      setHeaders: {
        Authorization: token ? token : 'DFGDF'
      }
    });
    return next.handle(tokenRequest);
  }

}
