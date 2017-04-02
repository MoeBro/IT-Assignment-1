import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';

import { AuthService } from './guard/auth.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  ReactiveFormsModule,
                  RouterModule.forRoot([
                    {path: '',redirectTo: 'login', pathMatch: 'full'},
                    {path: 'login', component: LoginComponent},
                    {path: 'register', component: RegisterComponent},
                    {path: 'aboutme', component: AboutmeComponent, canActivate: [AuthService]},
                    {path: 'gallery', component: GalleryComponent, canActivate: [AuthService]},
                  ]) ],
  declarations: [ AppComponent,
                  LoginComponent,
                  AboutmeComponent,
                  RegisterComponent,
                  GalleryComponent, ],
  providers: [ AuthService ],
  bootstrap:    [ AppComponent ],

  

})
export class AppModule { }
