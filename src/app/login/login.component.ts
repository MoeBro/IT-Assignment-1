import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login-app',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  constructor(private router: Router){}
  username: String;
  password: String;
  name = 'Angular';
  loginAccount() {
   this.router.navigateByUrl('/aboutme');
  }
  registerAction(){
    this.router.navigateByUrl('./register')
  }
}


