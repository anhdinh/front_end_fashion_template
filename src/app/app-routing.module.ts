import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch :'full'
  },
  {
    path:"contact",
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
