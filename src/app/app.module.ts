import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WebpageComponent } from './webpage/webpage.component';
import { LoadingComponent } from './loading/loading.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    WebpageComponent,
    LoadingComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
