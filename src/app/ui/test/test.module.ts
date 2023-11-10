import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './component/test/test.component';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    MatSnackBarModule,
    MatCardModule,
    MatRadioModule
  ]
})
export class TestModule { }
