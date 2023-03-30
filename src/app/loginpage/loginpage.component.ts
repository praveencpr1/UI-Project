import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginpageService } from '../loginpage.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
})
export class LoginpageComponent implements OnInit {
  isFormInvalid = false;
  areCredentialsInvalid = false;

  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
  };
  loginObj: any = {
    userName: '',
    password: ''
  };

  load = true;

  constructor(public srvc : LoginpageService, public router:Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.load = false;
    }, 1000);

    setTimeout(() => {
      this.load = true;
    }, 5000);

   

   const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    
  }
  }

  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
    };
  }
  onLogin() {
   debugger;
  const isUserExist = this.signupUsers.find(
   (m) =>
     m.userName == this.loginObj.userName &&
      m.password == this.loginObj.password
   );
    if (isUserExist != undefined) {
     alert('User Login Successfully');
     //var res = this.srvc.ValidateUser(this.loginObj.value['userName'], this.loginObj.value['password']);
 // if(res){
      this.router.navigate(['webpage']);
   // }
    
   } 
  else {
     alert('Wrong credentials');
    }
  }
}
