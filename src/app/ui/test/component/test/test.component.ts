import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  options: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._snackBar.open('Welcome To The Test', 'close',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

}
