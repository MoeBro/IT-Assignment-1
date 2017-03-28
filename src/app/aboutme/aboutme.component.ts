import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'aboutme-app',
  templateUrl: 'aboutme.component.html',
})
export class AboutmeComponent {
  constructor(private router: Router){}
  name = 'Angular';
  homeButtonAccount() {
   this.router.navigateByUrl('/login');
  }
}