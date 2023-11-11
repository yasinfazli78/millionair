import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private _snackBar: MatSnackBar) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  logIn() {
    const isValid = this.loginForm.valid;
    if (isValid) {
      this.loginService.isUserExist(this.loginForm.value.email, this.loginForm.value.password).pipe().subscribe({
        next: (result: any) => {
          if (result?.length > 0) {
            localStorage.setItem('userId','@#$%^&*()')
            this.router.navigate(['/test'])
          } else {
            this._snackBar.open('user doesnt exist!', 'close', {
              duration:1000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }
        }
      })

    } else {
      this.loginForm.controls['email'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
    }

  }
}
