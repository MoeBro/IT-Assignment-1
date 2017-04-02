import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'register-app',
  templateUrl: 'register.component.html',
})
export class RegisterComponent { name = 'Angular';
  constructor(private router: Router){}
  username: string;
  password1: string;
  password2: string;

  registerAction(){
    console.log("registering is possible soon!");
  }
}


