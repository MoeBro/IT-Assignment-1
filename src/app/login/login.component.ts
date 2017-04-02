import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent }  from '../app.component';

@Component({
  moduleId: module.id,
  selector: 'login-app',
  templateUrl: 'login.component.html',
})
export class LoginComponent { name = 'Angular';
  constructor(private router: Router, private app: AppComponent){}
  username: string;
  password: string;
  
  loginAccount() {
    localStorage.setItem('user', JSON.stringify(this.username));
    this.app.guest = false;
    this.app.user = true;
    this.router.navigateByUrl('/aboutme');
  }
}


