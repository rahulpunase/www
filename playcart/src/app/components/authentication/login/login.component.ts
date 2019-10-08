import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  lf: FormGroup;
  constructor() {
    this.lf = new FormGroup({
      emailOrPhoneNumber: new FormControl('', 
        Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
   }

  ngOnInit() {
    
  }
  get emailOrPhoneNumber() {
    return this.lf.controls.emailOrPhoneNumber;
  }

  onLoginFormSubmit() {

  }

}
