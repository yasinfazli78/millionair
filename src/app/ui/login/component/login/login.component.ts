import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  logIn() {
    console.log(this.loginForm.value);
    this.router.navigate(['/test'])
  }
}
