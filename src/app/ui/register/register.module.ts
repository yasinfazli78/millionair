import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './compoenet/register/register.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class RegisterModule { }
