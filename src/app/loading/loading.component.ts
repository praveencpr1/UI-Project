import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

// progress!: 1000;
// constructor(public srv : LoadingService, public router:Router) { }
//load:any

 // progress!: 1000;
 // constructor(public srv : LoadingService, public router:Router) { }
 //load:any
 loadi=false;
 constructor(){}
  ngOnInit(): void {
   setTimeout(()=>{
      this.loadi=true;
   },1000);
  }
//loads(){
 //  var res = this.srv.ValidateUser(this.progress)
 // if(res){
 // this.router.navigate(['logingpage']);
 // }
//}
}
