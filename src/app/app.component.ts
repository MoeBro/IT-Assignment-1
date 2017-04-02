import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { name = 'Angular'; 
  constructor(private router:Router) {}

  public guest: boolean;
  public user: boolean;

  ngOnInit(){
    if(localStorage.getItem('user') === null){
      this.user = false;
      this.guest = true;
    }
    else if (localStorage.getItem('user') !== null)
    {
      this.guest = false;
      this.user = true;
    }
  }

  logoutAccount(){
    localStorage.removeItem('user');
    this.user = false;
    this.guest = true;
    this.router.navigateByUrl('/login')
  }
}
