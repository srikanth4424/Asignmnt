// import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/compiler/src/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor(private router:Route) { }

//   ngOnInit() {
//   }
//   login(){
//     this.router.navigateByUrl('/viewall');
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl('/post');
  }
}
