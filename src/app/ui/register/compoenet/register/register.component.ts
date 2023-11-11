import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {RegisterService} from "../../service/register.service";
import {RegisterModel} from "../../model/register.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private registerService: RegisterService, private _snackBar: MatSnackBar, private router: Router) {
    this.formRegister = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  register() {
    const isValid = this.formRegister.valid;
    if (isValid){
      this.registerService.postUser(this.formRegister.value).pipe().subscribe({
        next: (result: any) => {
          this.router.navigate(['/'])
          this._snackBar.open('You have an account now', 'close', {
            duration: 1000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
    } else{
      this.formRegister.controls['email'].markAsTouched();
      this.formRegister.controls['password'].markAsTouched();
    }

  }
}
