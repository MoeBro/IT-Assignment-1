import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {LoginComponent} from './login/login.component';
import {AboutmeComponent} from './aboutme/aboutme.component';

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot([
                    { path: '',redirectTo: 'login', pathMatch: 'full'},
                    {path: 'login', component: LoginComponent},
                    {path: 'aboutme', component: AboutmeComponent}
                  ]) ],
  declarations: [ AppComponent,
                  LoginComponent,
                  AboutmeComponent ],
  bootstrap:    [ AppComponent ],

  

})
export class AppModule { }
