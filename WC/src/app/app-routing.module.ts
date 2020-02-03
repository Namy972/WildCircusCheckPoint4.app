import { TarifsComponent } from './pages/tarifs/tarifs.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'inscription', component: SignupComponent },
  { path: 'connexion', component: SigninComponent },
  { path: 'profile', component: ProfileComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
