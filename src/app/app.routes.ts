import { Routes } from '@angular/router';
import { HomePageComponent } from '../Features/components/home-page/home-page.component';
import { LoginPageComponent } from '../Features/components/login-page/login-page.component';
import { RegistrationPageComponent } from '../Features/components/registration-page/registration-page.component';

 export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'home', component: HomePageComponent }, 
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegistrationPageComponent },
    { path: '**', redirectTo: 'home' },
  ];
