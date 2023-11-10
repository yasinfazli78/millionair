import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TestService} from "../../service/test.service";
import {QuestionModel} from "../../model/question.model";
import {FormControl} from "@angular/forms";
import {Subject} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  options: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  questionModel!: QuestionModel;
  index: number = 1;
  answer = new FormControl();
  confirmAnswer: boolean = false

  constructor(private _snackBar: MatSnackBar, private testService: TestService) {
  }

  ngOnInit(): void {
    /* this._snackBar.open('Welcome To The Test', 'close', {
       horizontalPosition: 'center',
       verticalPosition: 'top',
     });*/

    this.getQs(this.index);
  }


  getQs(index: number) {
    this.testService.getQuestion(index).pipe().subscribe(
      {
        next: (result: any) => {
          this.questionModel = result;
        }
      }
    );
  }

  nextQuestion(point: number) {
    this.confirmAnswer = true;

    /*setTimeout(() => {
      this.confirmAnswer = false;
      this.index++;
      this.getQs(this.index);
    }, 2000)*/

  }

  previousQuestion() {
    this.index--;
    this.getQs(this.index);
  }
}
