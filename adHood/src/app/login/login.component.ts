import { Component, OnInit } from '@angular/core';
import { ApiService } from './../apiProvider/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private username = '';
  private password = '';
  private credentials = {
    username: '',
    password: ''
  };

  constructor(private apiService: ApiService) {}

  public logar(){
    this.credentials.password = this.password;
    this.credentials.username = this.username;
    console.log(this.credentials.username);
    this.apiService.post('api/auth', this.credentials).subscribe(data => {
    console.log(data);
 });
}
  ngOnInit() {

  }

}
