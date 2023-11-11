import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TestService} from "../../service/test.service";
import {QuestionModel} from "../../model/question.model";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
   questionModel!: QuestionModel;
   id: number = 1;
   showAnswer: boolean = false;
   @ViewChild('result', {static: false})result!: any;


  constructor(private _snackBar: MatSnackBar, public testService: TestService,private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getQs(this.id);
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

  getAnswer(isCorrect: boolean, point: number) {
    this.showAnswer = true;
    this.testService.setScore(isCorrect ? point : 0)
  }

  next() {
    if (this.id < 5) {
      this.showAnswer = false;
      this.id++;
      this.getQs(this.id);
    }else {
      console.log(this.testService.getScore);
      this.dialog.open(this.result)
    }
  }

  previous() {
    this.showAnswer = false;
    this.id--;
    this.getQs(this.id);
  }
}
