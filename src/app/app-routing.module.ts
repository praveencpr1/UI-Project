import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
//import { AuthGuard } from 'auth-guard';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WebpageComponent } from './webpage/webpage.component';




const routes: Routes  = [
  {path:'loading', component: LoadingComponent},
 // {path: 'loginpage', component: LoginpageComponent},
 {path: 'webpage', component:WebpageComponent},
  //{path: '', component: AppComponent},
  
  
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
