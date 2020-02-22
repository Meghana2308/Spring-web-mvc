import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './views/shop/shop.component';
import { CollectionComponent } from './views/collection/collection.component';
import { ContactComponent } from './views/contact/contact.component';

import { LoginComponent } from './views/login/login.component';

import { RegisterComponent } from './views/register/register.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Home"
    }
  },
  {
    path: "shop",
    component: ShopComponent,
    data: {
      title: "shop"
    }
  },
  {
    path: "collection",
    component: CollectionComponent,
    data: {
      title: "collection"
    }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: {
      title: "Contact"
    }
  },
  
  {
    path: "login",
    component: LoginComponent,
    data: {
      title: "Login"
    }
  },
    {
      path: "register",
      component: RegisterComponent,
      data: {
        title: "Register"
      }
    }
 
  
  

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
