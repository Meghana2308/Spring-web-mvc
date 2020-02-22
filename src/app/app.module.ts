import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//components
import { HeaderComponent } from './views/_layout/header/header.component';
import { FooterComponent } from './views/_layout/footer/footer.component';


import { HomeComponent } from './views/home/home.component';
import { ShopComponent } from './views/shop/shop.component';
import { CollectionComponent } from './views/collection/collection.component';
import { ContactComponent } from './views/contact/contact.component';

import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    CollectionComponent,
    ContactComponent,
   
    LoginComponent,
   
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent,AppRoutingModule]
})
export class AppModule { }
