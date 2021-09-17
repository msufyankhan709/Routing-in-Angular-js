import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"signup",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
